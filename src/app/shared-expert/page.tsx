"use client";

import { useEffect, useState } from "react";
import {
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  FolderKanban,
  Globe2,
  Loader2,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound,
} from "lucide-react";

const API_BASE_URL = "https://scale-padi-xc76.onrender.com/api/v1";

type ExpertProfile = {
  headline: string | null;
  marketingSummary: string | null;
  roles: string[];
  skills: string[];
  preferredIndustries: string[];
  yearsOfExperience: string | null;
  verifiedYearsOfExperience: string | null;
  experienceLevel: string | null;
  availability: string | null;
  country: string | null;
  completedProjects: number | null;
  averageRating: number | null;
  ratingCount: number | null;
};

type ApiResponse = {
  status: boolean;
  message?: string;
  data?: { profile?: ExpertProfile };
};

export default function SharedExpertPage() {
  const [profile, setProfile] = useState<ExpertProfile | null>(null);
  const [state, setState] = useState<"loading" | "ready" | "error" | "missing">("loading");

  useEffect(() => {
    const identity = new URLSearchParams(window.location.search).get("identity");
    if (!identity) {
      setState("missing");
      return;
    }

    const controller = new AbortController();
    async function getProfile() {
      try {
        const response = await fetch(`${API_BASE_URL}/shared-experts/${encodeURIComponent(identity)}`, {
          signal: controller.signal,
        });
        const result = (await response.json()) as ApiResponse;
        if (!response.ok || !result.status || !result.data?.profile) throw new Error(result.message);
        setProfile(result.data.profile);
        setState("ready");
      } catch (error) {
        if ((error as Error).name !== "AbortError") setState("error");
      }
    }

    getProfile();
    return () => controller.abort();
  }, []);

  if (state === "loading") return <PageShell><LoadingState /></PageShell>;
  if (state === "missing") return <PageShell><EmptyState title="This expert link is incomplete" description="Ask the person who shared this profile to send the full link." /></PageShell>;
  if (state === "error" || !profile) return <PageShell><EmptyState title="This expert profile is unavailable" description="The link may have expired or the profile is no longer public. Please try again later." /></PageShell>;

  const experience = profile.verifiedYearsOfExperience || profile.yearsOfExperience || profile.experienceLevel || "Experience not specified";
  const availability = profile.availability ? capitalise(profile.availability) : "Availability not specified";
  const rating = profile.averageRating && profile.ratingCount ? `${profile.averageRating.toFixed(1)} rating` : "New on ScalePadi";

  return (
    <PageShell>
      <main className="px-4 pb-12 pt-6 sm:px-6 sm:pt-10 lg:px-12 lg:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-center gap-2 text-sm font-medium text-[#526581] sm:mb-8">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#E8F0FF] text-[#1746A2]"><Sparkles size={16} /></span>
            Talent profile
          </div>

          <section className="overflow-hidden rounded-2xl border border-[#DCE5F1] bg-white shadow-[0_18px_45px_rgba(24,54,105,0.08)] sm:rounded-3xl">
            <div className="relative overflow-hidden bg-[#0D357B] px-5 py-8 text-white sm:px-10 sm:py-12">
              <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[32px] border-white/10" />
              <div className="absolute -bottom-24 left-[35%] h-52 w-52 rounded-full bg-[#5791F0]/20 blur-3xl" />
              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white/15 text-2xl font-bold ring-1 ring-white/25 sm:h-20 sm:w-20">SP</div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#DFF8EB] px-2.5 py-1 text-xs font-bold text-[#167445]"><ShieldCheck size={14} /> Verified ScalePadi Expert</span>
                    {profile.country && <span className="inline-flex items-center gap-1 text-sm text-[#D3E2FC]"><MapPin size={15} /> {profile.country}</span>}
                  </div>
                  <h1 className="mt-4 text-2xl font-bold leading-tight sm:text-4xl">{profile.headline || "ScalePadi Expert"}</h1>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-[#D7E5FC] sm:text-base">{profile.marketingSummary || "A verified professional available through the ScalePadi talent network."}</p>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-8 lg:p-10">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                <Stat icon={Clock3} label="Experience" value={experience} />
                <Stat icon={CheckCircle2} label="Availability" value={availability} available={profile.availability?.toLowerCase() === "available"} />
                <Stat icon={FolderKanban} label="Projects" value={`${profile.completedProjects || 0} completed`} />
                <Stat icon={Star} label="Rating" value={rating} />
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-[1.45fr_0.9fr] lg:gap-12">
                <div className="space-y-8">
                  <ProfileGroup icon={BriefcaseBusiness} title="Roles" items={profile.roles} empty="Roles have not been listed yet." variant="primary" />
                  <ProfileGroup icon={Sparkles} title="Core skills" items={profile.skills} empty="Skills have not been listed yet." />
                </div>
                <aside className="rounded-2xl bg-[#F6F9FF] p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-[#1746A2]"><UsersRound size={19} /><h2 className="font-bold">Ideal industries</h2></div>
                  <p className="mt-2 text-sm leading-6 text-[#667085]">This expert is especially interested in opportunities within these industries.</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {profile.preferredIndustries.length ? profile.preferredIndustries.map((industry) => <span key={industry} className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-[#344054] shadow-sm ring-1 ring-[#E2E8F2]">{industry}</span>) : <span className="text-sm text-[#667085]">No preferred industries listed.</span>}
                  </div>
                  <div className="mt-7 border-t border-[#DDE7F6] pt-5 text-sm leading-6 text-[#526581]"><Globe2 className="mr-2 inline text-[#1746A2]" size={17} /> Profile shared securely via ScalePadi.</div>
                </aside>
              </div>
            </div>
          </section>
        </div>
      </main>
    </PageShell>
  );
}

function PageShell({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-[#F7F9FC]">{children}</div>;
}

function LoadingState() {
  return <main className="grid min-h-[60vh] place-items-center px-5"><div className="flex flex-col items-center gap-4 text-[#526581]"><Loader2 className="animate-spin text-[#1746A2]" size={30} /><p className="text-sm font-medium">Loading expert profile…</p></div></main>;
}

function EmptyState({ title, description }: { title: string; description: string }) {
  return <main className="grid min-h-[60vh] place-items-center px-5"><div className="max-w-md rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-[#E0E7F0] sm:p-8"><div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-[#E8F0FF] text-[#1746A2]"><UsersRound /></div><h1 className="mt-5 text-xl font-bold text-[#172033]">{title}</h1><p className="mt-3 text-sm leading-6 text-[#667085]">{description}</p></div></main>;
}

function Stat({ icon: Icon, label, value, available = false }: { icon: typeof Clock3; label: string; value: string; available?: boolean }) {
  return <div className="min-w-0 rounded-xl border border-[#E5EAF2] p-3 sm:p-4"><Icon className={available ? "text-[#14945D]" : "text-[#1746A2]"} size={18} /><p className="mt-3 text-xs text-[#667085]">{label}</p><p className="mt-1 truncate text-sm font-bold text-[#27364E]" title={value}>{value}</p></div>;
}

function ProfileGroup({ icon: Icon, title, items, empty, variant = "default" }: { icon: typeof Clock3; title: string; items: string[]; empty: string; variant?: "default" | "primary" }) {
  return <section><div className="flex items-center gap-2"><Icon size={19} className="text-[#1746A2]" /><h2 className="text-lg font-bold text-[#172033]">{title}</h2></div><div className="mt-4 flex flex-wrap gap-2">{items.length ? items.map((item) => <span key={item} className={`rounded-lg px-3 py-2 text-sm font-semibold ${variant === "primary" ? "bg-[#1746A2] text-white" : "bg-[#EEF4FF] text-[#174B9F]"}`}>{item}</span>) : <p className="text-sm text-[#667085]">{empty}</p>}</div></section>;
}

function capitalise(value: string) { return value.charAt(0).toUpperCase() + value.slice(1); }

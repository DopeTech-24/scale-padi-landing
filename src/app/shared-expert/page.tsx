"use client";

import { useEffect, useState } from "react";
import {
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  ExternalLink,
  FolderKanban,
  Globe2,
  GraduationCap,
  Loader2,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  UsersRound,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const API_BASE_URL = "https://scale-padi-xc76.onrender.com/api/v1";

type ExpertProfile = {
  headline: string | null;
  marketingSummary: string | null;
  roles: string[];
  skills: string[];
  professionalExperiences?: ProfessionalExperience[];
  certificationsAndCourses?: CertificationAndCourse[];
  education?: Education[];
  toolsAndSoftwareProficiency?: string[];
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

type Education = {
  id?: string;
  _id?: string;
  degree?: string;
  institution?: string;
  fieldOfStudy?: string;
  year?: string;
};

type ProfessionalExperience = {
  id?: string;
  _id?: string;
  companyName?: string;
  jobTitle?: string;
  startDate?: string;
  endDate?: string;
  keyAchievements?: string[];
};

type CertificationAndCourse = {
  id?: string;
  _id?: string;
  certificationName?: string;
  issuingBody?: string;
  name?: string;
  title?: string;
  issuer?: string;
  institution?: string;
  year?: string;
  completionDate?: string;
  credentialUrl?: string;
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
  const roles = profile.roles || [];
  const skills = profile.skills || [];
  const tools = profile.toolsAndSoftwareProficiency || [];
  const industries = profile.preferredIndustries || [];
  const professionalExperiences = profile.professionalExperiences || [];
  const education = profile.education || [];
  const certifications = profile.certificationsAndCourses || [];

  return (
    <PageShell>
      <main className="px-4 pb-12 pt-6 sm:px-6 sm:pt-10 lg:px-12 lg:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-center gap-2 text-sm font-medium text-[#526581] sm:mb-8">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#E8F0FF] text-[#1746A2]"><Sparkles size={16} /></span>
            Talent profile
          </div>

          <section className="overflow-hidden rounded-2xl border border-[#D1DAEC80] bg-white shadow-[0_18px_45px_rgba(24,54,105,0.08)] sm:rounded-3xl">
            <div className="relative overflow-hidden bg-[#0D357B] px-5 py-8 text-white sm:px-8 sm:py-10 lg:px-10">
              <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[32px] border-white/10" />
              <div className="absolute -bottom-24 left-[35%] h-52 w-52 rounded-full bg-[#5791F0]/20 blur-3xl" />
              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white/15 text-xl font-bold ring-1 ring-white/25 sm:h-20 sm:w-20 sm:text-2xl">SP</div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#DFF8EB] px-2.5 py-1 text-xs font-bold text-[#167445]"><ShieldCheck size={14} /> Verified ScalePadi Expert</span>
                    {profile.country && <span className="inline-flex items-center gap-1 text-sm text-[#D3E2FC]"><MapPin size={15} /> {profile.country}</span>}
                  </div>
                  <h1 className="mt-3 text-2xl font-bold leading-tight sm:text-4xl">{profile.headline || "ScalePadi Expert"}</h1>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-[#D7E5FC] sm:text-base">Public professional profile</p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 lg:p-8">
              <div className="grid gap-4 lg:grid-cols-[minmax(0,1.45fr)_minmax(290px,0.8fr)] lg:gap-6">
                <section className="rounded-2xl border border-[#D1DAEC80] bg-[#FBFCFC] p-5 sm:rounded-3xl sm:p-7 lg:col-span-2">
                  <SectionTitle icon={Sparkles}>Professional summary</SectionTitle>
                  <p className="mt-4 max-w-5xl text-sm leading-7 text-[#353D44] sm:text-[15px]">{profile.marketingSummary || "This expert has not added a professional summary yet."}</p>
                </section>

                <div className="space-y-4">
                  <section className="rounded-2xl border border-[#D1DAEC80] bg-white p-5 sm:rounded-3xl sm:p-6">
                    <SectionTitle icon={BriefcaseBusiness}>Professional experience</SectionTitle>
                    <div className="mt-6 space-y-6">
                      {professionalExperiences.length ? professionalExperiences.map((item, index) => <ExperienceItem key={item.id || item._id || `${item.companyName}-${index}`} experience={item} />) : <EmptyText>No professional experience added yet.</EmptyText>}
                    </div>
                  </section>

                  <section className="rounded-2xl border border-[#D1DAEC80] bg-white p-5 sm:rounded-3xl sm:p-6">
                    <SectionTitle icon={GraduationCap}>Education</SectionTitle>
                    <div className="mt-5 space-y-4">
                      {education.length ? education.map((item, index) => <EducationItem key={item.id || item._id || `${item.institution}-${index}`} education={item} />) : <EmptyText>No education details added yet.</EmptyText>}
                    </div>
                  </section>

                  <section className="rounded-2xl border border-[#D1DAEC80] bg-white p-5 sm:rounded-3xl sm:p-6">
                    <SectionTitle icon={Award}>Certifications & courses</SectionTitle>
                    <div className="mt-5 space-y-3">
                      {certifications.length ? certifications.map((item, index) => <CertificationItem key={item.id || item._id || `${item.certificationName || item.name || item.title}-${index}`} certification={item} />) : <EmptyText>No certifications or courses added yet.</EmptyText>}
                    </div>
                  </section>
                </div>

                <aside className="space-y-4">
                  <section className="rounded-2xl border border-[#D1DAEC80] bg-white p-5 sm:rounded-3xl sm:p-6">
                    <SectionTitle icon={Target}>Professional details</SectionTitle>
                    <dl className="mt-5 space-y-4 text-sm">
                      <Detail icon={Clock3} label="Experience" value={experience} />
                      <Detail icon={MapPin} label="Location" value={profile.country || "Not specified"} />
                      <Detail icon={CheckCircle2} label="Availability" value={availability} available={profile.availability?.toLowerCase() === "available"} />
                    </dl>
                  </section>

                  <section className="rounded-2xl border border-[#D1DAEC80] bg-white p-5 sm:rounded-3xl sm:p-6">
                    <SectionTitle icon={Wrench}>Skills & tools</SectionTitle>
                    <div className="mt-5"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#878A93]">Skills</p>{skills.length ? <div className="mt-3"><TagList values={skills} /></div> : <EmptyText>No skills listed yet.</EmptyText>}</div>
                    <div className="mt-6 border-t border-[#EFF2F3] pt-5"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#878A93]">Tools & software</p>{tools.length ? <div className="mt-3"><TagList values={tools} tone="orange" /></div> : <EmptyText>No tools or software listed yet.</EmptyText>}</div>
                    <div className="mt-6 border-t border-[#EFF2F3] pt-5"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#878A93]">Roles</p>{roles.length ? <div className="mt-3"><TagList values={roles} tone="neutral" /></div> : <EmptyText>No roles listed yet.</EmptyText>}</div>
                  </section>

                  <section className="rounded-2xl border border-[#D1DAEC80] bg-white p-5 sm:rounded-3xl sm:p-6">
                    <SectionTitle icon={Target}>Work preferences</SectionTitle>
                    <p className="mt-3 text-sm leading-6 text-[#667085]">This expert is particularly interested in opportunities within these industries.</p>
                    {industries.length ? <div className="mt-5"><TagList values={industries} tone="neutral" /></div> : <EmptyText>No preferred industries listed yet.</EmptyText>}
                  </section>

                  <section className="rounded-2xl border border-[#D1DAEC80] bg-white p-5 sm:rounded-3xl sm:p-6">
                    <SectionTitle icon={Wrench}>Platform activity</SectionTitle>
                    <div className="mt-5 grid grid-cols-2 gap-2.5"><ActivityStat icon={FolderKanban} label="Projects" value={`${profile.completedProjects || 0}`} /><ActivityStat icon={Star} label="Rating" value={profile.averageRating && profile.ratingCount ? profile.averageRating.toFixed(1) : "New"} /></div>
                    <p className="mt-4 text-xs leading-5 text-[#878A93]">{profile.ratingCount ? `Based on ${profile.ratingCount} rating${profile.ratingCount === 1 ? "" : "s"}` : "This expert is new to ScalePadi."}</p>
                  </section>

                  <div className="rounded-2xl border border-[#D1DAEC80] bg-[#FBFCFC] px-5 py-4 text-sm leading-6 text-[#526581]"><Globe2 className="mr-2 inline text-[#1746A2]" size={17} /> Profile shared securely via ScalePadi.</div>
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

function SectionTitle({ icon: Icon, children }: { icon: LucideIcon; children: React.ReactNode }) {
  return <h2 className="flex items-center gap-2.5 text-lg font-bold text-[#0E1426] sm:text-xl"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#ECF3FF] text-[#1746A2]"><Icon className="h-4 w-4" /></span>{children}</h2>;
}

function ExperienceItem({ experience }: { experience: ProfessionalExperience }) {
  return <div className="relative border-l-2 border-[#D1DAEC] pl-5 last:border-transparent">
    <span className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-[#1746A2] ring-4 ring-[#ECF3FF]" />
    <p className="font-semibold text-[#0E1426]">{experience.jobTitle || "Professional experience"}</p>
    <p className="mt-1 text-sm font-medium text-[#1746A2]">{experience.companyName || "Company not specified"}</p>
    <p className="mt-1.5 text-xs text-[#878A93]">{formatMonth(experience.startDate)} — {experience.endDate ? formatMonth(experience.endDate) : "Present"}</p>
    {experience.keyAchievements?.length ? <ul className="mt-3 space-y-2 text-sm leading-6 text-[#4B5563]">{experience.keyAchievements.map((achievement) => <li key={achievement} className="flex gap-2"><CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-[#1746A2]" />{achievement}</li>)}</ul> : null}
  </div>;
}

function EducationItem({ education }: { education: Education }) {
  return <div className="rounded-xl bg-[#F8FAFD] p-4"><p className="font-semibold text-[#0E1426]">{education.degree || "Qualification"}{education.fieldOfStudy ? `, ${education.fieldOfStudy}` : ""}</p><p className="mt-1 text-sm text-[#3E4351]">{education.institution || "Institution not specified"}</p>{education.year && <p className="mt-1.5 text-xs text-[#878A93]">{education.year}</p>}</div>;
}

function CertificationItem({ certification }: { certification: CertificationAndCourse }) {
  const title = certification.certificationName || certification.name || certification.title || "Certification";
  const provider = certification.issuingBody || certification.issuer || certification.institution;
  const date = certification.completionDate || certification.year;
  const credentialUrl = normaliseUrl(certification.credentialUrl);
  return <div className="flex items-start justify-between gap-3 rounded-xl border border-[#E5E8EB] p-4"><div><p className="font-semibold text-[#0E1426]">{title}</p>{provider && <p className="mt-1 text-sm text-[#3E4351]">{provider}</p>}{date && <p className="mt-1 text-xs text-[#878A93]">{date}</p>}</div>{credentialUrl && <a href={credentialUrl} target="_blank" rel="noreferrer" className="text-[#1746A2] hover:text-[#0D357B]"><ExternalLink className="h-4 w-4" /><span className="sr-only">Open credential</span></a>}</div>;
}

function TagList({ values, tone = "blue" }: { values: string[]; tone?: "blue" | "neutral" | "orange" }) {
  const styles = { blue: "bg-[#ECF3FF] text-[#1746A2]", neutral: "border border-[#D1DAEC] bg-white text-[#3E4351]", orange: "bg-[#FFF0E8] text-[#C2410C]" };
  return <div className="flex flex-wrap gap-2">{values.map((value) => <span key={value} className={`rounded-full px-3 py-1.5 text-xs font-medium ${styles[tone]}`}>{value}</span>)}</div>;
}

function EmptyText({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-sm leading-6 text-[#878A93]">{children}</p>;
}

function Detail({ icon: Icon, label, value, available = false }: { icon: LucideIcon; label: string; value: string; available?: boolean }) {
  return <div className="flex items-start gap-3"><Icon className={`mt-0.5 h-4 w-4 shrink-0 ${available ? "text-[#14945D]" : "text-[#1746A2]"}`} /><div><dt className="text-[#878A93]">{label}</dt><dd className="mt-0.5 font-semibold text-[#1A1A1A]">{value}</dd></div></div>;
}

function ActivityStat({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return <div className="rounded-xl bg-[#FBFCFC] p-3"><Icon className="h-4 w-4 text-[#1746A2]" /><p className="mt-3 text-xl font-bold text-[#0E1426]">{value}</p><p className="mt-1 text-[11px] leading-4 text-[#878A93]">{label}</p></div>;
}

function formatMonth(value?: string) {
  if (!value) return "Not specified";
  if (/^\d{4}-\d{2}$/.test(value)) {
    const [year, month] = value.split("-");
    return new Intl.DateTimeFormat("en", { month: "short", year: "numeric" }).format(new Date(Number(year), Number(month) - 1));
  }
  return value;
}

function normaliseUrl(value?: string) {
  if (!value) return "";
  const markdownUrl = value.match(/\]\((https?:\/\/[^)]+)\)/)?.[1];
  const url = markdownUrl || value;
  return /^https?:\/\//i.test(url) ? url : "";
}

function capitalise(value: string) { return value.charAt(0).toUpperCase() + value.slice(1); }

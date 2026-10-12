"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { CheckCircle2, FileText, Loader2, Upload, X } from "lucide-react";

const API_URL = "https://scale-padi-xc76.onrender.com/api/v1/offline-recruitment";

type ApiResponse = {
  status?: boolean;
  message?: string;
};

const inputClass =
  "mt-2 min-h-12 w-full rounded-xl border border-[#D9E0ED] bg-white px-4 py-3 text-base text-[#172033] outline-none transition placeholder:text-[#98A2B3] focus:border-[#1746A2] focus:ring-4 focus:ring-[#1746A2]/10 sm:text-sm";

export default function JobApplyPage() {
  const [resume, setResume] = useState<File | null>(null);
  const [expectedSalary, setExpectedSalary] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleResumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setResume(event.target.files?.[0] ?? null);
  };

  const handleExpectedSalaryChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Keep the form value numeric; commas are only for the input's presentation.
    setExpectedSalary(event.target.value.replace(/\D/g, ""));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("idle");
    setErrorMessage("");
    setIsSubmitting(true);

    const formData = new FormData(form);
    formData.set("expectedSalaryRange", expectedSalary);
    // Browsers already include the selected file under the `resume` field name.
    try {
      const response = await fetch(API_URL, { method: "POST", body: formData });
      const result = await response.json().catch(() => null) as ApiResponse | null;

      if (!response.ok || result?.status === false) {
        throw new Error(result?.message || "Application could not be submitted. Please try again.");
      }

      form.reset();
      setResume(null);
      setExpectedSalary("");
      setStatus("success");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Application could not be submitted. Please try again.");
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F7F9FC] px-0 py-0 sm:px-6 sm:py-10 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-5xl overflow-hidden bg-white sm:rounded-3xl sm:border sm:border-[#E4E9F2] sm:shadow-[0_20px_55px_rgba(20,48,91,0.08)]">
        <header className="relative overflow-hidden bg-[#0E367E] px-5 py-8 text-white sm:px-10 sm:py-14">
          <div className="absolute -right-24 -top-28 hidden h-72 w-72 rounded-full border-[28px] border-white/10 sm:block" />
          <div className="absolute -bottom-32 left-[35%] h-56 w-56 rounded-full bg-[#4D86E7]/20 blur-2xl" />
          <div className="relative max-w-2xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.12em] text-[#A9C7FF] uppercase sm:text-sm sm:tracking-[0.18em]">
              ScalePadi Offline Recruitment
            </p>
            <h1 className="text-2xl font-bold leading-tight sm:text-4xl">
              Apply for Your Next Role
            </h1>
            <p className="mt-4 text-sm leading-6 text-[#D8E6FF] sm:text-base">
              You&apos;re applying for an opportunity sourced through ScalePadi. Set up your profile today so we can connect you with future roles that fit your skills too.
            </p>
          </div>
        </header>

        <form onSubmit={handleSubmit} className="p-5 sm:p-10" noValidate>
          <section aria-labelledby="personal-details">
            <SectionTitle id="personal-details" number="01" title="Personal details" />
            <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
              <Field label="Full name" required><input name="name" required autoComplete="name" placeholder="Enter your full name" className={inputClass} /></Field>
              <Field label="Email address" required><input name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={inputClass} /></Field>
              <Field label="Phone number" hint="Include country code; WhatsApp preferred" required><input name="phone" type="tel" required autoComplete="tel" placeholder="+234 801 234 5678" className={inputClass} /></Field>
              <Field label="Gender" required><select name="gender" required defaultValue="" className={inputClass}><option value="" disabled>Select an option</option><option value="male">Male</option><option value="female">Female</option><option value="prefer not to say">Prefer not to say</option></select></Field>
              <div className="md:col-span-2"><Field label="Location" hint="City, State/Country"><input name="location" autoComplete="address-level2" placeholder="e.g. Lagos, Nigeria" className={inputClass} /></Field></div>
            </div>
          </section>

          <section className="mt-8 sm:mt-10" aria-labelledby="professional-details">
            <SectionTitle id="professional-details" number="02" title="Professional details" />
            <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
              <div className="md:col-span-2"><Field label="Role you&apos;re applying for"><input name="role" placeholder="e.g. Product Designer" className={inputClass} /></Field></div>
              <div className="md:col-span-2"><Field label="Bio / professional summary" hint="Tell us about your experience and why you are a good fit (3–5 sentences)." required><textarea name="bio" required rows={5} placeholder="Share a concise summary of your experience..." className={`${inputClass} resize-y`} /></Field></div>
              <Field label="Years of experience"><select name="yearsOfExperience" defaultValue="" className={inputClass}><option value="" disabled>Select experience</option><option value="Less than 1 year">Less than 1 year</option><option value="1 to 2 years">1–2 years</option><option value="3 to 5 years">3–5 years</option><option value="6 to 10 years">6–10 years</option><option value="10+ above">10+ years</option></select></Field>
              <Field label="LinkedIn profile / portfolio link"><input name="professionalLink" type="url" placeholder="https://linkedin.com/in/yourname" className={inputClass} /></Field>
            </div>
          </section>

          <section className="mt-8 sm:mt-10" aria-labelledby="documents">
            <SectionTitle id="documents" number="03" title="Documents" />
            <label className="block text-sm font-medium text-[#344054]">Upload CV / resume <RequiredMark /></label>
            <p className="mt-1 text-xs text-[#667085]">Word document preferred. PDF, DOC, and DOCX are accepted.</p>
            <label className="mt-3 flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-[#A7BFE8] bg-[#F6F9FF] p-4 transition hover:border-[#1746A2] hover:bg-[#F1F6FF] sm:gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#1746A2] text-white"><Upload size={20} /></span>
              <span className="min-w-0 flex-1"><span className="block text-sm font-semibold text-[#1746A2]">{resume ? resume.name : "Choose a file"}</span><span className="mt-1 block truncate text-xs text-[#667085]">{resume ? `${Math.ceil(resume.size / 1024)} KB selected` : "Select your CV or resume to upload"}</span></span>
              {resume ? <FileText className="shrink-0 text-[#1746A2]" size={22} /> : null}
              <input name="resume" type="file" required accept=".doc,.docx,.pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf" className="sr-only" onChange={handleResumeChange} />
            </label>
          </section>

          <section className="mt-8 sm:mt-10" aria-labelledby="expectations">
            <SectionTitle id="expectations" number="04" title="Availability & expectations" />
            <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
              <Field label="Expected salary range" required><input name="expectedSalaryRange" required inputMode="numeric" value={formatAmount(expectedSalary)} onChange={handleExpectedSalaryChange} placeholder="e.g. 500,000" className={inputClass} /></Field>
              <Field label="How did you hear about this opportunity?"><select name="source" defaultValue="" className={inputClass}><option value="" disabled>Select a source</option><option value="Referral">Referral</option><option value="LinkedIn">LinkedIn</option><option value="X">X</option><option value="Instagram">Instagram</option><option value="ScalePadi Website">ScalePadi Website</option><option value="Other">Other</option></select></Field>
            </div>
          </section>

          <section className="mt-8 border-t border-[#E6EAF0] pt-6 sm:mt-10 sm:pt-7" aria-labelledby="consent">
            <h2 id="consent" className="text-lg font-bold text-[#172033]">Consent</h2>
            <label className="mt-4 flex cursor-pointer items-start gap-3 text-sm leading-6 text-[#475467]">
              <input name="terms" value="true" type="checkbox" required className="mt-1 h-4 w-4 rounded border-[#98A2B3] accent-[#1746A2]" />
              <span>I agree to ScalePadi&apos;s Terms of Use and Privacy Policy. Read our terms <a href="/terms&conditions" rel="noreferrer" className="font-semibold text-[#1746A2] underline underline-offset-2">here</a>. <RequiredMark /></span>
            </label>
          </section>

          {status === "error" && <StatusMessage type="error" message={errorMessage} />}

          <button type="submit" disabled={isSubmitting} className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#1746A2] px-6 py-3.5 text-base font-bold text-white transition hover:bg-[#12377E] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:text-sm">
            {isSubmitting ? <><Loader2 size={18} className="animate-spin" /> Submitting application...</> : "Submit Application"}
          </button>
        </form>
      </div>
      {status === "success" && <SuccessModal onClose={() => setStatus("idle")} />}
    </main>
  );
}

function SectionTitle({ id, number, title }: { id: string; number: string; title: string }) {
  return <div className="mb-5 flex items-center gap-2.5 sm:mb-6 sm:gap-3"><span className="shrink-0 text-xs font-bold tracking-wider text-[#1746A2]">{number}</span><h2 id={id} className="text-lg font-bold text-[#172033] sm:text-xl">{title}</h2><span className="h-px min-w-4 flex-1 bg-[#E6EAF0]" /></div>;
}

function Field({ label, hint, required, children }: { label: string; hint?: string; required?: boolean; children: React.ReactNode }) {
  return <label className="block text-sm font-medium text-[#344054]"><span>{label} {required && <RequiredMark />}</span>{hint && <span className="ml-1 font-normal text-xs text-[#667085]">{hint}</span>}{children}</label>;
}

function RequiredMark() { return <span className="text-[#D92D20]">*</span>; }

function formatAmount(value: string) {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function SuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#071B3F]/60 p-5 backdrop-blur-sm" role="presentation" onMouseDown={onClose}>
      <div role="dialog" aria-modal="true" aria-labelledby="application-success-title" className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white p-7 text-center shadow-[0_24px_80px_rgba(7,27,63,0.28)] sm:p-10" onMouseDown={(event) => event.stopPropagation()}>
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#1746A2] via-[#4D86E7] to-[#1746A2]" />
        <button type="button" onClick={onClose} aria-label="Close confirmation" className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-[#667085] transition hover:bg-[#F2F4F7] hover:text-[#172033]"><X size={19} /></button>
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#EAF3FF] text-[#1746A2] ring-8 ring-[#F6F9FF]"><CheckCircle2 size={42} strokeWidth={1.8} /></div>
        <p className="mt-8 text-xs font-bold tracking-[0.16em] text-[#1746A2] uppercase">Application received</p>
        <h2 id="application-success-title" className="mt-3 text-2xl font-bold tracking-tight text-[#172033] sm:text-3xl">You&apos;re all set.</h2>
        <p className="mt-4 text-sm leading-6 text-[#667085] sm:text-base">Thank you for applying. Our team will review your application and reach out if your profile is a match.</p>
        <button type="button" onClick={onClose} className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#1746A2] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#12377E]">Done</button>
      </div>
    </div>
  );
}

function StatusMessage({ type, message }: { type: "success" | "error"; message: string }) {
  const success = type === "success";
  return <p role="status" className={`mt-6 flex items-start gap-2 rounded-xl px-4 py-3 text-sm ${success ? "bg-[#ECFDF3] text-[#027A48]" : "bg-[#FEF3F2] text-[#B42318]"}`}><span>{success ? <CheckCircle2 size={19} /> : <X size={19} />}</span>{message}</p>;
}

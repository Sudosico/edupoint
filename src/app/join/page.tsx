"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

/* ─── types ─── */
type PathType = "student" | "parent" | "partner";

interface FormData {
  // common
  path: PathType | null;
  // student
  firstName: string;
  lastName: string;
  age: string;
  school: string;
  grade: string;
  email: string;
  phone: string;
  tier: string;
  howFound: string;
  message: string;
  // parent
  parentName: string;
  studentName: string;
  studentAge: string;
  parentEmail: string;
  parentPhone: string;
  parentTier: string;
  parentQuestions: string;
  // partner
  company: string;
  contactPerson: string;
  partnerEmail: string;
  partnerPhone: string;
  collabType: string;
  partnerMessage: string;
}

const initialForm: FormData = {
  path: null,
  firstName: "", lastName: "", age: "", school: "", grade: "",
  email: "", phone: "", tier: "Pro — 499 lei/luna", howFound: "", message: "",
  parentName: "", studentName: "", studentAge: "",
  parentEmail: "", parentPhone: "", parentTier: "Pro — 499 lei/luna", parentQuestions: "",
  company: "", contactPerson: "", partnerEmail: "", partnerPhone: "",
  collabType: "Reduceri pentru membri", partnerMessage: "",
};

const paths = [
  { id: "student" as const, icon: "🎓", label: "Sunt Elev", sub: "Am intre 12 si 18 ani si vreau sa devin membru." },
  { id: "parent" as const, icon: "👨‍👩‍👧", label: "Sunt Parinte", sub: "Vreau sa inscriu copilul meu la EduPoint." },
  { id: "partner" as const, icon: "🤝", label: "Sunt Partener", sub: "Reprezint o firma si vreau sa colaboram." },
];

const tiers = [
  { value: "Basic — 149 lei/luna", label: "Basic", price: "149 lei/luna", desc: "Study Cafe, Mini Library, evenimente", color: "border-oak/40 bg-ivory-warm" },
  { value: "Pro — 499 lei/luna", label: "Pro", price: "499 lei/luna", desc: "Workshopuri, Career Lab, Project Studio", color: "border-blue bg-blue/5", recommended: true },
  { value: "Premium — 998 lei/luna", label: "Premium", price: "998 lei/luna", desc: "Mentor personal, acces complet, Welcome Kit", color: "border-black bg-black/5" },
];

const collabTypes = [
  "Reduceri pentru membri",
  "Sponsor evenimente",
  "Mentor / Speaker",
  "Internship Bridge",
  "Altele",
];

const howFoundOptions = [
  "Social media (Instagram, TikTok)",
  "De la un prieten / coleg",
  "Scoala / profesor",
  "Google",
  "Eveniment / conferinta",
  "Altele",
];

/* ─── step configs per path ─── */
const studentSteps = [
  { title: "Cine esti?", subtitle: "Sa ne cunoastem." },
  { title: "Despre tine", subtitle: "Scoala si clasa." },
  { title: "Contact", subtitle: "Cum te contactam." },
  { title: "Abonament", subtitle: "Alege nivelul tau." },
  { title: "Ultimul pas", subtitle: "Aproape gata!" },
];

const parentSteps = [
  { title: "Datele tale", subtitle: "Ca parinte." },
  { title: "Despre elev", subtitle: "Copilul tau." },
  { title: "Contact", subtitle: "Cum te contactam." },
  { title: "Abonament", subtitle: "Ce nivel alegeti." },
];

const partnerSteps = [
  { title: "Firma", subtitle: "Cine sunteti." },
  { title: "Contact", subtitle: "Persoana de legatura." },
  { title: "Colaborare", subtitle: "Ce aveti in vedere." },
];

/* ─── component ─── */
export default function JoinPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [step, setStep] = useState(0); // 0 = path selection
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState<"forward" | "back">("forward");

  const update = useCallback((field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  }, []);

  const selectPath = (p: PathType) => {
    setForm((prev) => ({ ...prev, path: p }));
    setDirection("forward");
    setStep(1);
  };

  const steps = form.path === "student" ? studentSteps
    : form.path === "parent" ? parentSteps
    : form.path === "partner" ? partnerSteps
    : [];

  const totalSteps = steps.length;

  const next = () => { setDirection("forward"); setStep((s) => Math.min(s + 1, totalSteps)); };
  const back = () => {
    setDirection("back");
    if (step === 1) { setStep(0); setForm((prev) => ({ ...prev, path: null })); }
    else setStep((s) => Math.max(s - 1, 1));
  };

  const submit = () => {
    setSubmitted(true);
  };

  const isLastStep = step === totalSteps;

  if (submitted) {
    return (
      <>
        <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 bg-ivory">
          <div className="text-center max-w-md animate-[fade-up_0.6s_ease]">
            <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-navy">Multumim!</h1>
            <p className="mt-4 text-graphite-light leading-relaxed">
              {form.path === "partner"
                ? "Am primit propunerea ta. Te vom contacta in cel mai scurt timp."
                : "Cererea ta a fost trimisa cu succes. Te vom contacta in 24-48 de ore cu urmatorii pasi."}
            </p>
            <p className="mt-2 text-graphite-light text-sm">
              {form.path !== "partner" && "Cardul tau ajunge in 48 de ore dupa activare."}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/" variant="ghost">Inapoi acasa</Button>
              <Button href="/membership">Vezi abonamente</Button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero strip */}
      <section className="relative bg-navy pt-28 pb-12 px-6 lg:px-16">
        <div className="max-w-[700px] mx-auto text-center">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1] tracking-tight">
            Alatura-te EduPoint.
          </h1>
          <p className="mt-3 text-white/50 text-base">
            {step === 0
              ? "Alege profilul tau pentru a incepe."
              : `Pasul ${step} din ${totalSteps} — ${steps[step - 1]?.subtitle}`}
          </p>
        </div>
      </section>

      {/* Progress bar */}
      {step > 0 && (
        <div className="bg-navy pb-6 px-6">
          <div className="max-w-[500px] mx-auto">
            <div className="flex items-center gap-1">
              {steps.map((_, i) => (
                <div key={i} className="flex-1 h-1 rounded-full overflow-hidden bg-white/10">
                  <div
                    className="h-full bg-blue rounded-full transition-all duration-500 ease-out"
                    style={{ width: step > i ? "100%" : step === i + 1 ? "50%" : "0%" }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {steps.map((s, i) => (
                <span
                  key={i}
                  className={`text-[10px] transition-colors duration-300 ${
                    step > i ? "text-blue-light" : step === i + 1 ? "text-white/70" : "text-white/20"
                  }`}
                >
                  {s.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Form area */}
      <section className="py-12 lg:py-16 px-6 lg:px-16 bg-ivory min-h-[60vh]">
        <div className="max-w-[540px] mx-auto">

          {/* Step 0: Path selection */}
          {step === 0 && (
            <div className="space-y-4 animate-[fade-up_0.4s_ease]">
              <h2 className="font-serif text-2xl text-navy text-center mb-8">Cum vrei sa te alaturi?</h2>
              {paths.map((p) => (
                <button
                  key={p.id}
                  onClick={() => selectPath(p.id)}
                  className="w-full flex items-center gap-5 p-5 rounded-2xl border-2 border-gray-200 bg-white text-left transition-all duration-200 hover:border-blue hover:shadow-md hover:-translate-y-0.5 group"
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform">{p.icon}</span>
                  <div>
                    <h3 className="font-semibold text-navy text-lg">{p.label}</h3>
                    <p className="text-sm text-graphite-light mt-0.5">{p.sub}</p>
                  </div>
                  <svg className="w-5 h-5 text-graphite-light ml-auto shrink-0 group-hover:text-blue group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          )}

          {/* ─── STUDENT STEPS ─── */}
          {form.path === "student" && step === 1 && (
            <StepContainer title="Cum te numesti?" direction={direction}>
              <Field label="Prenume" value={form.firstName} onChange={(v) => update("firstName", v)} placeholder="Maria" autoFocus />
              <Field label="Nume" value={form.lastName} onChange={(v) => update("lastName", v)} placeholder="Popescu" />
            </StepContainer>
          )}
          {form.path === "student" && step === 2 && (
            <StepContainer title="Unde inveti?" direction={direction}>
              <Field label="Varsta" value={form.age} onChange={(v) => update("age", v)} placeholder="16" type="number" />
              <Field label="Scoala / Liceu" value={form.school} onChange={(v) => update("school", v)} placeholder="Colegiul National X, Cluj-Napoca" />
              <Field label="Clasa" value={form.grade} onChange={(v) => update("grade", v)} placeholder="a X-a" />
            </StepContainer>
          )}
          {form.path === "student" && step === 3 && (
            <StepContainer title="Cum te contactam?" direction={direction}>
              <Field label="Email" value={form.email} onChange={(v) => update("email", v)} placeholder="maria@exemplu.com" type="email" />
              <Field label="Telefon" value={form.phone} onChange={(v) => update("phone", v)} placeholder="+40 7XX XXX XXX" type="tel" />
            </StepContainer>
          )}
          {form.path === "student" && step === 4 && (
            <StepContainer title="Ce abonament te intereseaza?" direction={direction}>
              <TierSelector value={form.tier} onChange={(v) => update("tier", v)} />
            </StepContainer>
          )}
          {form.path === "student" && step === 5 && (
            <StepContainer title="Inca un lucru..." direction={direction}>
              <SelectField label="Cum ai aflat de EduPoint?" value={form.howFound} onChange={(v) => update("howFound", v)} options={howFoundOptions} />
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">Mesaj (optional)</label>
                <textarea
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition-all resize-none"
                  placeholder="Ce te motiveaza sa te alaturi?"
                />
              </div>
            </StepContainer>
          )}

          {/* ─── PARENT STEPS ─── */}
          {form.path === "parent" && step === 1 && (
            <StepContainer title="Datele dumneavoastra" direction={direction}>
              <Field label="Numele complet (parinte)" value={form.parentName} onChange={(v) => update("parentName", v)} placeholder="Ion Popescu" autoFocus />
              <Field label="Email" value={form.parentEmail} onChange={(v) => update("parentEmail", v)} placeholder="ion.popescu@exemplu.com" type="email" />
              <Field label="Telefon" value={form.parentPhone} onChange={(v) => update("parentPhone", v)} placeholder="+40 7XX XXX XXX" type="tel" />
            </StepContainer>
          )}
          {form.path === "parent" && step === 2 && (
            <StepContainer title="Despre copilul dumneavoastra" direction={direction}>
              <Field label="Numele elevului" value={form.studentName} onChange={(v) => update("studentName", v)} placeholder="Maria Popescu" />
              <Field label="Varsta elevului" value={form.studentAge} onChange={(v) => update("studentAge", v)} placeholder="16" type="number" />
            </StepContainer>
          )}
          {form.path === "parent" && step === 3 && (
            <StepContainer title="Ce abonament doriti?" direction={direction}>
              <TierSelector value={form.parentTier} onChange={(v) => update("parentTier", v)} />
            </StepContainer>
          )}
          {form.path === "parent" && step === 4 && (
            <StepContainer title="Aveti intrebari?" direction={direction}>
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">Intrebari sau observatii</label>
                <textarea
                  value={form.parentQuestions}
                  onChange={(e) => update("parentQuestions", e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition-all resize-none"
                  placeholder="Ce ati dori sa stiti despre EduPoint?"
                />
              </div>
            </StepContainer>
          )}

          {/* ─── PARTNER STEPS ─── */}
          {form.path === "partner" && step === 1 && (
            <StepContainer title="Despre firma" direction={direction}>
              <Field label="Firma / Organizatie" value={form.company} onChange={(v) => update("company", v)} placeholder="Compania SRL" autoFocus />
              <Field label="Persoana de contact" value={form.contactPerson} onChange={(v) => update("contactPerson", v)} placeholder="Nume Prenume" />
            </StepContainer>
          )}
          {form.path === "partner" && step === 2 && (
            <StepContainer title="Date de contact" direction={direction}>
              <Field label="Email" value={form.partnerEmail} onChange={(v) => update("partnerEmail", v)} placeholder="contact@firma.ro" type="email" />
              <Field label="Telefon" value={form.partnerPhone} onChange={(v) => update("partnerPhone", v)} placeholder="+40 7XX XXX XXX" type="tel" />
            </StepContainer>
          )}
          {form.path === "partner" && step === 3 && (
            <StepContainer title="Tip colaborare" direction={direction}>
              <div className="space-y-3">
                {collabTypes.map((c) => (
                  <label
                    key={c}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      form.collabType === c
                        ? "border-blue bg-blue/5"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                      form.collabType === c ? "border-blue" : "border-gray-300"
                    }`}>
                      {form.collabType === c && <div className="w-2.5 h-2.5 rounded-full bg-blue" />}
                    </div>
                    <span className="text-sm text-navy">{c}</span>
                    <input type="radio" name="collab" value={c} checked={form.collabType === c} onChange={() => update("collabType", c)} className="hidden" />
                  </label>
                ))}
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-navy mb-1.5">Mesaj</label>
                <textarea
                  value={form.partnerMessage}
                  onChange={(e) => update("partnerMessage", e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition-all resize-none"
                  placeholder="Descrieti propunerea de colaborare"
                />
              </div>
            </StepContainer>
          )}

          {/* Navigation buttons */}
          {step > 0 && (
            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={back}
                className="flex items-center gap-2 text-sm text-graphite-light hover:text-navy transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Inapoi
              </button>

              {isLastStep ? (
                <button
                  onClick={submit}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-blue text-white font-semibold rounded-xl transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {form.path === "student" ? "Vreau sa fiu membru" : form.path === "parent" ? "Inscrie-mi copilul" : "Trimite propunerea"}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={next}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-navy text-white font-semibold rounded-xl transition-all duration-200 hover:bg-navy-light hover:scale-[1.02] active:scale-[0.98]"
                >
                  Continua
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-10 px-6 lg:px-16 bg-ivory-warm">
        <div className="max-w-[700px] mx-auto flex flex-wrap items-center justify-center gap-6">
          {["Fara contract", "Poti anula oricand", "Acces din prima zi", "Card in 48h"].map((b) => (
            <div key={b} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-graphite-light">{b}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

/* ─── Sub-components ─── */

function StepContainer({ title, children, direction }: { title: string; children: React.ReactNode; direction: "forward" | "back" }) {
  return (
    <div
      key={title}
      className="animate-[fade-up_0.35s_ease]"
    >
      <h2 className="font-serif text-2xl text-navy mb-6">{title}</h2>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}

function Field({
  label, value, onChange, placeholder, type = "text", autoFocus,
}: {
  label: string; value: string; onChange: (v: string) => void; placeholder: string; type?: string; autoFocus?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-navy mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition-all placeholder:text-gray-300"
      />
    </div>
  );
}

function SelectField({
  label, value, onChange, options,
}: {
  label: string; value: string; onChange: (v: string) => void; options: string[];
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-navy mb-1.5">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition-all appearance-none"
      >
        <option value="">Selecteaza...</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function TierSelector({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="space-y-3">
      {tiers.map((t) => (
        <label
          key={t.value}
          className={`relative flex items-start gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all ${
            value === t.value
              ? "border-blue bg-blue/5 shadow-sm"
              : `${t.color} hover:shadow-sm`
          }`}
        >
          <div className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
            value === t.value ? "border-blue" : "border-gray-300"
          }`}>
            {value === t.value && <div className="w-2.5 h-2.5 rounded-full bg-blue" />}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-navy">{t.label}</span>
              {t.recommended && (
                <span className="text-[10px] font-semibold text-blue bg-blue/10 px-2 py-0.5 rounded-full">
                  Recomandat
                </span>
              )}
            </div>
            <p className="text-xs text-graphite-light mt-0.5">{t.desc}</p>
          </div>
          <span className="text-sm font-bold text-navy whitespace-nowrap">{t.price}</span>
          <input type="radio" name="tier" value={t.value} checked={value === t.value} onChange={() => onChange(t.value)} className="hidden" />
        </label>
      ))}
    </div>
  );
}

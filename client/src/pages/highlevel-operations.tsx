import { useEffect, useState, type CSSProperties, type FormEvent } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  Check,
  Wrench,
  UserCog,
  Layers,
  GraduationCap,
  Bot,
  ShieldCheck,
  AlertTriangle,
  Repeat,
  PhoneCall,
  Search,
  Clock,
  CalendarClock,
  Workflow,
  MessageSquare,
  Gauge,
  BookOpen,
  Zap,
  Plus,
  Minus,
} from "lucide-react";

declare global {
  interface Window {
    gtag?: any;
    dataLayer?: any[];
    createPushLapEmail?: any;
  }
}

/* ------------------------------------------------------------------ */
/*  Design tokens (self-contained luxury palette — not global theme)  */
/* ------------------------------------------------------------------ */
const INK = "#06080f";
const CREAM = "#f4ede0";
const GOLD = "#c2a567";
const serif: CSSProperties = { fontFamily: "'Playfair Display', Georgia, serif" };

/* Destination for every CTA (audit form → then booking calendar) */
const BOOKING_URL = "https://sqr.co/ClarityCall";

export default function HighLevelOperations() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "page_view",
        page_title: "LIV8 AI — Fractional HighLevel Operations",
        page_location: window.location.href,
      });
    }
  }, []);

  const scrollToAudit = () => {
    const el = document.getElementById("audit");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleAuditSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("fullName") || "");
    const email = String(data.get("email") || "");

    try {
      if (email) {
        localStorage.setItem("affiliate_email", email);
        localStorage.setItem("affiliate_name", name);
        if (window.createPushLapEmail) window.createPushLapEmail(email, name);
      }
      window.dataLayer?.push({
        event: "generate_lead",
        form_name: "highlevel_operations_audit",
      });
    } catch {
      /* non-blocking */
    }

    setSubmitted(true);
    // Hand off to the booking calendar to lock in a time.
    setTimeout(() => {
      window.location.href = BOOKING_URL;
    }, 1400);
  };

  return (
    <div
      className="min-h-screen antialiased selection:bg-[#c2a567] selection:text-[#06080f]"
      style={{ backgroundColor: INK, color: CREAM }}
    >
      {/* ============================ HEADER ============================ */}
      <header
        className="sticky top-0 z-40 border-b backdrop-blur-md"
        style={{ backgroundColor: "rgba(6,8,15,0.82)", borderColor: "rgba(194,165,103,0.16)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/">
            <div className="flex cursor-pointer items-center gap-2.5">
              <span
                className="grid h-9 w-9 place-items-center rounded-full border text-sm font-bold"
                style={{ borderColor: GOLD, color: GOLD }}
              >
                8
              </span>
              <span className="text-lg font-semibold tracking-wide">
                LIV8 <span style={{ color: GOLD }}>AI</span>
              </span>
            </div>
          </Link>
          <div className="hidden items-center gap-8 text-sm md:flex">
            <a href="#offer" className="opacity-75 transition hover:opacity-100">The Rescue Sprint</a>
            <a href="#plans" className="opacity-75 transition hover:opacity-100">Ops Desk Plans</a>
            <a href="#faq" className="opacity-75 transition hover:opacity-100">FAQ</a>
            <button
              onClick={scrollToAudit}
              className="rounded-full px-5 py-2 text-sm font-semibold transition hover:opacity-90"
              style={{ backgroundColor: GOLD, color: INK }}
            >
              Request My Audit
            </button>
          </div>
        </div>
      </header>

      {/* ============================= HERO ============================= */}
      <section className="relative overflow-hidden">
        {/* ambient glow */}
        <div
          className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
          style={{ background: `radial-gradient(circle, ${GOLD} 0%, transparent 68%)` }}
        />
        <div className="relative mx-auto max-w-4xl px-5 pb-24 pt-20 text-center sm:px-8 sm:pt-28">
          <span
            className="mb-7 inline-block rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em]"
            style={{ borderColor: "rgba(194,165,103,0.4)", color: GOLD }}
          >
            Fractional HighLevel Operations
          </span>
          <h1
            className="mx-auto max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl"
            style={serif}
          >
            Stop Being the Salesperson, Onboarding Team, Tech Support, and{" "}
            <span style={{ color: GOLD }}>HighLevel Expert</span> All at Once.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed opacity-80">
            LIV8 AI is the fractional HighLevel operations partner for growing agencies. We go inside your
            account and repair, organize, and operate your HighLevel systems — so you can get back to
            acquiring clients and growing the agency.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <button
              onClick={scrollToAudit}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition hover:opacity-90 sm:w-auto"
              style={{ backgroundColor: GOLD, color: INK }}
            >
              Book My HighLevel Operations Audit
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
            <a
              href="#offer"
              className="inline-flex w-full items-center justify-center rounded-full border px-8 py-4 text-base font-semibold transition hover:bg-white/5 sm:w-auto"
              style={{ borderColor: "rgba(244,237,224,0.28)" }}
            >
              See the Rescue Sprint
            </a>
          </div>
          <p className="mx-auto mt-8 max-w-xl text-sm opacity-55">
            Built for agencies with 3–30 active clients. Senior-level attention — not a low-cost general VA.
          </p>
        </div>
      </section>

      {/* =========================== PROBLEM =========================== */}
      <Section id="problem">
        <SectionHeading eyebrow="The Problem">
          You Bought HighLevel to Simplify Your Agency.
        </SectionHeading>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg opacity-75">
          Instead, it quietly became another full-time job. Right now you're probably:
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Clock, text: "Fixing broken workflows at night" },
            { icon: Repeat, text: "Repeating the same onboarding call for every single client" },
            { icon: PhoneCall, text: "Answering basic platform questions all day" },
            { icon: Search, text: "Digging through settings when something silently breaks" },
            {
              icon: Layers,
              text: "Juggling calendars, pipelines, domains, email, phone, forms, funnels, permissions, and integrations",
            },
            { icon: AlertTriangle, text: "Delaying launches because the system just isn't ready" },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="rounded-2xl border p-6"
              style={{ borderColor: "rgba(244,237,224,0.1)", backgroundColor: "rgba(255,255,255,0.02)" }}
            >
              <Icon className="mb-4 h-6 w-6" style={{ color: GOLD }} />
              <p className="text-[15px] leading-relaxed opacity-85">{text}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-3xl text-center text-lg leading-relaxed opacity-80">
          HighLevel is powerful. But without a clear operating system underneath it, that power turns into
          overhead — and the overhead lands on <span style={{ color: GOLD }}>you</span>.
        </p>
      </Section>

      {/* ============================ OFFER ============================ */}
      <section
        id="offer"
        className="border-y py-24"
        style={{ borderColor: "rgba(194,165,103,0.16)", backgroundColor: "rgba(255,255,255,0.015)" }}
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading eyebrow="The Offer">The HighLevel Rescue Sprint</SectionHeading>
          <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-relaxed opacity-80">
            In seven business days, we audit, repair, and organize the most important parts of your HighLevel
            agency — so you can onboard and serve clients with confidence, without living inside the platform.
          </p>

          <div className="mt-14 grid gap-8 lg:grid-cols-5">
            {/* Deliverables */}
            <div
              className="rounded-3xl border p-8 lg:col-span-3"
              style={{ borderColor: "rgba(244,237,224,0.12)", backgroundColor: "rgba(6,8,15,0.5)" }}
            >
              <h3 className="mb-6 text-xl font-semibold" style={serif}>
                What we deliver
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  "Complete agency-account audit",
                  "Full review of funnels, workflows, pipelines, calendars, forms, domains, email, phone, permissions & integrations",
                  "Identify broken, redundant, and risky automations",
                  "Repair up to 3 priority systems",
                  "1 standardized client-onboarding workflow",
                  "1 onboarding checklist",
                  "1 pipeline & opportunity structure",
                  "1 booking & follow-up system",
                  "A2P readiness review (approval not guaranteed)",
                  "Recorded walkthrough of everything we touched",
                  'Written "what to fix next" roadmap',
                  "14 days of post-delivery support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: GOLD }} />
                    <span className="opacity-85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price + guarantee */}
            <div className="flex flex-col gap-6 lg:col-span-2">
              <div
                className="rounded-3xl border p-8"
                style={{ borderColor: GOLD, backgroundColor: "rgba(194,165,103,0.06)" }}
              >
                <p className="text-sm uppercase tracking-[0.18em] opacity-70">Founding-Client Investment</p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-5xl font-bold" style={{ ...serif, color: GOLD }}>
                    $1,500
                  </span>
                </div>
                <p className="mt-2 text-sm opacity-70">or two payments of $850</p>
                <p className="mt-4 text-sm opacity-60">
                  Later price: $2,500–$3,500. Founding pricing is limited to the first five agencies.
                </p>
                <button
                  onClick={scrollToAudit}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold transition hover:opacity-90"
                  style={{ backgroundColor: GOLD, color: INK }}
                >
                  Apply for a Rescue Sprint
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div
                className="rounded-3xl border p-7"
                style={{ borderColor: "rgba(244,237,224,0.12)", backgroundColor: "rgba(255,255,255,0.02)" }}
              >
                <div className="mb-3 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5" style={{ color: GOLD }} />
                  <h4 className="font-semibold">The Launch-Ready Guarantee</h4>
                </div>
                <p className="text-sm leading-relaxed opacity-75">
                  We keep working on the agreed deliverables until the systems in your project scope are
                  operational and documented. No revenue promises — just systems that actually work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================== WHY LIV8 =========================== */}
      <Section id="why">
        <SectionHeading eyebrow="Why LIV8 AI">
          The Bridge Between a Random VA and a Giant White-Label Support Company.
        </SectionHeading>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Wrench,
              title: "Implementation, Not Instructions",
              text: "We don't hand you a Loom and wish you luck. We go inside the account and build it.",
            },
            {
              icon: UserCog,
              title: "Senior-Level Attention",
              text: "One experienced operator across your system — not a rotating bench of junior VAs.",
            },
            {
              icon: Layers,
              title: "One Partner Across Your System",
              text: "Funnels, workflows, pipelines, calendars, domains, phone, forms — handled in one place.",
            },
            {
              icon: GraduationCap,
              title: "Systems Your Team Can Actually Use",
              text: "Clean structures, SOPs, and documentation your team can run without you.",
            },
            {
              icon: Bot,
              title: "AI on Top of HighLevel",
              text: "Conversation AI, Voice AI, knowledge bases, lead qualification, booking, follow-up, and onboarding automation.",
            },
            {
              icon: ShieldCheck,
              title: "Boundaries That Protect Delivery",
              text: 'Clear request systems and defined scope — no vague "unlimited" that quietly falls apart.',
            },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border p-7 transition hover:-translate-y-1"
              style={{ borderColor: "rgba(244,237,224,0.1)", backgroundColor: "rgba(255,255,255,0.02)" }}
            >
              <span
                className="mb-5 grid h-11 w-11 place-items-center rounded-xl"
                style={{ backgroundColor: "rgba(194,165,103,0.12)" }}
              >
                <Icon className="h-5 w-5" style={{ color: GOLD }} />
              </span>
              <h3 className="mb-2 text-lg font-semibold">{title}</h3>
              <p className="text-[15px] leading-relaxed opacity-75">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ========================= BEFORE / AFTER ========================= */}
      <section className="border-y py-24" style={{ borderColor: "rgba(194,165,103,0.16)", backgroundColor: "rgba(255,255,255,0.015)" }}>
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading eyebrow="Before / After">From Bottleneck to Operating System.</SectionHeading>
          <div
            className="mt-12 overflow-hidden rounded-3xl border"
            style={{ borderColor: "rgba(244,237,224,0.12)" }}
          >
            <div
              className="grid grid-cols-2 text-sm font-semibold uppercase tracking-[0.14em]"
              style={{ backgroundColor: "rgba(194,165,103,0.08)" }}
            >
              <div className="px-6 py-4 opacity-70">Before LIV8</div>
              <div className="px-6 py-4" style={{ color: GOLD }}>
                After LIV8
              </div>
            </div>
            {[
              ["You are the bottleneck", "A documented operating system"],
              ["Every client is an emergency", "One standardized onboarding"],
              ["Silent breakage you find too late", "Audited & documented systems"],
              ["Knowledge locked in your head", "SOPs and Loom walkthroughs"],
              ["Explaining the same thing weekly", "Knowledge base + AI answers it"],
              ["Delayed, chaotic launches", "Launch-ready before the client arrives"],
            ].map(([before, after], i) => (
              <div
                key={before}
                className="grid grid-cols-2 border-t text-[15px]"
                style={{
                  borderColor: "rgba(244,237,224,0.08)",
                  backgroundColor: i % 2 ? "rgba(255,255,255,0.015)" : "transparent",
                }}
              >
                <div className="px-6 py-5 opacity-60">{before}</div>
                <div className="flex items-center gap-2 px-6 py-5">
                  <Check className="h-4 w-4 flex-shrink-0" style={{ color: GOLD }} />
                  <span className="opacity-90">{after}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================== PLANS =========================== */}
      <Section id="plans">
        <SectionHeading eyebrow="Recurring Plans">LIV8 Ops Desk.</SectionHeading>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg opacity-75">
          Ongoing HighLevel operations, matched to how fast you're onboarding.
        </p>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {[
            {
              name: "Essential",
              price: "$497",
              cadence: "/mo",
              highlight: false,
              features: [
                "Up to 5 requests / mo",
                "Workflow & funnel troubleshooting",
                "1 monthly ops call",
                "Loom explanations",
                "48-business-hour response",
                "Minor configuration",
                "Agency-team support (not direct client support)",
              ],
            },
            {
              name: "Growth",
              price: "$997",
              cadence: "/mo",
              highlight: true,
              badge: "Most Agencies Start Here",
              features: [
                "Up to 12 requests / mo",
                "Up to 2 new sub-account onboardings / mo",
                "Workflow, calendar, pipeline, form, funnel & integration work",
                "1 priority build / mo",
                "Weekly ops call",
                "24-business-hour response",
                "Private Slack",
                "Scheduled client-facing calls",
              ],
            },
            {
              name: "Embedded",
              price: "$1,997",
              cadence: "/mo",
              highlight: false,
              note: "Limited to 3–4 agencies",
              features: [
                "Fractional HighLevel operations manager",
                "Up to 4 onboardings / mo",
                "Agency + scheduled client-facing support",
                "Weekly implementation",
                "SOP & training-library development",
                "Priority troubleshooting",
                "2 ops calls / week",
                "Quarterly architecture review",
              ],
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className="relative flex flex-col rounded-3xl border p-8"
              style={{
                borderColor: plan.highlight ? GOLD : "rgba(244,237,224,0.12)",
                backgroundColor: plan.highlight ? "rgba(194,165,103,0.06)" : "rgba(255,255,255,0.02)",
              }}
            >
              {plan.badge && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider"
                  style={{ backgroundColor: GOLD, color: INK }}
                >
                  {plan.badge}
                </span>
              )}
              <h3 className="text-xl font-semibold" style={serif}>
                {plan.name}
              </h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-bold" style={{ color: GOLD }}>
                  {plan.price}
                </span>
                <span className="mb-1 text-sm opacity-60">{plan.cadence}</span>
              </div>
              {plan.note && <p className="mt-2 text-xs opacity-55">{plan.note}</p>}
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px]">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: GOLD }} />
                    <span className="opacity-80">{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToAudit}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold transition hover:opacity-90"
                style={
                  plan.highlight
                    ? { backgroundColor: GOLD, color: INK }
                    : { border: "1px solid rgba(244,237,224,0.28)", color: CREAM }
                }
              >
                Request My Audit
              </button>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm opacity-60">
          Most agencies start with a Rescue Sprint, then move onto the plan that matches how fast they're
          onboarding.
        </p>
      </Section>

      {/* ============================ PROOF ============================ */}
      <section className="border-y py-24" style={{ borderColor: "rgba(194,165,103,0.16)", backgroundColor: "rgba(255,255,255,0.015)" }}>
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading eyebrow="Proof">
            Deep HighLevel Knowledge, Communicated Clearly, Implemented End-to-End.
          </SectionHeading>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Wrench, title: "Technical Problem-Solving", text: "Root-cause diagnosis of what's actually breaking — not guesswork." },
              { icon: Layers, title: "Platform Depth", text: "Fluent across funnels, workflows, pipelines, domains, phone, and A2P." },
              { icon: MessageSquare, title: "Clear Communication", text: "Plain-English walkthroughs your whole team can follow." },
              { icon: Workflow, title: "Beyond the Ticket", text: "We fix the system, not just the symptom in front of us." },
              { icon: Bot, title: "Automation & AI Insight", text: "Conversation AI, Voice AI, and follow-up layered on top of clean ops." },
              { icon: Gauge, title: "Speed & Follow-Through", text: "Defined response windows and work that actually gets finished." },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border p-7"
                style={{ borderColor: "rgba(244,237,224,0.1)", backgroundColor: "rgba(6,8,15,0.5)" }}
              >
                <Icon className="mb-4 h-6 w-6" style={{ color: GOLD }} />
                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-[15px] leading-relaxed opacity-75">{text}</p>
              </div>
            ))}
          </div>

          {/* Testimonials placeholder — real, permission-based quotes only */}
          <div
            className="mt-10 rounded-3xl border border-dashed p-8 text-center"
            style={{ borderColor: "rgba(194,165,103,0.3)" }}
          >
            <p className="text-sm uppercase tracking-[0.18em] opacity-60">Client Results</p>
            <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed opacity-70">
              Verified testimonials from founding agencies are added here as they come in — real, permission-based
              quotes only (anonymized where preferred, e.g. "Agency owner, 20+ client accounts").
            </p>
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA / AUDIT FORM ===================== */}
      <Section id="audit">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SpanEyebrow>Book Your Audit</SpanEyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl" style={serif}>
              Book Your HighLevel Operations Audit.
            </h2>
            <p className="mt-5 text-lg leading-relaxed opacity-80">
              On the call, we'll identify exactly where your HighLevel setup is costing you time — and what to
              fix first.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "What's broken or slowing you down",
                "What to repair first",
                "Whether a Rescue Sprint fits",
                "What ongoing support looks like after",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full"
                    style={{ backgroundColor: "rgba(194,165,103,0.15)" }}
                  >
                    <Check className="h-3 w-3" style={{ color: GOLD }} />
                  </span>
                  <span className="text-[15px] opacity-85">{item}</span>
                </li>
              ))}
            </ul>
            <div
              className="mt-10 flex items-center gap-3 rounded-2xl border p-5"
              style={{ borderColor: "rgba(244,237,224,0.12)", backgroundColor: "rgba(255,255,255,0.02)" }}
            >
              <Zap className="h-5 w-5 flex-shrink-0" style={{ color: GOLD }} />
              <p className="text-sm opacity-75">
                Founding pricing is limited to the first five agencies. If it's a fit, we'll get you booked on
                the calendar right away.
              </p>
            </div>
          </div>

          {/* Form */}
          <div
            className="rounded-3xl border p-8"
            style={{ borderColor: "rgba(194,165,103,0.35)", backgroundColor: "rgba(255,255,255,0.02)" }}
          >
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <span
                  className="mb-5 grid h-14 w-14 place-items-center rounded-full"
                  style={{ backgroundColor: "rgba(194,165,103,0.15)" }}
                >
                  <Check className="h-7 w-7" style={{ color: GOLD }} />
                </span>
                <h3 className="text-2xl font-semibold" style={serif}>
                  Details received.
                </h3>
                <p className="mt-3 max-w-sm text-[15px] opacity-75">
                  Taking you to the calendar now to lock in your audit time. If it doesn't open,{" "}
                  <a href={BOOKING_URL} className="underline" style={{ color: GOLD }}>
                    click here
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleAuditSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" name="fullName" required />
                  <Field label="Agency Name" name="agencyName" required />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>
                <Field label="Agency Website" name="website" type="url" placeholder="https://" />
                <div>
                  <label className="mb-1.5 block text-sm font-medium opacity-80">
                    Active client sub-accounts
                  </label>
                  <select
                    name="subAccounts"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border bg-transparent px-4 py-3 text-[15px] outline-none transition focus:border-[#c2a567]"
                    style={{ borderColor: "rgba(244,237,224,0.18)", color: CREAM }}
                  >
                    <option value="" disabled style={{ color: "#000" }}>
                      Select a range…
                    </option>
                    {["1–5", "6–15", "16–30", "30+"].map((r) => (
                      <option key={r} value={r} style={{ color: "#000" }}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium opacity-80">
                    What feels hardest to manage right now?
                  </label>
                  <textarea
                    name="hardest"
                    rows={4}
                    className="w-full resize-none rounded-xl border bg-transparent px-4 py-3 text-[15px] outline-none transition focus:border-[#c2a567]"
                    style={{ borderColor: "rgba(244,237,224,0.18)", color: CREAM }}
                    placeholder="Onboarding, broken workflows, A2P, integrations…"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-semibold transition hover:opacity-90"
                  style={{ backgroundColor: GOLD, color: INK }}
                >
                  Request My Audit
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-center text-xs opacity-50">
                  You'll be taken to the calendar to choose a time. No obligation.
                </p>
              </form>
            )}
          </div>
        </div>
      </Section>

      {/* ============================= FAQ ============================= */}
      <section id="faq" className="border-t py-24" style={{ borderColor: "rgba(194,165,103,0.16)" }}>
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeading eyebrow="FAQ">Straight Answers.</SectionHeading>
          <div className="mt-12 space-y-3">
            {[
              {
                q: "Do you go into my account or just advise?",
                a: "We go in. LIV8 AI is implementation-first — we work inside your HighLevel account to repair, organize, and build the systems, not just tell you what to do.",
              },
              {
                q: "Are you affiliated with HighLevel?",
                a: "No. LIV8 AI is an independent company and is not affiliated with, sponsored by, or endorsed by HighLevel or its affiliates.",
              },
              {
                q: "Do you guarantee more leads or revenue?",
                a: "No. We never promise revenue or leads. Our Launch-Ready Guarantee covers the work and scope: we keep going until the systems in your project are operational and documented.",
              },
              {
                q: "What size agency is this for?",
                a: "Agencies with roughly 3–30 active client sub-accounts that are already making money but drowning in onboarding, fulfillment, and troubleshooting.",
              },
              {
                q: "Do you support my clients directly?",
                a: "Primarily your agency team. Scheduled client-facing calls are available on the Growth and Embedded plans.",
              },
              {
                q: "What about A2P?",
                a: "An A2P readiness review is included in the Rescue Sprint. We prepare and organize what carriers look for — but carrier approval itself is never guaranteed.",
              },
            ].map((item, i) => (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border"
                style={{ borderColor: "rgba(244,237,224,0.12)", backgroundColor: "rgba(255,255,255,0.02)" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[16px] font-medium">{item.q}</span>
                  {openFaq === i ? (
                    <Minus className="h-5 w-5 flex-shrink-0" style={{ color: GOLD }} />
                  ) : (
                    <Plus className="h-5 w-5 flex-shrink-0" style={{ color: GOLD }} />
                  )}
                </button>
                {openFaq === i && (
                  <p className="px-6 pb-5 text-[15px] leading-relaxed opacity-75">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ FOOTER ============================ */}
      <footer className="border-t py-16" style={{ borderColor: "rgba(194,165,103,0.16)" }}>
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="md:col-span-1">
              <div className="mb-4 flex items-center gap-2.5">
                <span
                  className="grid h-9 w-9 place-items-center rounded-full border text-sm font-bold"
                  style={{ borderColor: GOLD, color: GOLD }}
                >
                  8
                </span>
                <span className="text-lg font-semibold tracking-wide">
                  LIV8 <span style={{ color: GOLD }}>AI</span>
                </span>
              </div>
              <p className="max-w-xs text-sm leading-relaxed opacity-65">
                Fractional HighLevel Operations for growing agencies. We go inside your account and make the
                systems work — so you can get back to growing. Founder: Jamaur Johnson.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-60">Navigate</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#offer" className="opacity-70 transition hover:opacity-100">The Rescue Sprint</a></li>
                <li><a href="#plans" className="opacity-70 transition hover:opacity-100">Ops Desk Plans</a></li>
                <li><a href="#faq" className="opacity-70 transition hover:opacity-100">FAQ</a></li>
                <li><a href="#audit" className="opacity-70 transition hover:opacity-100">Book an Audit</a></li>
                <li><Link href="/"><span className="cursor-pointer opacity-70 transition hover:opacity-100">Main Site</span></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-60">Get Started</h4>
              <button
                onClick={scrollToAudit}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:opacity-90"
                style={{ backgroundColor: GOLD, color: INK }}
              >
                Request My Audit
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-12 border-t pt-8" style={{ borderColor: "rgba(244,237,224,0.1)" }}>
            <p className="text-xs leading-relaxed opacity-50">
              LIV8 AI is an independent company and is not affiliated with, sponsored by, or endorsed by
              HighLevel or its affiliates. HighLevel is a trademark of its respective owner. Services are
              provided on a defined-scope basis; results vary by agency.
            </p>
            <p className="mt-4 text-xs opacity-45">© 2026 LIV8 AI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* ==================== STICKY MOBILE CTA BAR ==================== */}
      <div
        className="fixed inset-x-0 bottom-0 z-50 border-t p-3 backdrop-blur-md md:hidden"
        style={{ backgroundColor: "rgba(6,8,15,0.92)", borderColor: "rgba(194,165,103,0.2)" }}
      >
        <button
          onClick={scrollToAudit}
          className="flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold"
          style={{ backgroundColor: GOLD, color: INK }}
        >
          Request My Audit
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      {/* spacer so sticky bar never covers footer content on mobile */}
      <div className="h-20 md:hidden" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Small presentational helpers                                       */
/* ------------------------------------------------------------------ */
function Section({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

function SpanEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em]"
      style={{ borderColor: "rgba(194,165,103,0.4)", color: GOLD }}
    >
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="text-center">
      <SpanEyebrow>{eyebrow}</SpanEyebrow>
      <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-[2.75rem]" style={serif}>
        {children}
      </h2>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium opacity-80">
        {label}
        {required && <span style={{ color: GOLD }}> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border bg-transparent px-4 py-3 text-[15px] outline-none transition focus:border-[#c2a567]"
        style={{ borderColor: "rgba(244,237,224,0.18)", color: CREAM }}
      />
    </div>
  );
}

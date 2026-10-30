# LIV8 AI — Polsia-inspired Business OS
## Product decision (2026-10-30)

**REA is an inspection tool, not the customer application.** The authorized reverse-engineering target is the observable customer experience of Polsia. REA browser analysis can examine public page structure, scripts, rendered behavior and network observations without assuming privileged backend access. Use lawful, rate-limited public observations and authorized accounts only. Do not bypass authentication, scrape private information, or copy proprietary code or branding.

**Own our customer experience:** LIV8AI.com and BuiltInMinutes.com should share a conversational business builder. LIV8 OS + LIV8 Brain orchestrate plans, approvals, state, memory, logs and jobs. HighLevel powers CRM, calendars, websites/funnels where appropriate, forms, automations, Managed Agents, email/SMS with consent and SaaS account provisioning. REA is developer research infrastructure only.

## Evidence-based product requirements
From screenshots shared 2026-10-30: Polsia shows progress ('shipping', bundle build/publish), website URL, company documents (roadmap, mission/profile), social post draft, mailbox and a company switcher. These are **UI observations**, not proof of backend implementation.

Research references:
- HighLevel snapshots: https://help.gohighlevel.com/support/solutions/articles/48000982512-create-snapshots
- Managed agents in snapshots: https://help.gohighlevel.com/support/solutions/articles/155000008247-how-to-clone-and-share-super-agents-using-snapshots
- AI Studio features and APIs must be tested against the tenant's actual authorization and publicly supported interfaces. Browser availability does not imply API availability.

## Build architecture
1. Public front end: conversation that turns an idea or existing company into a structured brief, customer confirmation, and a staged plan.
2. Customer tenant workspace: brand kit, company documents, agents, website, domain, CRM, pipeline, marketing calendar, progress feed, activity logs and approval inbox.
3. LIV8 OS orchestration: persisted per-tenant jobs with idempotency keys, typed adapter actions, retries, audit events, quotas, budgets, event stream and rollback state.
4. HighLevel adapter: OAuth/location-scoped tokens securely encrypted; verified supported endpoints only. Provision templates and snapshot deployment when authorized, then configure account-specific fields, workflows, agent knowledge and calendars.
5. Building adapters: HighLevel AI Studio where supported; custom versioned GitHub/Vercel builds when a custom app is required.
6. Communications: drafts first; email and SMS require validated opt-in/opt-out, sending identity, A2P 10DLC when applicable, compliance checks, per-tenant throttling and approval rules.
7. Multi-agent roles: Strategy, Brand, Web, CRM, Automation, Growth, Support and QA, with outcome-focused evaluations.
8. Product analytics: leads, booked appointments, response time, MRR, activation, usage costs, churn, cohort retention and gross margin.

## Delivery sequence
**P0 — Inspect and prove:** public Polsia workflow capture via REA with screenshots and structured notes; audit current LIV8 OS and LIV8 AI; enumerate HighLevel tenant/API permissions and Managed Agent/snapshot limitations.
**P1 — Functional vertical MVP:** one industry (appointment-driven local service); conversational brief; deterministic plan; tenant workspace; brand docs; human-approved HighLevel snapshot installation; basic lead agent; landing page; verified CRM lead capture; event/activity feed.
**P2 — Sellable onboarding:** billing and tenancy, client data isolation, domain setup, agency permissions, marketing sequence drafts, client QA gates, metering, help desk.
**P3 — Scale:** reusable vertical templates, reliable agent generation, website deployments, self-serve setup, partner/affiliate channel, client referrals and measured retention.

## Revenue milestone
Annualized recurring revenue target $1M ~= $83,333 monthly. Example pricing hypothesis (not tested): Starter $197/mo + $497 setup, Growth $497/mo + $1,497 setup, Scale $997/mo + $2,997 setup. Example mix 50 / 100 / 20 leads to $87,490 MRR = $1,049,880 annualized recurring revenue. Actual realized sales and margins differ; validate willingness to pay, acquisition costs, churn and AI/service unit economics before scaling.

## Acceptance criteria before claiming 'automatic company creation'
- Dedicated tenant and billing scope; secure secrets; functional HighLevel OAuth and least-privilege API access.
- Generate a brief and persisted plan; show real progress and failure/retry state.
- Produce a brand kit, landing page and business documents that a customer can inspect.
- Install and test one Managed Agent + workflows in an isolated test location; evidence of CRM capture and booking.
- Explicit approvals for domain/publish, spend, campaign sends and destructive changes.
- Agent run logs, measurable output tests, rollback and support escalation.
- E2E test in a controlled client account; only then promote from preview to paid live onboarding.

## Non-goals
Do not replace LIV8 OS; do not merge REA source into live customer app; do not falsely imply HighLevel has API support for every UI operation. Do not deploy a Polsia clone or promise $1M in earnings.

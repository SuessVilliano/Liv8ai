# LIV8 AI Founder's Launchpad

Visible brand: **LIV8 AI**. Narration: **Elevate AI**.

## Available routes

- `/launchpad`: public product landing page.
- `/launchpad/onboarding`: personal founder profile; member registration is gated on a configured database.
- `/launchpad/workspace`: personal browser workspace; account-backed workspace when connected.
- `/launchpad/library`: five text tutorials and practice assignments.
- `/launchpad/community`: moderated member channels, currently gated.
- `/launchpad/levelup-2026`: public research and tutorial hub.
- `/launchpad/editorial`: local draft editor, announcement intake, validation checklist and target-date calendar. No automatic social publication.
- `/launchpad/privacy`: scope-specific data notice.

Existing routes, third-party lead forms, trial offers, chat and affiliate tracker are preserved. No HighLevel affiliate link was invented, shortened, redirected, or replaced.

## Configuration required before opening member services

The existing Vercel project has no DATABASE_URL or GHL credentials configured as of inspection October 27, 2026. Only Replicate integration configuration was present. Connector authorization is not an application credential and cannot be copied into a website.

Set these in the existing project's protected server environment, never in client variables or git:

- `DATABASE_URL`: compatible Neon/Postgres endpoint. Run `npm run launchpad:migrate` against the intended database before enabling traffic. Migration adds only `lp_*` tables.
- `LAUNCHPAD_ORIGIN`: exact allowed browser origin, normally `https://www.liv8ai.com`.
- `LAUNCHPAD_ADMIN_TOKEN`: random token of at least 32 characters for moderation, analytics, intake review and explicit CRM sync. It is not stored by the editorial UI.
- `GHL_API_KEY`, `GHL_LOCATION_ID`: a location-scoped credential for the verified LIV8 AI CRM location. Never use HighLevel's Affiliate Team location for this product.

The connected META SV location resolves to `meta.suessvilliano.com`, not `liv8ai.com`; the other inspected connection resolves to HighLevel's Affiliate Team. A correct LIV8 AI destination has not been established. No external CRM records or workflows were changed.

## CRM operation

Registration queues a durable `founder_joined` event. `POST /api/launchpad/admin/sync-crm`, with operator Bearer authorization, claims queued events and upserts the member by email into the configured location. It adds `liv8-founder`; opted-in education contacts also get `liv8-email-opt-in`. Failed events remain visible for retry; no fake success response is returned.

This initial adapter does not provision HighLevel workflows or send messages. Before enabling it, validate an isolated test contact, the target location, tag behavior and DND semantics. Do not enable existing tag-triggered automations until their audience, consent, opt-out and sender details have been reviewed. Do not interpret education email consent as SMS or automated-call consent.

Required CRM workflow configuration once correct location access exists:

1. New member: upsert contact, retain original UTM source/campaign, create founder onboarding task. Do not send marketing without explicit permission.
2. Onboarding completion: stage `Onboarded`, store offer/audience/target using approved custom fields.
3. Paid sale/milestone: idempotent external sale ID; tags `liv8-sale-1`, `liv8-sale-10`, `liv8-sale-100`, `liv8-sale-1000`; never label a trial or click as a paid sale.
4. Education email: only `liv8-email-opt-in`, with sender identity, postal address and unsubscribe handling.
5. Community: moderated posts; no mass invitations or unapproved publication.

Only registration contact sync is implemented in the adapter. Milestone workflow delivery, custom-field mapping and message automation remain activation work, not claimed as live.

## Data and controls

Passwords use salted scrypt; sessions are random, hashed server-side, HttpOnly, SameSite=Lax, Secure in production and expire in 7 days. All member SQL uses parameters and member ownership filters. Registration/login/post rate buckets are stored in Postgres. Public posting is moderation-first. Member APIs return 503 without a database. Admin APIs require the dedicated token. Never store passwords, tokens or contacts in browser data exports.

Personal mode stores a versioned founder profile, generic sales labels and completed lesson/challenge IDs in localStorage. It does not create an account or send the profile to the server. Existing site analytics/chat integrations still load. Export and deletion are supported.

Before activating accounts, complete real database integration tests, verify backups/deletion operations, confirm account recovery/support process and test across devices. Those services cannot be truthfully verified without their configuration.

## Content production

The local editorial desk seeds two short scripts, a long tutorial script and an SEO article. All remain drafts. Every material edit returns an item to draft. Required checks include official source, account availability, actual screen capture, exact prior avatar/voice match, disclosures, captions, links and thumbnail. Target dates are editorial targets, never publishing schedules.

Prior production reference: HeyGen video `6a90ebbac623c593f8ec76e6dff59efd`, “HighLevel Affiliate Q4 Bounty | SV | Manager Review Draft”, completed, about 50 seconds. The video tool returns playable media but not the original avatar ID or ElevenLabs voice ID.

Current ElevenLabs inventory includes professional `META SV` (`AjSHTFMHCghJkAe2wywi`) and cloned `Meta SV` (`IFqBlbmmZzGA2COZDIXl`). Earlier production context calls for the cloned voice, but the exact voice used by the bounty reference is not proven. Do not substitute either without evidence. No paid generation was started.

The seller guide was located in the user's sent email and read privately. It is not included in this public repository. Public scripts use primary public sources and record discrepancies instead of reproducing internal material.

## Validation

`npm run check`, `npm test`, `npm run build`.

Do not report a full funnel or production CRM test as passed while DATABASE_URL and the correct location credentials are absent. Personal mode and production pages can be independently tested.

-- Additive migration: existing site tables are never modified.
CREATE TABLE IF NOT EXISTS lp_members (
 id text PRIMARY KEY, email text NOT NULL UNIQUE, password_hash text NOT NULL,
 profile jsonb NOT NULL, referral_code text NOT NULL UNIQUE, referred_by text REFERENCES lp_members(id),
 attribution jsonb NOT NULL DEFAULT '{}', created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS lp_sessions (token_hash text PRIMARY KEY, member_id text NOT NULL REFERENCES lp_members(id) ON DELETE CASCADE, expires_at timestamptz NOT NULL);
CREATE TABLE IF NOT EXISTS lp_sales (id text PRIMARY KEY, member_id text NOT NULL REFERENCES lp_members(id) ON DELETE CASCADE, external_id text NOT NULL, label text NOT NULL, occurred_at timestamptz NOT NULL, created_at timestamptz NOT NULL DEFAULT now(), UNIQUE(member_id,external_id));
CREATE TABLE IF NOT EXISTS lp_progress (member_id text NOT NULL REFERENCES lp_members(id) ON DELETE CASCADE, item_id text NOT NULL, completed_at timestamptz NOT NULL DEFAULT now(), PRIMARY KEY(member_id,item_id));
CREATE TABLE IF NOT EXISTS lp_posts (id text PRIMARY KEY, member_id text NOT NULL REFERENCES lp_members(id) ON DELETE CASCADE, channel text NOT NULL, body text NOT NULL, status text NOT NULL DEFAULT 'pending', created_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE IF NOT EXISTS lp_announcements (id text PRIMARY KEY, title text NOT NULL, source_url text NOT NULL, availability text NOT NULL, summary text NOT NULL, status text NOT NULL DEFAULT 'draft', checks jsonb NOT NULL DEFAULT '{}', created_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE IF NOT EXISTS lp_outbox (id text PRIMARY KEY, member_id text NOT NULL REFERENCES lp_members(id) ON DELETE CASCADE, event text NOT NULL, payload jsonb NOT NULL, status text NOT NULL DEFAULT 'pending', attempts integer NOT NULL DEFAULT 0, error text, created_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE IF NOT EXISTS lp_rate_limits (key text PRIMARY KEY, hits integer NOT NULL DEFAULT 1, expires_at timestamptz NOT NULL);
CREATE INDEX IF NOT EXISTS lp_posts_channel ON lp_posts(channel,status,created_at DESC);
CREATE INDEX IF NOT EXISTS lp_outbox_pending ON lp_outbox(status,created_at);

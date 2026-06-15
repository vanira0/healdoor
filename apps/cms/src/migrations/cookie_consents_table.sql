-- Migration script for CookieConsents table
-- This is managed outside of Payload CMS as per the approved implementation plan.

CREATE TABLE IF NOT EXISTS cookie_consents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id VARCHAR(128) NOT NULL,
  consent BOOLEAN NOT NULL,
  consented_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  ip_hash VARCHAR(64)
);

CREATE INDEX IF NOT EXISTS idx_cookie_consents_session_id ON cookie_consents(session_id);

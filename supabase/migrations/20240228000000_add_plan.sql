-- ============================================================
-- ZeroScribe — Add plan column to profiles
-- Run this in Supabase SQL Editor
-- ============================================================

-- NULL = plan not yet chosen (first-time login → redirect to /upgrade)
-- 'free' = free tier
-- 'pro'  = pro tier (free during launch validation)
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS plan TEXT CHECK (plan IN ('free', 'pro')) DEFAULT NULL;

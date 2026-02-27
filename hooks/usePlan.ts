'use client'

import { useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useProfile } from '@/hooks/useProfile'
import type { PlanId } from '@/lib/plans'
import { canUseGmailScan, canUseAnalytics, canUseInsights, canAddSubscription } from '@/lib/plans'

export function usePlan() {
  const { profile, updateProfile, refresh } = useProfile()
  const supabase = createClient()

  const plan: PlanId | null = (profile?.plan as PlanId | null) ?? null
  const isPro = plan === 'pro'

  /** Instantly activate a plan — no payment needed during validation phase */
  const choosePlan = useCallback(async (newPlan: PlanId) => {
    if (!profile) return false
    const error = await updateProfile({ plan: newPlan })
    if (!error) await refresh()
    return !error
  }, [profile, updateProfile, refresh])

  return {
    plan,
    isPro,
    isPlanChosen: plan !== null,
    canGmailScan: canUseGmailScan(plan),
    canAnalytics: canUseAnalytics(plan),
    canInsights: canUseInsights(plan),
    canAddSub: (currentCount: number) => canAddSubscription(plan, currentCount),
    choosePlan,
  }
}

// ============================================================
// ZeroScribe — Plan definitions & feature gates
// ============================================================

export type PlanId = 'free' | 'pro'

export interface PlanConfig {
  id: PlanId
  name: string
  price: string
  period: string
  description: string
  maxSubscriptions: number  // -1 = unlimited
  features: string[]
  excluded: string[]
}

export const PLANS: Record<PlanId, PlanConfig> = {
  free: {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Track your core subscriptions manually.',
    maxSubscriptions: 5,
    features: [
      'Up to 5 subscriptions',
      'Manual entry',
      'Renewal reminders',
      'Basic spending overview',
      'Dark & light mode',
    ],
    excluded: [
      'Gmail auto-detection',
      'Unlimited subscriptions',
      'Advanced analytics',
      'Smart insights',
      'Custom categories',
    ],
  },
  pro: {
    id: 'pro',
    name: 'Pro',
    price: '$4',
    period: 'per month',
    description: 'Full automation, deep insights, and unlimited tracking.',
    maxSubscriptions: -1,
    features: [
      'Unlimited subscriptions',
      'Gmail auto-detection',
      'Advanced analytics',
      'Smart spending insights',
      'Custom categories',
      'Early renewal alerts',
      'Export to CSV',
      'Priority support',
    ],
    excluded: [],
  },
}

/** Returns true if the given plan has access to a feature sub-set */
export function canUseGmailScan(plan: PlanId | null): boolean {
  return plan === 'pro'
}

export function canUseAnalytics(plan: PlanId | null): boolean {
  return plan === 'pro'
}

export function canUseInsights(plan: PlanId | null): boolean {
  return plan === 'pro'
}

export function canAddSubscription(plan: PlanId | null, current: number): boolean {
  if (plan === 'pro') return true
  return current < PLANS.free.maxSubscriptions
}

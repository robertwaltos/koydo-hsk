export const PRICING = {
  free: {
    name: "Free", price: 0, currency: "CNY", interval: null,
    features: ["10 questions per day", "All HSK levels", "Basic progress tracking"],
  },
  premium: {
    name: "Premium", price: 29, currency: "CNY", interval: "month" as const,
    features: ["Unlimited questions", "AI-powered study paths", "Character writing practice", "Offline mode", "Priority support"],
  },
} as const;

export type PricingTier = keyof typeof PRICING;

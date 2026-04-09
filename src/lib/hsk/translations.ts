export const TRANSLATIONS = {
  zh: {
    appName: "Koydo HSK",
    tagline: "HSK汉语水平考试备考 — 免费练习题和AI分析",
    startStudying: "免费开始学习",
    viewPlans: "查看方案",
    learnHub: "HSK学习中心",
    pricing: "价格",
    free: "免费",
    premium: "高级版",
    questionsPerDay: "每天10题",
    unlimited: "无限制",
    privacy: "隐私政策",
    terms: "服务条款",
  },
  en: {
    appName: "Koydo HSK",
    tagline: "HSK Chinese Proficiency Test prep — free practice questions and AI analytics",
    startStudying: "Start Studying Free",
    viewPlans: "View Plans",
    learnHub: "HSK Study Hub",
    pricing: "Pricing",
    free: "Free",
    premium: "Premium",
    questionsPerDay: "10 questions / day",
    unlimited: "Unlimited",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
} as const;

export type Locale = keyof typeof TRANSLATIONS;
export type TranslationKey = keyof (typeof TRANSLATIONS)["en"];

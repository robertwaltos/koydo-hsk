// Auto-generated content manifest for Hsk
// Question targets are 2-3x competition floor

export type ActivityType =
  | "multiple_choice" | "essay" | "cloze_deletion" | "numeric_input"
  | "whiteboard" | "reading_passage" | "audio_mcq" | "voice_explanation"
  | "flashcard_deck" | "fill_in_blank" | "data_interpretation" | "diagram_label"
  | "scenario_based" | "coding_challenge" | "case_study" | "calculation"
  | "simulation" | "gamified_quiz" | "portfolio_review" | "visual_mcq"
  | "branching_scenario" | "heading_matching" | "project_based" | "story_based"
  | "sql_challenge" | "rubric_assessment" | "peer_review" | "timeline_ordering";

export type ExamCategory =
  | "admissions" | "language_cert" | "professional" | "k12_national"
  | "trade" | "creative" | "productivity" | "language_skills" | "kids";

export interface TopicManifest {
  id: string;
  domain: string;
  title: string;
  icon: string;
  color: string;
  questionTarget: number;
  activityTypes: ActivityType[];
}

export interface ContentManifest {
  examId: string;
  examName: string;
  totalQuestions: number;
  category: ExamCategory;
  topics: TopicManifest[];
}

export const CONTENT_MANIFEST: ContentManifest = {
  examId: "hsk",
  examName: "Hsk",
  totalQuestions: 3400,
  category: "language_cert",
  topics: [
  {
    id: "vocab",
    domain: "vocab",
    title: "Vocabulary & Characters",
    icon: "🀄",
    color: "#DC2626",
    questionTarget: 1200,
    activityTypes: ["multiple_choice", "flashcard_deck", "character_writing"],
  },
  {
    id: "grammar",
    domain: "grammar",
    title: "Grammar & Structure",
    icon: "📝",
    color: "#1E40AF",
    questionTarget: 800,
    activityTypes: ["multiple_choice", "cloze_deletion", "fill_in_blank"],
  },
  {
    id: "reading",
    domain: "reading",
    title: "Reading",
    icon: "📖",
    color: "#059669",
    questionTarget: 800,
    activityTypes: ["multiple_choice", "reading_passage"],
  },
  {
    id: "listening",
    domain: "listening",
    title: "Listening",
    icon: "🎧",
    color: "#D97706",
    questionTarget: 600,
    activityTypes: ["multiple_choice", "audio_mcq"],
  }
  ],
};

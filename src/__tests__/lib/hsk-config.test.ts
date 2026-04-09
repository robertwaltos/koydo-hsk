import { describe, it, expect } from "vitest";
import { EXAM_CONFIG } from "@/lib/hsk/config";

describe("HSK Config", () => {
  it("has correct exam ID", () => { expect(EXAM_CONFIG.examId).toBe("EXAM026"); });
  it("has valid theme colors", () => {
    expect(EXAM_CONFIG.themeColor).toMatch(/^#[0-9A-Fa-f]{6}$/);
    expect(EXAM_CONFIG.themeColorDark).toMatch(/^#[0-9A-Fa-f]{6}$/);
  });
  it("has correct URL", () => { expect(EXAM_CONFIG.url).toBe("https://hsk.koydo.app"); });
  it("has all required levels", () => { expect(EXAM_CONFIG.levels).toHaveLength(6); });
  it("has freemium gate configured", () => { expect(EXAM_CONFIG.freemiumGate.dailyQuestions).toBe(10); });
  it("has IP disclaimer", () => { expect(EXAM_CONFIG.ipDisclaimer).toContain("CLEC"); });
});

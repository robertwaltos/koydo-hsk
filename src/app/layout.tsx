import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Koydo HSK — Chinese Proficiency Test Prep",
  description: "Free HSK practice questions for levels 1–6 with reading, listening, and writing exercises powered by AI analytics.",
  metadataBase: new URL("https://hsk.koydo.app"),
  icons: { icon: "/favicon.svg" },
  manifest: "/manifest.webmanifest",
  other: { "theme-color": "#B91C1C" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ exam: "hsk", message: "Dashboard endpoint — connect to Supabase for live data", levels: ["HSK 1","HSK 2","HSK 3","HSK 4","HSK 5","HSK 6"] });
}

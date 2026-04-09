import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ exam: "hsk", message: "Questions endpoint — connect to Supabase for question bank", categories: ["Reading","Listening","Writing"] });
}

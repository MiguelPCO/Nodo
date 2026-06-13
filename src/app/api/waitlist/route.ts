import { NextResponse } from "next/server";
import { z } from "zod";
import { saveWaitlistEntry } from "@/lib/waitlist";

const waitlistSchema = z.object({
  email: z.email(),
  source: z.enum([
    "memory-box",
    "primeros-anos",
    "legado",
    "promesa",
    "raiz",
    "viaje",
    "archivo",
    "newsletter",
  ]),
  consent: z.literal(true),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const parsed = waitlistSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "invalid_data" }, { status: 400 });
  }

  const result = await saveWaitlistEntry(parsed.data);
  if (!result.ok) {
    return NextResponse.json({ ok: false, error: "storage_error" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

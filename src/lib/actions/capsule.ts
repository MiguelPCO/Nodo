"use server";

import { createSupabaseServerClient } from "@/lib/supabase-server";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export type Occasion =
  | "bebe"
  | "pareja"
  | "abuelos"
  | "viaje"
  | "familia"
  | "libre";

export interface CreateCapsuleInput {
  occasion: Occasion;
  name: string;
  openDate: string | null; // ISO date string YYYY-MM-DD or null
}

export async function createCapsule(input: CreateCapsuleInput) {
  const user = await getUser();
  if (!user) redirect("/auth/login");

  const supabase = await createSupabaseServerClient();

  // Find or create the family for this user
  const { data: membership } = await supabase
    .from("family_members")
    .select("family_id")
    .eq("user_id", user.id)
    .eq("role", "owner")
    .limit(1)
    .single();

  let familyId: string;

  if (membership?.family_id) {
    familyId = membership.family_id;
  } else {
    // First capsule → auto-create family
    const emailPrefix =
      user.email?.split("@")[0]?.replace(/[^a-zA-ZÀ-ÿ\s]/g, " ").trim() ??
      "Mi familia";
    const familyName =
      emailPrefix.charAt(0).toUpperCase() + emailPrefix.slice(1);

    const { data: family, error: familyErr } = await supabase
      .from("families")
      .insert({ name: familyName, created_by: user.id })
      .select("id")
      .single();

    if (familyErr || !family) {
      console.error("families insert error:", familyErr);
      throw new Error("No se pudo crear el archivo familiar");
    }

    const { error: memberErr } = await supabase.from("family_members").insert({
      family_id: family.id,
      user_id: user.id,
      role: "owner",
    });

    if (memberErr) {
      console.error("family_members insert error:", memberErr);
      // Compensating delete — avoids orphaned family row on retry
      await supabase.from("families").delete().eq("id", family.id);
      throw new Error("No se pudo configurar la familia");
    }

    familyId = family.id;
  }

  const { data: capsule, error } = await supabase
    .from("capsules")
    .insert({
      family_id: familyId,
      name: input.name.trim(),
      occasion: input.occasion,
      open_date: input.openDate ?? null,
      created_by: user.id,
    })
    .select("id")
    .single();

  if (error || !capsule) {
    console.error("capsules insert error:", error);
    throw new Error("No se pudo crear la cápsula");
  }

  return { id: capsule.id };
}

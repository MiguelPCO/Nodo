"use server";

import { createSupabaseServerClient } from "@/lib/supabase-server";
import { getUser } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export interface AddMemoryInput {
  capsuleId: string;
  familyId: string;
  type: "photo" | "note";
  storageKey?: string;
  caption?: string;
}

export async function addMemory(input: AddMemoryInput) {
  const user = await getUser();
  if (!user) throw new Error("No autenticado");

  const supabase = await createSupabaseServerClient();

  // Verify the capsule actually belongs to the supplied family (prevents cross-family injection)
  const { data: capsuleCheck } = await supabase
    .from("capsules")
    .select("family_id")
    .eq("id", input.capsuleId)
    .single();

  if (!capsuleCheck || capsuleCheck.family_id !== input.familyId) {
    throw new Error("Acceso denegado");
  }

  const { error } = await supabase.from("memories").insert({
    capsule_id: input.capsuleId,
    family_id: input.familyId,
    type: input.type,
    storage_key: input.storageKey ?? null,
    caption: input.caption ?? null,
    created_by: user.id,
  });

  if (error) {
    console.error("memories insert error:", error);
    throw new Error("No se pudo guardar el recuerdo");
  }

  revalidatePath(`/capsule/${input.capsuleId}`);
}

export async function deleteMemory(memoryId: string, capsuleId: string) {
  const user = await getUser();
  if (!user) throw new Error("No autenticado");

  const supabase = await createSupabaseServerClient();

  const { data: memory } = await supabase
    .from("memories")
    .select("storage_key")
    .eq("id", memoryId)
    .single();

  const { error } = await supabase.from("memories").delete().eq("id", memoryId);
  if (error) {
    console.error("memories delete error:", error);
    throw new Error("No se pudo borrar el recuerdo");
  }

  if (memory?.storage_key) {
    const { error: storageErr } = await supabase.storage
      .from("capsule-media")
      .remove([memory.storage_key]);
    if (storageErr) {
      console.error(`Storage remove failed for key ${memory.storage_key}:`, storageErr.message);
    }
  }

  revalidatePath(`/capsule/${capsuleId}`);
}

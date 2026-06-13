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

  const { error } = await supabase.from("memories").insert({
    capsule_id: input.capsuleId,
    family_id: input.familyId,
    type: input.type,
    storage_key: input.storageKey ?? null,
    caption: input.caption ?? null,
    created_by: user.id,
  });

  if (error) throw new Error(`Error guardando recuerdo: ${error.message} (${error.code})`);

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
  if (error) throw new Error(`Error borrando: ${error.message}`);

  if (memory?.storage_key) {
    await supabase.storage.from("capsule-media").remove([memory.storage_key]);
  }

  revalidatePath(`/capsule/${capsuleId}`);
}

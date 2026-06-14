import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import type { Occasion } from "@/lib/actions/capsule";
import { MemoryGrid } from "@/components/app/MemoryGrid";
import { MemoryUploader } from "@/components/app/MemoryUploader";
import { DateSeal } from "@/components/ui/DateSeal";
import {
  CapsuleIllustration,
  HandsIllustration,
  RootIllustration,
  BoxIllustration,
  EnvelopeIllustration,
  VoiceIllustration,
} from "@/components/illustrations";

export const metadata: Metadata = {
  title: "Cápsula",
  robots: { index: false },
};

const occasionIllustration: Record<Occasion, React.FC<{ className?: string }>> = {
  bebe: CapsuleIllustration,
  pareja: HandsIllustration,
  abuelos: RootIllustration,
  viaje: BoxIllustration,
  familia: EnvelopeIllustration,
  libre: VoiceIllustration,
};

const occasionLabel: Record<Occasion, string> = {
  bebe: "Primeros Años",
  pareja: "Pareja",
  abuelos: "Raíz",
  viaje: "Viaje",
  familia: "Familia",
  libre: "Libre",
};

export default async function CapsulePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createSupabaseServerClient();

  const { data: capsule } = await supabase
    .from("capsules")
    .select("id, name, occasion, open_date, status, family_id")
    .eq("id", id)
    .single();

  if (!capsule) notFound();

  const { data: rawMemories } = await supabase
    .from("memories")
    .select("id, type, storage_key, caption, created_at")
    .eq("capsule_id", id)
    .order("created_at", { ascending: false });

  // Batch-fetch all signed URLs in one Storage RPC call instead of N individual calls
  const photoKeys = (rawMemories ?? [])
    .filter((m) => m.type === "photo" && m.storage_key)
    .map((m) => m.storage_key as string);

  const signedUrlMap: Record<string, string> = {};
  if (photoKeys.length > 0) {
    const { data: signedItems } = await supabase.storage
      .from("capsule-media")
      .createSignedUrls(photoKeys, 3600);
    for (const item of signedItems ?? []) {
      if (item.signedUrl && item.path) signedUrlMap[item.path] = item.signedUrl;
    }
  }

  const memories = (rawMemories ?? []).map((m) => ({
    id: m.id,
    type: m.type as "photo" | "note",
    signedUrl: m.storage_key ? signedUrlMap[m.storage_key] : undefined,
    caption: m.caption,
    createdAt: m.created_at,
  }));

  const Illustration = occasionIllustration[capsule.occasion as Occasion];
  const label = occasionLabel[capsule.occasion as Occasion];

  return (
    <div className="px-5 py-8 sm:px-8 lg:px-12">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/dashboard"
          className="font-mono text-[11px] tracking-wider text-muted transition hover:text-text"
        >
          ← Mis cápsulas
        </Link>
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <div className="w-12 shrink-0 text-walnut opacity-60">
            <Illustration />
          </div>
          <div className="min-w-0 flex-1">
            <span className="font-mono text-[11px] tracking-wider text-muted">
              {label.toUpperCase()}
            </span>
            <h1 className="font-display text-3xl leading-tight text-walnut">
              {capsule.name}
            </h1>
          </div>
          {capsule.open_date && (
            <div className="shrink-0">
              <DateSeal>ABRIR EN {capsule.open_date.slice(0, 4)}</DateSeal>
            </div>
          )}
        </div>
      </div>

      {/* Recuerdos */}
      {memories.length > 0 && (
        <div className="mb-8">
          <p className="mb-4 font-mono text-[11px] tracking-wider text-muted">
            {memories.length} RECUERDO{memories.length !== 1 ? "S" : ""}
          </p>
          <MemoryGrid memories={memories} capsuleId={capsule.id} />
        </div>
      )}

      {/* Uploader */}
      <MemoryUploader capsuleId={capsule.id} familyId={capsule.family_id} />
    </div>
  );
}

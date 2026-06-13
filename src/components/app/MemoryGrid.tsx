"use client";

import { useTransition } from "react";
import { deleteMemory } from "@/lib/actions/memory";
import { useRouter } from "next/navigation";

export type MemoryItem = {
  id: string;
  type: "photo" | "note";
  signedUrl?: string;
  caption?: string | null;
  createdAt: string;
};

export function MemoryGrid({
  memories,
  capsuleId,
}: {
  memories: MemoryItem[];
  capsuleId: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleDelete(id: string) {
    startTransition(async () => {
      await deleteMemory(id, capsuleId);
      router.refresh();
    });
  }

  if (memories.length === 0) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {memories.map((m) => (
        <div
          key={m.id}
          className="group relative overflow-hidden rounded-[14px] border border-archive bg-card"
        >
          {m.type === "photo" && m.signedUrl ? (
            <>
              <img
                src={m.signedUrl}
                alt={m.caption ?? "Recuerdo"}
                className="aspect-[4/3] w-full object-cover"
              />
              {m.caption && (
                <p className="px-4 py-3 text-sm leading-relaxed text-text/80">
                  {m.caption}
                </p>
              )}
            </>
          ) : (
            <div className="p-4">
              <p className="mb-2 font-mono text-[10px] tracking-wider text-muted">
                NOTA
              </p>
              <p className="text-sm leading-relaxed text-text">{m.caption}</p>
            </div>
          )}

          <button
            onClick={() => handleDelete(m.id)}
            disabled={isPending}
            aria-label="Borrar recuerdo"
            className="absolute right-2 top-2 hidden rounded-full bg-ink/70 p-1.5 text-card backdrop-blur-sm transition hover:bg-ink group-hover:flex"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}

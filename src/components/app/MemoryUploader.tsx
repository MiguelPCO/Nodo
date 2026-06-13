"use client";

import { useState, useRef, useTransition } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseBrowser } from "@/lib/supabase-browser";
import { addMemory } from "@/lib/actions/memory";

interface Props {
  capsuleId: string;
  familyId: string;
}

type Mode = "pick" | "photo" | "note";

export function MemoryUploader({ capsuleId, familyId }: Props) {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("pick");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [caption, setCaption] = useState("");
  const [noteText, setNoteText] = useState("");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const inputRef = useRef<HTMLInputElement>(null);

  const busy = uploading || isPending;

  function reset() {
    setFile(null);
    setPreview(null);
    setCaption("");
    setNoteText("");
    setError(null);
    setMode("pick");
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
    setMode("photo");
  }

  async function handleSubmitPhoto() {
    if (!file) return;
    setError(null);
    setUploading(true);

    const supabase = getSupabaseBrowser();
    const ext = file.name.split(".").pop() ?? "jpg";
    const key = `${familyId}/${capsuleId}/${crypto.randomUUID()}.${ext}`;

    const { error: uploadErr } = await supabase.storage
      .from("capsule-media")
      .upload(key, file, { upsert: false });

    setUploading(false);

    if (uploadErr) {
      setError(`Error subiendo foto: ${uploadErr.message}`);
      return;
    }

    startTransition(async () => {
      try {
        await addMemory({
          capsuleId,
          familyId,
          type: "photo",
          storageKey: key,
          caption: caption.trim() || undefined,
        });
        reset();
        router.refresh();
      } catch (e) {
        setError(e instanceof Error ? e.message : "Error desconocido");
      }
    });
  }

  async function handleSubmitNote() {
    if (!noteText.trim()) return;
    setError(null);

    startTransition(async () => {
      try {
        await addMemory({
          capsuleId,
          familyId,
          type: "note",
          caption: noteText.trim(),
        });
        reset();
        router.refresh();
      } catch (e) {
        setError(e instanceof Error ? e.message : "Error desconocido");
      }
    });
  }

  const fileInput = (
    <input
      ref={inputRef}
      type="file"
      accept="image/*"
      className="hidden"
      onChange={handleFileChange}
    />
  );

  if (mode === "pick") {
    return (
      <div className="rounded-[16px] border border-dashed border-archive bg-paper p-6">
        {fileInput}
        <p className="mb-4 text-center font-mono text-[11px] tracking-wider text-muted">
          AÑADIR RECUERDO
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => inputRef.current?.click()}
            className="flex flex-1 flex-col items-center gap-2 rounded-[12px] border border-archive bg-card px-4 py-5 text-sm text-text/70 transition hover:border-walnut/40 hover:text-walnut"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <circle cx="8.5" cy="10.5" r="1.5" />
              <path d="M21 15l-5-5-4 5M12 15l-2-2-3 3" />
            </svg>
            Foto
          </button>
          <button
            onClick={() => setMode("note")}
            className="flex flex-1 flex-col items-center gap-2 rounded-[12px] border border-archive bg-card px-4 py-5 text-sm text-text/70 transition hover:border-walnut/40 hover:text-walnut"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              <path d="M4 6h16M4 10h16M4 14h10" />
            </svg>
            Nota
          </button>
        </div>
      </div>
    );
  }

  if (mode === "photo") {
    return (
      <div className="rounded-[16px] border border-archive bg-card p-5">
        {fileInput}
        <p className="mb-3 font-mono text-[11px] tracking-wider text-muted">FOTO</p>
        {preview && (
          <img
            src={preview}
            alt=""
            className="mb-4 aspect-video w-full rounded-[10px] object-cover"
          />
        )}
        <input
          type="text"
          placeholder="Pie de foto (opcional)"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="mb-3 w-full rounded-[10px] border border-archive bg-paper px-3 py-2 text-sm text-text placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-walnut/40"
        />
        {error && <p className="mb-3 text-xs text-red-500">{error}</p>}
        <div className="flex gap-2">
          <button
            onClick={reset}
            disabled={busy}
            className="rounded-[10px] border border-archive px-4 py-2 text-sm text-muted hover:text-text disabled:opacity-40"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmitPhoto}
            disabled={busy}
            className="flex-1 rounded-[10px] bg-ink px-4 py-2 text-sm font-medium text-card transition hover:bg-ink/90 disabled:opacity-50"
          >
            {uploading ? "Subiendo…" : isPending ? "Guardando…" : "Guardar foto"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[16px] border border-archive bg-card p-5">
      <p className="mb-3 font-mono text-[11px] tracking-wider text-muted">NOTA</p>
      <textarea
        placeholder="Escribe un recuerdo, una historia, una fecha…"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        rows={4}
        className="mb-3 w-full resize-none rounded-[10px] border border-archive bg-paper px-3 py-2 text-sm text-text placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-walnut/40"
      />
      {error && <p className="mb-3 text-xs text-red-500">{error}</p>}
      <div className="flex gap-2">
        <button
          onClick={reset}
          disabled={busy}
          className="rounded-[10px] border border-archive px-4 py-2 text-sm text-muted hover:text-text disabled:opacity-40"
        >
          Cancelar
        </button>
        <button
          onClick={handleSubmitNote}
          disabled={busy || !noteText.trim()}
          className="flex-1 rounded-[10px] bg-ink px-4 py-2 text-sm font-medium text-card transition hover:bg-ink/90 disabled:opacity-50"
        >
          {isPending ? "Guardando…" : "Guardar nota"}
        </button>
      </div>
    </div>
  );
}

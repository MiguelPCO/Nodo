"use client";

import { useState } from "react";
import type { WaitlistSource } from "@/lib/products";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "loading" | "ok" | "error";

export function WaitlistForm({
  source,
  cta = "Avísame en el lanzamiento",
  align = "start",
}: {
  source: WaitlistSource;
  cta?: string;
  align?: "start" | "center";
}) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [fieldError, setFieldError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFieldError(null);

    if (!/.+@.+\..+/.test(email)) {
      setFieldError("Parece que falta algo aquí. Revisa tu email.");
      return;
    }
    if (!consent) {
      setFieldError("Necesitamos tu consentimiento para avisarte.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source, consent }),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div
        role="status"
        className={`flex max-w-md flex-col gap-1 ${align === "center" ? "mx-auto items-center text-center" : ""}`}
      >
        <p className="font-display text-2xl text-walnut">Guardado.</p>
        <p className="text-sm text-text/80">
          Te escribiremos cuando tu cápsula esté lista. Sin prisas, sin spam.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`flex w-full max-w-md flex-col gap-3 ${align === "center" ? "mx-auto" : ""}`}
    >
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="flex-1">
          <label htmlFor={`waitlist-${source}`} className="sr-only">
            Tu email
          </label>
          <input
            id={`waitlist-${source}`}
            type="email"
            required
            autoComplete="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={fieldError ? true : undefined}
            className={`w-full min-h-[44px] rounded-[8px] border-[1.5px] bg-card px-4 py-3 text-base text-text placeholder:text-muted focus:outline-none focus:ring-4 focus:ring-ink/10 ${
              fieldError ? "border-terracotta" : "border-archive focus:border-ink"
            }`}
          />
        </div>
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Guardando…" : cta}
        </Button>
      </div>

      <label className="flex items-start gap-2.5 text-sm text-text/75">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 size-4 accent-(--color-ink)"
        />
        <span>
          Acepto recibir el aviso de lanzamiento según la{" "}
          <a href="/privacidad" className="underline underline-offset-2 hover:text-ink">
            política de privacidad
          </a>
          .
        </span>
      </label>

      {fieldError && (
        <p role="alert" className="text-sm text-terracotta">
          {fieldError}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm text-terracotta">
          No hemos podido guardarlo. Revisa tu conexión e inténtalo de nuevo.
        </p>
      )}
    </form>
  );
}

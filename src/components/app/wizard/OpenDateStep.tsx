"use client";

import { useState } from "react";

const presets = [
  { label: "En 5 años", years: 5 },
  { label: "En 10 años", years: 10 },
  { label: "En 18 años", years: 18 },
];

function addYears(years: number): string {
  const d = new Date();
  d.setFullYear(d.getFullYear() + years);
  return d.toISOString().split("T")[0];
}

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  const months = [
    "enero","febrero","marzo","abril","mayo","junio",
    "julio","agosto","septiembre","octubre","noviembre","diciembre",
  ];
  return `${parseInt(d)} de ${months[parseInt(m) - 1]} de ${y}`;
}

type OpenDateStepProps = {
  openDate: string | null;
  onChange: (date: string | null) => void;
  onSkip: () => void;
};

export function OpenDateStep({ openDate, onChange, onSkip }: OpenDateStepProps) {
  const [showCustom, setShowCustom] = useState(false);

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minIso = minDate.toISOString().split("T")[0];

  function handlePreset(years: number) {
    setShowCustom(false);
    onChange(addYears(years));
  }

  function handleNoDate() {
    setShowCustom(false);
    onChange(null);
  }

  return (
    <div>
      <h2 className="mb-2 font-display text-3xl text-walnut">¿Cuándo se abre?</h2>
      <p className="mb-8 text-sm text-muted">
        Puedes programar la apertura o dejarla libre.
      </p>

      <div className="flex flex-col gap-2">
        {/* No date option */}
        <button
          type="button"
          onClick={handleNoDate}
          className={`flex items-center gap-3 rounded-[12px] border px-4 py-3 text-left transition-all ${
            !openDate && !showCustom
              ? "border-ink bg-ink/5 text-ink"
              : "border-archive bg-card text-text/80 hover:border-ink/40"
          }`}
        >
          <span className="size-4 shrink-0 rounded-full border-[1.5px] border-current" />
          <span className="text-sm font-medium">Abrir cuando quiera</span>
        </button>

        {/* Presets */}
        {presets.map((p) => {
          const iso = addYears(p.years);
          const isSelected = openDate === iso && !showCustom;
          return (
            <button
              key={p.years}
              type="button"
              onClick={() => handlePreset(p.years)}
              className={`flex items-center gap-3 rounded-[12px] border px-4 py-3 text-left transition-all ${
                isSelected
                  ? "border-ink bg-ink/5 text-ink"
                  : "border-archive bg-card text-text/80 hover:border-ink/40"
              }`}
            >
              <span
                className={`size-4 shrink-0 rounded-full border-[1.5px] border-current ${isSelected ? "bg-ink" : ""}`}
              />
              <span className="text-sm font-medium">{p.label}</span>
              {isSelected && (
                <span className="ml-auto font-mono text-[11px] text-muted">
                  {formatDate(iso)}
                </span>
              )}
            </button>
          );
        })}

        {/* Custom date */}
        <button
          type="button"
          onClick={() => { setShowCustom(true); onChange(null); }}
          className={`flex items-center gap-3 rounded-[12px] border px-4 py-3 text-left transition-all ${
            showCustom
              ? "border-ink bg-ink/5 text-ink"
              : "border-archive bg-card text-text/80 hover:border-ink/40"
          }`}
        >
          <span
            className={`size-4 shrink-0 rounded-full border-[1.5px] border-current ${showCustom ? "bg-ink" : ""}`}
          />
          <span className="text-sm font-medium">Elegir fecha</span>
        </button>

        {showCustom && (
          <input
            type="date"
            min={minIso}
            value={openDate ?? ""}
            onChange={(e) => onChange(e.target.value || null)}
            className="mt-1 min-h-[44px] rounded-[8px] border-[1.5px] border-archive bg-card px-4 py-2 font-mono text-sm text-text focus:border-ink focus:outline-none focus:ring-4 focus:ring-ink/10"
          />
        )}

        {openDate && (
          <p className="mt-2 font-mono text-[12px] text-muted">
            La cápsula se abrirá el {formatDate(openDate)}.
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={onSkip}
        className="mt-6 text-sm text-muted underline underline-offset-4 hover:text-ink"
      >
        Saltar por ahora
      </button>
    </div>
  );
}

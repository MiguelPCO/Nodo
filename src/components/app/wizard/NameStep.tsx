import { useEffect, useRef } from "react";
import type { Occasion } from "@/lib/actions/capsule";

const suggestions: Record<Occasion, string> = {
  bebe: "Los primeros años de ",
  pareja: "Nuestra historia",
  abuelos: "El archivo de la familia",
  viaje: "El viaje a ",
  familia: "Nuestra familia",
  libre: "Mi cápsula",
};

type NameStepProps = {
  occasion: Occasion;
  name: string;
  onChange: (name: string) => void;
};

export function NameStep({ occasion, name, onChange }: NameStepProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  // Prefill suggestion on mount if empty
  useEffect(() => {
    if (!name) {
      onChange(suggestions[occasion]);
    }
    // Place cursor at end
    const el = inputRef.current;
    if (el) {
      el.focus();
      const len = el.value.length;
      el.setSelectionRange(len, len);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2 className="mb-2 font-display text-3xl text-walnut">Dale un nombre</h2>
      <p className="mb-8 text-sm text-muted">
        Puedes cambiarlo más adelante.
      </p>

      <div className="flex flex-col gap-2">
        <label htmlFor="capsule-name" className="text-sm font-medium text-text">
          Nombre de la cápsula
        </label>
        <input
          id="capsule-name"
          ref={inputRef}
          type="text"
          required
          maxLength={120}
          value={name}
          onChange={(e) => onChange(e.target.value)}
          placeholder={suggestions[occasion]}
          className="min-h-[56px] rounded-[8px] border-[1.5px] border-archive bg-card px-4 py-3 font-display text-2xl text-walnut placeholder:text-muted/60 focus:border-ink focus:outline-none focus:ring-4 focus:ring-ink/10"
        />
        <p className="text-right font-mono text-[11px] text-muted">
          {name.length}/120
        </p>
      </div>
    </div>
  );
}

"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createCapsule, type Occasion } from "@/lib/actions/capsule";
import { Button } from "@/components/ui/Button";
import { OccasionStep } from "./wizard/OccasionStep";
import { NameStep } from "./wizard/NameStep";
import { OpenDateStep } from "./wizard/OpenDateStep";
import { ReviewStep } from "./wizard/ReviewStep";

type Step = 1 | 2 | 3 | 4;

interface WizardState {
  step: Step;
  occasion: Occasion | null;
  name: string;
  openDate: string | null;
}

export function CreateCapsuleWizard() {
  const router = useRouter();
  const [state, setState] = useState<WizardState>({
    step: 1,
    occasion: null,
    name: "",
    openDate: null,
  });
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function goTo(step: Step) {
    setState((s) => ({ ...s, step }));
  }

  function canAdvance(): boolean {
    if (state.step === 1) return state.occasion !== null;
    if (state.step === 2) return state.name.trim().length > 0;
    return true;
  }

  function handleNext() {
    if (!canAdvance()) return;
    if (state.step < 4) goTo((state.step + 1) as Step);
  }

  function handleSubmit() {
    if (!state.occasion || !state.name.trim()) return;
    setError(null);
    startTransition(async () => {
      try {
        const result = await createCapsule({
          occasion: state.occasion!,
          name: state.name.trim(),
          openDate: state.openDate,
        });
        router.push(`/capsule/${result.id}`);
      } catch {
        setError("No se pudo crear la cápsula. Inténtalo de nuevo.");
      }
    });
  }

  return (
    <div className="mx-auto w-full max-w-[560px] px-5 py-10">
      {/* Progress */}
      <div className="mb-10 flex items-center gap-3">
        <p className="font-mono text-[11px] tracking-wider text-muted">
          PASO {state.step} DE 4
        </p>
        <div className="flex gap-1.5">
          {[1, 2, 3, 4].map((n) => (
            <span
              key={n}
              className={`h-1 rounded-full transition-all ${
                n === state.step
                  ? "w-5 bg-ink"
                  : n < state.step
                  ? "w-2 bg-ink/40"
                  : "w-2 bg-archive"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Step content */}
      <div className="min-h-[360px]">
        {state.step === 1 && (
          <OccasionStep
            selected={state.occasion}
            onSelect={(occasion) => setState((s) => ({ ...s, occasion }))}
          />
        )}
        {state.step === 2 && state.occasion && (
          <NameStep
            occasion={state.occasion}
            name={state.name}
            onChange={(name) => setState((s) => ({ ...s, name }))}
          />
        )}
        {state.step === 3 && (
          <OpenDateStep
            openDate={state.openDate}
            onChange={(openDate) => setState((s) => ({ ...s, openDate }))}
            onSkip={() => goTo(4)}
          />
        )}
        {state.step === 4 && state.occasion && (
          <ReviewStep
            occasion={state.occasion}
            name={state.name}
            openDate={state.openDate}
            isPending={isPending}
          />
        )}
      </div>

      {/* Error */}
      {error && (
        <p role="alert" className="mt-4 text-sm text-terracotta">
          {error}
        </p>
      )}

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">
        {state.step > 1 ? (
          <button
            type="button"
            onClick={() => goTo((state.step - 1) as Step)}
            className="text-sm text-muted underline underline-offset-4 hover:text-ink"
          >
            Volver
          </button>
        ) : (
          <span />
        )}

        {state.step < 4 ? (
          <Button
            onClick={handleNext}
            disabled={!canAdvance()}
          >
            Continuar
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={isPending || !state.occasion || !state.name.trim()}
          >
            {isPending ? "Creando…" : "Crear cápsula"}
          </Button>
        )}
      </div>
    </div>
  );
}

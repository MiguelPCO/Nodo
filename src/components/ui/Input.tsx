import type { ComponentPropsWithoutRef } from "react";

export function Input({
  label,
  id,
  helper,
  error,
  className = "",
  ...props
}: ComponentPropsWithoutRef<"input"> & {
  label: string;
  id: string;
  helper?: string;
  error?: string;
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={id} className="text-sm font-medium text-text">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : helper ? `${id}-helper` : undefined}
        className={`min-h-[44px] rounded-[8px] border-[1.5px] bg-card px-4 py-3 text-base text-text placeholder:text-muted focus:outline-none focus:ring-4 focus:ring-ink/10 ${
          error ? "border-terracotta" : "border-archive focus:border-ink"
        }`}
        {...props}
      />
      {error ? (
        <p id={`${id}-error`} className="text-sm text-terracotta">
          {error}
        </p>
      ) : helper ? (
        <p id={`${id}-helper`} className="text-sm text-muted">
          {helper}
        </p>
      ) : null}
    </div>
  );
}

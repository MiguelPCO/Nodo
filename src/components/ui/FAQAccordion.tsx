import type { Faq } from "@/lib/faqs";

// Accordion accesible con <details> nativo — sin JS de cliente.
export function FAQAccordion({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-archive border-y border-archive">
      {items.map((faq) => (
        <details key={faq.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 text-left [&::-webkit-details-marker]:hidden">
            <span className="type-h3 text-text">{faq.question}</span>
            <span
              aria-hidden="true"
              className="shrink-0 font-mono text-lg text-walnut transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 max-w-[65ch] leading-relaxed text-text/85">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}

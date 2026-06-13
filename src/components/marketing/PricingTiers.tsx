import { archiveTiers } from "@/lib/products";
import { ArchiveCard } from "@/components/ui/ArchiveCard";
import { PriceTag } from "@/components/ui/PriceTag";
import { Reveal } from "@/components/motion/Reveal";

export function PricingTiers() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {archiveTiers.map((tier, i) => (
        <Reveal key={tier.name} delay={i * 0.08}>
          <ArchiveCard
            className={`flex h-full flex-col ${
              tier.highlight ? "border-ink" : ""
            } ${tier.ceremony ? "border-gold" : ""}`}
          >
            <h3 className="type-h3 text-text">{tier.name}</h3>
            <div className="mt-3">
              <PriceTag amount={tier.price} period={tier.period} />
            </div>
            <ul className="mt-5 flex flex-1 flex-col gap-2.5">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-text/85">
                  <span
                    aria-hidden="true"
                    className={`mt-1.5 size-1.5 shrink-0 rounded-full ${
                      tier.ceremony ? "bg-gold" : "bg-sage"
                    }`}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            {tier.highlight && (
              <p className="type-mono-label mt-5 text-ink">El más elegido</p>
            )}
          </ArchiveCard>
        </Reveal>
      ))}
    </div>
  );
}

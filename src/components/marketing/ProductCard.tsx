import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { ArchiveCard } from "@/components/ui/ArchiveCard";
import { DateSeal } from "@/components/ui/DateSeal";
import { PriceTag } from "@/components/ui/PriceTag";

const imageFor: Record<string, string> = {
  "memory-box": "/img/30.png",
  "primeros-anos": "/img/31.png",
  legado: "/img/32.png",
  promesa: "/img/33.png",
};

export function ProductCard({ product }: { product: Product }) {
  const imgSrc = imageFor[product.slug] ?? "/img/30.png";
  const accentText =
    product.accent === "sage" ? "text-sage" : "text-terracotta";
  const available = product.phase === "mvp";

  return (
    <Link href={`/${product.slug}`} className="group block h-full">
      <ArchiveCard className="flex h-full flex-col">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[12px]">
          <Image
            src={imgSrc}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <span className="absolute left-3 top-3 z-10">
            <DateSeal>{product.sku}</DateSeal>
          </span>
          {!available && (
            <span className="absolute right-3 top-3 z-10 rounded-full border border-archive bg-card px-3 py-1 text-xs text-walnut">
              Lista de espera
            </span>
          )}
        </div>

        <div className="mt-5 flex flex-1 flex-col">
          <p className={`type-mono-label ${accentText}`}>{product.occasion}</p>
          <h3 className="type-h3 mt-1 text-text">{product.name}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-text/75">
            {product.tagline}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <PriceTag amount={product.price} />
            <span className="text-sm font-medium text-ink underline-offset-4 group-hover:underline">
              {available ? "Ver cápsula" : "Avísame"}
            </span>
          </div>
        </div>
      </ArchiveCard>
    </Link>
  );
}

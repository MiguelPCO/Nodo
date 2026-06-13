import Link from "next/link";
import { footerNav, site } from "@/lib/site";
import { DateSeal } from "@/components/ui/DateSeal";

export function Footer() {
  return (
    <footer className="bg-ink text-card">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-20">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <p className="font-display text-3xl tracking-[0.14em]">NODO</p>
            <p className="mt-3 font-display text-xl italic text-card/85">
              {site.claim}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-card/65">
              Cápsulas de memoria para conservar historias, voces, fotos y
              objetos que merecen volver.
            </p>
          </div>

          {footerNav.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <p className="type-mono-label text-card/55">{group.title}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-card/85 transition-colors hover:text-card"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-card/15 pt-6">
          <DateSeal tone="card">{site.sealCode}</DateSeal>
          <p className="text-xs text-card/55">
            © 2026 NODO · Hecho despacio en España
          </p>
        </div>
      </div>
    </footer>
  );
}

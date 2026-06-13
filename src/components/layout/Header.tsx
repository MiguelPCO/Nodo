"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNav } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-archive/70 bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-20">
        <Link
          href="/"
          className="font-display text-2xl tracking-[0.14em] text-ink"
          onClick={() => setOpen(false)}
        >
          NODO
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
          {mainNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b-2 pb-0.5 text-[15px] transition-colors ${
                  active
                    ? "border-ink font-medium text-ink"
                    : "border-transparent text-text/80 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/capsule/new">Crear cápsula</Button>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-[8px] border border-archive text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M3 5.5h14M3 10h14M3 14.5h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Principal móvil"
          className="border-t border-archive bg-paper px-5 pb-6 pt-3 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-[8px] px-3 py-3 text-base text-text hover:bg-card"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-3">
              <Button href="/capsule/new" onClick={() => setOpen(false)}>
                Crear cápsula
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

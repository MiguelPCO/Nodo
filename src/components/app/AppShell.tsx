"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "@/lib/actions/auth";

const nav = [
  {
    label: "Cápsulas",
    href: "/dashboard",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="9" cy="9" r="4.5" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
        <circle cx="9" cy="9" r="2" fill="currentColor" opacity="0.7" />
      </svg>
    ),
  },
  {
    label: "Timeline",
    href: "/timeline",
    disabled: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M4 9h10M9 4v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    label: "Personas",
    href: "/personas",
    disabled: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 16c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

type AppShellProps = {
  children: React.ReactNode;
  userEmail?: string;
};

export function AppShell({ children, userEmail }: AppShellProps) {
  const pathname = usePathname();
  const initial = userEmail?.[0]?.toUpperCase() ?? "?";

  return (
    <div className="flex min-h-screen">
      {/* Sidebar — desktop */}
      <aside className="hidden w-[240px] shrink-0 flex-col border-r border-archive bg-card md:flex">
        <div className="flex-1 px-4 py-6">
          <Link
            href="/dashboard"
            className="mb-8 block font-mono text-xs tracking-[0.5em] text-ink"
          >
            NODO
          </Link>

          <nav aria-label="Aplicación" className="flex flex-col gap-1">
            {nav.map((item) => {
              const active = !item.disabled && pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.disabled ? "#" : item.href}
                  aria-disabled={item.disabled}
                  tabIndex={item.disabled ? -1 : undefined}
                  className={`flex items-center gap-3 rounded-[8px] px-3 py-2.5 text-sm transition-colors ${
                    item.disabled
                      ? "cursor-default text-muted opacity-40"
                      : active
                      ? "bg-ink/8 font-medium text-ink"
                      : "text-text/80 hover:bg-paper hover:text-ink"
                  }`}
                >
                  {item.icon}
                  {item.label}
                  {item.disabled && (
                    <span className="ml-auto font-mono text-[10px] text-muted">V2</span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="border-t border-archive px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-xs text-card">
              {initial}
            </div>
            <p className="flex-1 truncate text-sm text-text/70">{userEmail}</p>
          </div>
          <form action={signOut} className="mt-3">
            <button
              type="submit"
              className="text-xs text-muted underline underline-offset-4 hover:text-terracotta"
            >
              Cerrar sesión
            </button>
          </form>
        </div>
      </aside>

      {/* Mobile bottom nav */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-archive bg-card md:hidden">
        <nav
          aria-label="Aplicación móvil"
          className="flex items-center justify-around px-2 py-2"
        >
          {nav.map((item) => {
            const active = !item.disabled && pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.disabled ? "#" : item.href}
                aria-disabled={item.disabled}
                className={`flex flex-col items-center gap-0.5 rounded-[8px] px-4 py-2 text-[11px] transition-colors ${
                  item.disabled
                    ? "cursor-default text-muted opacity-40"
                    : active
                    ? "text-ink"
                    : "text-text/70"
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto pb-20 md:pb-0">{children}</main>
    </div>
  );
}

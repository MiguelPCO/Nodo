import type { Metadata } from "next";
import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { getUser } from "@/lib/auth";
import { CapsuleCard } from "@/components/app/CapsuleCard";
import { EmptyState } from "@/components/app/EmptyState";
import type { Occasion } from "@/lib/actions/capsule";

export const metadata: Metadata = {
  title: "Tu archivo",
  robots: { index: false },
};

type CapsuleRow = {
  id: string;
  name: string;
  occasion: Occasion;
  open_date: string | null;
  status: "open" | "sealed";
};

export default async function DashboardPage() {
  const user = await getUser();
  const supabase = await createSupabaseServerClient();

  const { data: capsules } = await supabase
    .from("capsules")
    .select("id, name, occasion, open_date, status")
    .order("created_at", { ascending: false });

  const list = (capsules as CapsuleRow[] | null) ?? [];
  const firstName = user?.email?.split("@")[0] ?? "tu archivo";

  return (
    <div className="px-5 py-8 sm:px-8 lg:px-12">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <p className="font-mono text-[11px] tracking-wider text-muted">ARCHIVO NODO</p>
          <h1 className="mt-1 font-display text-3xl text-walnut">
            {list.length === 0 ? "Tu archivo empieza aquí." : `Hola, ${firstName}.`}
          </h1>
        </div>
        {list.length > 0 && (
          <Link
            href="/capsule/new"
            className="inline-flex min-h-[40px] items-center gap-2 rounded-[12px] bg-ink px-5 py-2 text-sm font-medium text-card transition-all hover:bg-ink/90 active:scale-[0.97]"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            Nueva cápsula
          </Link>
        )}
      </div>

      {list.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (
            <CapsuleCard
              key={c.id}
              id={c.id}
              name={c.name}
              occasion={c.occasion}
              openDate={c.open_date}
              status={c.status}
            />
          ))}
        </div>
      )}
    </div>
  );
}

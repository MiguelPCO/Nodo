import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Revisa tu correo",
  robots: { index: false },
};

export default function VerifyPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-5 py-16">
      <div className="w-full max-w-[400px] text-center">
        <div className="mx-auto mb-8 flex size-16 items-center justify-center rounded-full border border-archive bg-card">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect x="3" y="7" width="22" height="15" rx="2" stroke="#6B4E3D" strokeWidth="1.5" />
            <path d="M3 10l11 8 11-8" stroke="#6B4E3D" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <p className="font-mono text-xs tracking-[0.5em] text-muted">NODO</p>
        <h1 className="mt-4 font-display text-4xl text-walnut">Revisa tu correo</h1>
        <p className="mt-4 text-sm leading-relaxed text-text/80">
          Te hemos enviado un enlace de acceso. El enlace caduca en{" "}
          <strong className="text-text">10 minutos</strong>.
        </p>
        <p className="mt-6 text-sm text-muted">
          ¿No ha llegado?{" "}
          <Link href="/auth/login" className="text-ink underline underline-offset-4">
            Volver a intentarlo
          </Link>
        </p>
      </div>
    </div>
  );
}

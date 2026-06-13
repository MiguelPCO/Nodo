import type { Metadata } from "next";
import { LoginForm } from "@/components/app/LoginForm";

export const metadata: Metadata = {
  title: "Acceder",
  robots: { index: false },
};

export default function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-5 py-16">
      <div className="w-full max-w-[400px]">
        <div className="mb-10 text-center">
          <p className="font-mono text-xs tracking-[0.5em] text-muted">NODO</p>
          <h1 className="mt-4 font-display text-4xl text-walnut">Accede a tu archivo</h1>
          <p className="mt-3 text-sm text-muted">
            Te enviaremos un enlace mágico. Sin contraseña.
          </p>
        </div>
        <LoginForm searchParams={searchParams} />
      </div>
    </div>
  );
}

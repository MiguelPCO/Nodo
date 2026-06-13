"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseBrowser } from "@/lib/supabase-browser";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

type LoginFormProps = {
  searchParams: Promise<{ error?: string }>;
};

export function LoginForm({ searchParams }: LoginFormProps) {
  const params = use(searchParams);
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const router = useRouter();

  const errorMap: Record<string, string> = {
    missing_code: "El enlace no es válido. Solicita uno nuevo.",
    auth_failed: "No pudimos verificar el enlace. Inténtalo de nuevo.",
  };

  const paramError = params?.error ? (errorMap[params.error] ?? "Error de acceso.") : null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    setErrorMsg(null);

    const supabase = getSupabaseBrowser();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/api/auth/callback`,
        shouldCreateUser: true,
      },
    });

    if (error) {
      setState("error");
      setErrorMsg("No pudimos enviar el enlace. Comprueba el correo e inténtalo de nuevo.");
      return;
    }

    router.push("/auth/verify");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {(paramError || errorMsg) && (
        <p
          role="alert"
          className="rounded-[8px] border border-terracotta/30 bg-terracotta/5 px-4 py-3 text-sm text-terracotta"
        >
          {paramError ?? errorMsg}
        </p>
      )}

      <Input
        id="email"
        label="Correo electrónico"
        type="email"
        required
        autoComplete="email"
        autoFocus
        placeholder="tu@correo.es"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button type="submit" disabled={state === "loading" || !email}>
        {state === "loading" ? "Enviando…" : "Enviar enlace de acceso"}
      </Button>

      <p className="text-center text-xs text-muted">
        Al acceder aceptas nuestros{" "}
        <a href="/terminos" className="underline underline-offset-4 hover:text-ink">
          Términos
        </a>{" "}
        y{" "}
        <a href="/privacidad" className="underline underline-offset-4 hover:text-ink">
          Privacidad
        </a>
        . Solo mayores de 14 años.
      </p>
    </form>
  );
}

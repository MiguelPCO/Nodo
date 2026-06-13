import "server-only";

export interface WaitlistEntry {
  email: string;
  source: string;
}

/**
 * Provider de lista de espera.
 * - Con SUPABASE_URL + SUPABASE_SERVICE_KEY: INSERT vía REST (sin SDK).
 * - Sin credenciales: log y ok (modo demo/dev).
 * El filesystem de Vercel es read-only: nunca persistir a disco aquí.
 */
export async function saveWaitlistEntry(
  entry: WaitlistEntry
): Promise<{ ok: boolean; duplicate?: boolean }> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_KEY;

  if (!url || !key) {
    console.log("[waitlist:demo]", entry.source, entry.email);
    return { ok: true };
  }

  const res = await fetch(`${url}/rest/v1/waitlist`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ email: entry.email, source: entry.source }),
  });

  if (res.status === 409) {
    // email unique: ya estaba apuntado — lo tratamos como éxito.
    return { ok: true, duplicate: true };
  }

  return { ok: res.ok };
}

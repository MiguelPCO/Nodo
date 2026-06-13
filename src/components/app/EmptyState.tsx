import { CapsuleIllustration } from "@/components/illustrations";
import { Button } from "@/components/ui/Button";

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="mb-6 w-20 text-walnut opacity-40">
        <CapsuleIllustration />
      </div>
      <h2 className="font-display text-2xl text-walnut">
        Tu primera cápsula todavía está esperando nombre.
      </h2>
      <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
        Empieza con un recuerdo. No hace falta tenerlo todo.
      </p>
      <div className="mt-8">
        <Button href="/capsule/new">Crear cápsula</Button>
      </div>
    </div>
  );
}

import { Reveal } from "@/components/motion/Reveal";

const promises = [
  {
    title: "Privado por defecto",
    body: "Cada recuerdo nace privado. Compartir requiere una acción tuya, siempre. No hay feed, no hay perfiles públicos.",
  },
  {
    title: "QR que solo abre tu familia",
    body: "Códigos imposibles de adivinar, fuera de los buscadores, revocables cuando quieras. Heredan los permisos de su cápsula.",
  },
  {
    title: "Tus recuerdos son tuyos",
    body: "Conservas la propiedad de todo. Puedes exportarlo, descargarlo o borrarlo. Nunca entrenamos nada con tu memoria familiar.",
  },
];

export function PrivacyBlock() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {promises.map((p, i) => (
        <Reveal key={p.title} delay={i * 0.08}>
          <div className="border-l-2 border-sage pl-5">
            <h3 className="type-h3 text-card">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-card/75">{p.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

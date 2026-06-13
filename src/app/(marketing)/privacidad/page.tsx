import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { DateSeal } from "@/components/ui/DateSeal";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Cómo trata NODO tus datos: privacidad por defecto, mínimos datos necesarios, derechos RGPD y lista de espera.",
  alternates: { canonical: "/privacidad" },
  robots: { index: false },
};

export default function PrivacidadPage() {
  return (
    <Section band="paper">
      <Container variant="editorial">
        <DateSeal>Última actualización · Junio 2026</DateSeal>
        <h1 className="type-h1 mt-3 text-walnut">Política de privacidad</h1>

        <div className="prose-nodo mt-8 flex flex-col gap-6 leading-relaxed text-text/85">
          <p>
            En NODO la privacidad no es una página legal: es el producto. Tus
            recuerdos son privados por defecto y solo tú decides quién los ve.
            Esta política explica, en lenguaje claro, qué datos tratamos y por
            qué. <strong>Documento orientativo pendiente de revisión legal
            profesional antes del lanzamiento comercial.</strong>
          </p>

          <h2 className="type-h2 mt-4 text-walnut">Responsable</h2>
          <p>
            NODO (marca en constitución, España). Contacto:{" "}
            <a href="mailto:hola@nodo.app" className="text-ink underline underline-offset-2">
              hola@nodo.app
            </a>
            . Ámbito: España y Unión Europea (RGPD y LOPDGDD).
          </p>

          <h2 className="type-h2 mt-4 text-walnut">Lista de espera</h2>
          <p>
            Si te apuntas a la lista de espera tratamos tu email y la cápsula
            que te interesa, con tu consentimiento (art. 6.1.a RGPD), solo para
            avisarte del lanzamiento. No lo cedemos a terceros ni lo usamos
            para otra cosa. Puedes darte de baja con un clic en cualquier email
            o escribiéndonos; entonces lo eliminamos.
          </p>

          <h2 className="type-h2 mt-4 text-walnut">Tu archivo familiar (cuando exista tu cuenta)</h2>
          <ul className="ml-5 flex list-disc flex-col gap-2">
            <li>Recogemos los datos mínimos: email, nombre y lo que tú subas.</li>
            <li>Tus contenidos son tuyos; NODO solo los aloja y procesa para prestarte el servicio.</li>
            <li>Permisos cerrados por defecto: nada es público, nunca.</li>
            <li>Los QR son tokens aleatorios revocables, no indexables por buscadores.</li>
            <li>Edad mínima de cuenta: 14 años (LOPDGDD art. 7). Los menores solo aparecen como protagonistas de recuerdos subidos por sus tutores.</li>
            <li>Podrás exportar y eliminar todo: recuerdos, cápsulas, cuenta y QR.</li>
          </ul>

          <h2 className="type-h2 mt-4 text-walnut">Tus derechos</h2>
          <p>
            Acceso, rectificación, supresión, oposición, limitación y
            portabilidad: escríbenos y respondemos en un máximo de 30 días.
            También puedes reclamar ante la AEPD (aepd.es).
          </p>

          <h2 className="type-h2 mt-4 text-walnut">Si NODO cerrara</h2>
          <p>
            Compromiso de continuidad: ventana de exportación de 12 meses con
            aviso previo, y un índice descargable que mantiene tus QR legibles
            sin nuestros servidores.
          </p>
        </div>
      </Container>
    </Section>
  );
}

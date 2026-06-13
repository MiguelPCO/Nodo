export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "¿Qué es exactamente una cápsula NODO?",
    answer:
      "Una caja física de archivo con tarjetas guiadas, sobres de conservación y QR privados, conectada a un archivo digital donde guardas fotos, voces y notas. Lo físico y lo digital cuentan la misma historia: cada objeto puede llevar un QR que abre su recuerdo.",
  },
  {
    question: "¿Quién puede ver mis recuerdos?",
    answer:
      "Solo quien tú invites. Los recuerdos son privados por defecto: cada cápsula tiene sus permisos y los QR los heredan. No hay nada público, no hay feed, no hay perfiles abiertos. Compartir requiere siempre una acción explícita tuya.",
  },
  {
    question: "¿Cómo funcionan los QR privados?",
    answer:
      "Cada QR lleva un código aleatorio imposible de adivinar, no aparece en buscadores y puedes desactivarlo cuando quieras. Al escanearlo, solo las personas con permiso ven el recuerdo. Además, cada tarjeta lleva impreso su código en texto, legible aunque pasen años.",
  },
  {
    question: "¿Necesito la app para usar la caja?",
    answer:
      "No. La caja funciona sola: tarjetas, sobres y guía del ritual. El Archivo NODO añade la capa digital — voces, fotos, apertura programada — pero puedes empezar solo con papel y vincular lo digital más adelante.",
  },
  {
    question: "¿Qué pasa con mis recuerdos si NODO cierra?",
    answer:
      "Tus contenidos son tuyos. Podrás exportarlo todo (fotos, audios y un índice que mantiene los QR funcionando sin conexión), y nos comprometemos a una ventana de exportación de 12 meses con aviso previo. La caja física, además, no depende de ningún servidor.",
  },
  {
    question: "¿Puedo regalar una cápsula?",
    answer:
      "Sí — de hecho es el regalo que se abre dos veces: al recibirlo y en la fecha de apertura que la familia programe. Puedes añadir una nota de regalo y quien lo recibe activa su archivo digital con el código incluido en la caja.",
  },
  {
    question: "¿Cuánto se tarda en montar una cápsula?",
    answer:
      "Empezar, diez minutos: un recuerdo, una tarjeta, por qué importa. Completarla, lo que tú quieras — la guía propone elegir entre 5 y 12 recuerdos. No hace falta tenerlo todo: una cápsula empieza con un solo recuerdo.",
  },
  {
    question: "¿Hacéis envíos fuera de España?",
    answer:
      "De momento enviamos a España peninsular y Baleares (entrega en 48–72 h). Estamos preparando el resto de la UE: déjanos tu email en la lista de espera y te avisamos.",
  },
];

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Convierte `*texto*` en énfasis tipográfico (cursiva serif). Escapa el resto. */
export const emph = (s: string) => escape(s).replace(/\*(.+?)\*/g, '<em>$1</em>');

/** Texto plano, sin marcas de énfasis (para metadatos). */
export const plain = (s: string) => s.replace(/\*/g, '');

export const pad = (n: number) => String(n).padStart(2, '0');

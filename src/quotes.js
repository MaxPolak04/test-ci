// Czysta logika aplikacji — bez zależności od DOM, łatwa do testowania.

export const QUOTES = [
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "Programs must be written for people to read.", author: "Harold Abelson" },
];

/** Indeks następnego cytatu (zawija się na początek). */
export function nextIndex(i, len = QUOTES.length) {
  return (i + 1) % len;
}

/** Indeks poprzedniego cytatu (zawija się na koniec). */
export function prevIndex(i, len = QUOTES.length) {
  return (i - 1 + len) % len;
}

/** Zwraca cytat dla dowolnego (także ujemnego) indeksu. */
export function getQuote(i) {
  const len = QUOTES.length;
  const safe = ((i % len) + len) % len;
  return QUOTES[safe];
}

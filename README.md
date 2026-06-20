# GitHub Actions — kod startowy dla studenta

To punkt wyjścia do zadań z PDF **„Podstawy GitHub Actions"**. Aplikacja jest
prostym frontendem zbudowanym na Vite (vanilla JS) z czystą logiką pokrytą
testami jednostkowymi (Vitest).

## Po co ta aplikacja?

Zadania **6, 7 i 10** wymagają działającej aplikacji npm ze skryptami
`build` i `test`. Skopiuj zawartość tego katalogu do swojego repozytorium
testowego i na niej buduj workflowy.

> Zadania **1–5, 8, 9** nie wymagają tej aplikacji — możesz je rozwiązywać
> nawet w pustym repozytorium.

## Skrypty

```bash
npm install        # instalacja zależności (generuje package-lock.json)
npm run dev        # serwer deweloperski (podgląd w przeglądarce)
npm run build      # produkcyjny build -> katalog dist/
npm test           # testy jednostkowe (Vitest)
```

## Struktura

```
.
├── index.html              # punkt wejściowy aplikacji
├── package.json            # skrypty: dev, build, test
├── vite.config.js          # konfiguracja Vite + Vitest
├── src/
│   ├── main.js             # renderowanie UI (DOM)
│   ├── quotes.js           # czysta logika (testowalna bez DOM)
│   └── quotes.test.js      # testy jednostkowe
└── docs/
    └── README.md           # do testu filtra paths-ignore (Zadanie 2)
```

## Co masz zrobić sam

Workflowy GitHub Actions (katalog `.github/workflows/`) **przygotowujesz
samodzielnie** zgodnie z poleceniami z PDF. Ten katalog ich nie zawiera —
to jest właśnie Twoje zadanie.

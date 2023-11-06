# Semi

## Spis treści

1. Ogólne wprowadzenie
   1. Język CSS
   2. BEM
   3. Atomowy CSS
   3. CSS w JS
2.
3.
5.
6. Narzędzia
   1. Język JavaScript
   2. React
   3. Środowisko Node.js
   4. Chromatic
7. 
8. 

Links:

- [site](https://semi-beta.vercel.app)
- [storybook](https://master--646fb66e81a5f96d644f011a.chromatic.com)
- [library](https://www.chromatic.com/library?appId=646fb66e81a5f96d644f011a&branch=master)

## Funkcje

Wstęp do najczęściej wykorzystywanych funkcji języka css:

- selektory
- pseudo-selektory
- nadpisywanie stylów
- style warunkowe (media query)
- czcionki
- zmienne
- animacje

Przykłady wykorzystania powyższych funkcji:

- obsługa urządzeń o różnych rozdzielczościach
- zmiana motywów
- zmiana układu zależnie od języka
- normalizacja stylów

Styled-components:

- czym jest CSS in js
- dziedziczenie stylów

Tailwindcss:

- Jak działa kompilacja jit
- tworzenie własnych pluginów

CSS i konwencja "blok element modyfikator"

Visual testing

## Taillwindcss

zalety:

- umożliwa szybkie pisanie stylów dzięki domyślnie wbudowanym pluginom
- style są nakładane w html co pozwala uniknąc problemów z nazewnictwem klas css, kolokacją i importem plików css, gromadzeniem się nieużywanych stylów.

wady:

- brak kontroli co do kolejności generowanych stylów `hover:y` `disabled:x` `disabled:hover:x`
- nadpisywanie stylów jest utrudnione

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

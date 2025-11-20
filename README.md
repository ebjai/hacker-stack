# Hacker Stack — Lead Hacker + Funnel Hacker Demo

This is a Next.js App Router project that powers the **Hacker Stack // AI Operations Console** demo.

- `/` — landing page + live Lead Hacker console
- `/api/hacker-diagnostic` — API route that calls OpenAI using `OPENAI_API_KEY`

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Environment

Set this before `npm run dev` or in your hosting panel:

- `OPENAI_API_KEY` — your key for the OpenAI API (gpt‑4.1‑mini or higher)

# Simone Stella — Portfolio

Personal portfolio built with **Next.js 15**, **TypeScript**, and **Tailwind CSS v4**.

## Stack

- **Framework**: Next.js 15 (static export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Fonts**: Geist (self-hosted via `next/font`)
- **Contact form**: Web3Forms
- **i18n**: Italian / English (custom lightweight provider)

## Getting started

```bash
npm install
npm run dev
```

## Build & export

```bash
npm run build
```

The output is a fully static site in `/out`, ready for any static host (GitHub Pages, Vercel, Netlify, etc.).

## Environment variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_BASE_PATH` | Base path for GitHub Pages deployment (e.g. `/portfolio`) |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Web3Forms access key for the contact form |

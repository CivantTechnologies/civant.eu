# Civant Marketing Site (Next.js)

This repository contains the Civant marketing website built on Next.js App Router.

## Primary local workflow

- `npm run marketing:dev`
- `npm run marketing:build`
- `npm run marketing:typecheck`
- `npm run marketing:start`

## Legacy workflow (transition only)

The legacy Vite app remains in the repo for transition safety:

- `npm run legacy:dev`
- `npm run legacy:build`

## SEO planning docs

- `docs/seo/search-intent-map.md`
- `docs/seo/page-architecture.md`

## Git identity guard (required)

This repo enforces a single commit identity:

- Name: `David Manrique`
- Email: `258097577+CivantTechnologies@users.noreply.github.com`

One-time local setup:

```bash
git config --global user.name "David Manrique"
git config --global user.email "258097577+CivantTechnologies@users.noreply.github.com"
git config --global user.useConfigOnly true
npm run setup:hooks
```

Pre-commit and pre-push hooks block commits/pushes if identity is wrong or if `gh` is logged into a different account.

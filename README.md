# Civant Marketing Site (Next.js)

This repository contains the Civant marketing website built on Next.js App Router.

## Runtime and security

Use Node **24.22.1 or a newer patched 24.x release** and npm 11 or newer. The
checked-in `.nvmrc` selects the reviewed runtime; CI uses that same file.

```bash
nvm install
nvm use
npm ci
npm run security:check
npm test
npm run lint
npm run typecheck
npm run build
```

`security:check` verifies the Node version and fails on any npm vulnerability,
including development dependencies. No advisory exceptions are configured.
`npm ci` also enforces the supported Node range through `.npmrc`.

**Deployment is on hold.** Follow the [24 October security release record](docs/security/2026-10-24-release-hold.md)
for the remaining provider-runtime and hosted-candidate checks. Local test,
lint, type, build and vulnerability checks pass. Vercel automatic production
promotion is disabled, and GitHub `main` requires the `quality` check with no
bypass. Local `vercel.json` also disables automatic Git deployments and runs
security, test and type checks before the marketing build. The current
production deployment is unchanged. Publication of the security branch and a
draft pull request is authorized only for CI verification with Git deployments
disabled. Do not merge, deploy or promote while the hold remains.
Production `NEXT_PUBLIC_SITE_URL` is verified
as `https://civant.eu` for future production builds.

The approved Upstash Ireland service is connected only to production, with a
verified $20 monthly hard cap. The provider rejected $5 as below its minimum;
the user approved $20 before it was saved. Managed Redis REST validation passed,
including concurrent limits, expiry, authentication and synthetic-key cleanup.
Candidate signing checks passed with the existing key preserved. All three
authorized test emails were accepted by the provider and received in the inbox,
with SPF, aligned Civant DKIM and DMARC passing for each. Vercel Security accepted
the runtime inquiry; its response and patch completion confirmation remain pending.
The Vercel `quality` Deployment Check is configured, with automatic promotion
still disabled. Its behavior during promotion remains untested under the hold.

For the shared limiter, the Vercel Upstash integration supplies server-only
`KV_REST_API_URL` and `KV_REST_API_TOKEN` and keeps them synchronized. The app
uses that pair only when both custom `RATE_LIMIT_REDIS_REST_URL` and
`RATE_LIMIT_REDIS_REST_TOKEN` settings are absent. Defining either custom
setting selects the custom pair; missing or empty values fail closed without
mixing credentials or falling back. Any Redis setting, including a partial
pair, disables the optional local-memory limiter. Never expose these credentials
through `NEXT_PUBLIC_` variables.

Additional local checks, after building:

- `npm run lighthouse:ci` runs the six-page quality gate with Chrome.
- Start the production server on loopback, then run
  `node scripts/security-browser-smoke.mjs http://127.0.0.1:3100`.
  This uses an isolated Chrome profile, blocks external requests and form sends,
  and checks rendering, interactions and CSP enforcement.
- `node scripts/verify-redis-limiter.mjs` requires Docker. It checks the exact
  limiter Lua against temporary Redis with synthetic data, no published ports,
  no persistent volumes and verified cleanup. It does not test the managed
  production Redis service.

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

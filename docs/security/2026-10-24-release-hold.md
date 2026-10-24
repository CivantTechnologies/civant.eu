# Security changes and release hold, 24 October 2026

**Status: local checks pass and release protections are active; deployment remains on hold.**

Scope is the Civant marketing website, `civant-investment-website-main`.
The candidate branch is `codex/security-patches-20261024`, based on current
production source `76fc884893174f3a4f649a7eca8a08c168abc5a4`. Existing local work
was preserved. No deployment was performed. The user subsequently authorized
branch publication and a draft pull request for the remaining CI checks, with
automatic Git deployments disabled and the production hold retained. The three authorized test
emails were accepted by the provider and received in the inbox with passing
SPF, aligned Civant DKIM and DMARC results.
Authorized changes disabled Vercel automatic production promotion, added a
GitHub quality ruleset, and connected an Upstash Redis service in Ireland to
production only. The current production deployment and source remain unchanged.
The provider rejected the proposed $5 budget as below its $20 minimum; the user
then approved $20, which was saved and verified as the monthly hard cap.

Goal: remove known dependency findings, require a patched build runtime, and
close the application findings before considering release. Risk: **Medium**,
because native image libraries and server-side form handling changed.
Application database tables/functions affected: **none**. Migration: **none**.
The Redis connection, managed credential installation and validation against
the actual Redis REST service are verified.

## Changes prepared

| Area | Change |
|---|---|
| Node | `.nvmrc` selects 24.22.1; engines permit patched 24.x only; strict installation and explicit runtime checks protect tests/builds/security checks |
| Application dependencies | Next 15.5.28, sharp 0.35.5 and PostCSS 8.5.31; compatible dependency updates retained in the lockfile |
| Legacy and audit tooling | React Router 7.18.4, Puppeteer Core 25.16.0, Chromium 153, Node 24 types; scoped transitive overrides below |
| Unused dependencies | Removed direct jspdf, html2canvas, moment, lodash, zod and the unused prerenderer Puppeteer adapter after scanning marketing and legacy sources |
| Form APIs | Strict field/type/length validation, origin checks, uncompressed JSON only, streamed 16 KiB body cap and five-second body timeout |
| Mail abuse | Shared atomic rate limiter with a combined 100-request global, 5-client and 3-recipient allowance per ten minutes; HMAC-obscured client/recipient keys, expiry, no keys added for rejected requests |
| Failure behavior | Missing mail/limiter/signing configuration fails closed; provider errors/timeouts cannot claim success; serverless production has no memory-only limiter fallback |
| Report tokens | Dedicated signing secret, safe signature-length comparison, canonical encoding checks, bounded lifetime and payload validation; malformed links receive controlled errors |
| Browser policy | Enforced CSP, blocked inline event handlers/eval/frames, local asset sources and a narrowly allowed checkout API; restrictive attachment policy and no-referrer report downloads |
| CI | Both workflows read `.nvmrc` and run the vulnerability gate; weekly npm and Actions Dependabot checks |
| GitHub release gate | Active ruleset `25782603` requires an up-to-date `quality` result from GitHub Actions app `15368` on `main`, with no bypass actors; existing review and branch rules were preserved |
| Deployment hold | Vercel `autoAssignCustomDomains` is verified false; local `vercel.json` disables automatic Git deployments and runs security, test and type checks before the marketing build |

PHP files, Composer dependencies and a PHP serving runtime were not identified
in the reviewed website. PHP advisories therefore produced no applicable patch
in this repository. External Civant services remain outside this website review.

## Transitive override rationale

These overrides are explicit, not audit exceptions. Full and production npm
audits both report zero findings after a clean installation.

- PostCSS uses the reviewed direct version across the tree.
- LHCI uses UUID 11.1.1, the compatible CommonJS line, and tmp 0.2.7.
- external-editor also uses tmp 0.2.7.
- Lighthouse uses the reviewed direct Puppeteer Core 25.16.0. The normal LHCI
  navigation workflow is validated; no custom Puppeteer script is configured.
- get-uri uses basic-ftp 6.2.3. Its existing passive-transfer API is compatible;
  the newer protection against separate transfer hosts remains enabled.
- Only Tailwind's selector parser moves to 7.1.7, avoiding a Tailwind major
  upgrade. Actual repository CSS and five selector fixtures were byte-identical
  under the prior and updated parsers. The earlier 6.1.5 was already patched
  upstream, but npm's advisory range had not incorporated that backport. This
  scoped update resolves the registry finding without suppressing it or claiming
  the backport was vulnerable. See the [maintainer advisory](https://github.com/postcss/postcss-selector-parser/security/advisories/GHSA-rj75-hqrm-r3gf).

## Release verification and remaining conditions

1. **Vercel runtime patch assurance.** The production project selects Node 24.x,
   but that setting does not prove its serving patch level. Vercel's
   [24 October bulletin](https://vercel.com/kb/bulletin/node-js-security-advisory)
   still states that patched runtimes are being rolled out. Obtain explicit
   completion/coverage confirmation for this project's managed functions,
   builds and relevant image-processing service. Node 24.22.1 is the minimum
   reviewed patched 24.x release. The WAF does not cover responses fetched by
   functions and cannot substitute for runtime confirmation. No public diagnostic
   endpoint should expose versions or secrets just to perform this check.
   The initial support chat declined case creation. The dedicated Security form
   subsequently accepted the approved CVE/advisory inquiry at 13:45 UTC, with
   replies directed to the authenticated account. The local receipt proves
   submission, not patch coverage. A substantive response remains pending.
2. **Managed Redis validation passed.** An Upstash Ireland
   PAYG resource was provisioned after explicit user acceptance of its terms.
   The user-approved $20 monthly hard cap is saved and verified through provider
   readback and its success confirmation. The provider states that the database
   stops at the cap. Production-only connection `spc_To8eMVBZDcrTv5ZO` and the
   installation of five provider variables are verified; no preview or development
   environment was connected and no deployment was created. The integration
   supplies and keeps synchronized the server-only `KV_REST_API_URL` and
   `KV_REST_API_TOKEN` pair. The URL must be an HTTPS
   origin. The candidate uses this pair only when both custom settings,
   `RATE_LIMIT_REDIS_REST_URL` and `RATE_LIMIT_REDIS_REST_TOKEN`, are absent.
   Defining either custom setting selects only that pair, and missing or empty
   values fail closed. Credentials are never mixed between pairs or read from
   `NEXT_PUBLIC_` variables.
   The service must support JSON-array Redis REST commands and atomic `EVAL`
   with `GET`, `INCR`, `PEXPIRE` and `PTTL`, with access to the scoped keys.
   Actual HTTPS certificate validation and invalid-credential rejection passed.
   Concurrent synthetic requests admitted exactly 3 per recipient, 5 per client
   and 100 globally, with rejected requests creating no new client/recipient
   keys. TTL expiry and scoped synthetic-key cleanup passed. Outage and malformed
   reply behavior is covered by local fail-closed tests; the service was not
   deliberately exhausted or disabled. Redis errors, including budget exhaustion,
   must continue to fail closed. The existing production deployment is unchanged.
3. **Verify ingress and origin configuration.** Confirm Vercel overwrites
   `x-vercel-forwarded-for` at ingress and that client limits group as intended.
   The handler trusts it only when `VERCEL=1`; otherwise clients share a safe
   fallback bucket. IPv6 clients are grouped by /64. Production
   `NEXT_PUBLIC_SITE_URL=https://civant.eu` is now configured and verified for
   future production builds; the existing deployment is unchanged. For an authorized
   preview, use its exact HTTPS origin. Other preview origins are rejected.
4. **Mail delivery and authentication verified.** The actual
   candidate passed signing and tamper-rejection checks using the configured
   key in memory. The key is at least 32 UTF-8 bytes, distinct from the mail
   credential and not a known development constant. Its raw bytes were retained
   to preserve existing links; no secret or generated token was printed or saved.
   Technical signing configuration is verified. Historical random-generation
   provenance is a recorded limitation, not a separate release blocker or a
   reason to rotate this key. Public MX, SPF, DKIM and DMARC
   records are consistent across authoritative and public resolvers. DMARC is
   monitoring-only. The Resend key is restricted to sending, so `GET /domains`
   returned `restricted_api_key`; that response does not verify sender status
   or delivery. The three user-authorized labelled messages were sent through
   the exact candidate using the production managed Redis pair. All three
   returned HTTP 200 with provider IDs. The candidate's local signed download
   returned 200 and a tampered token returned 403. Gmail metadata independently
   confirms all three messages in the `hello@civant.eu` inbox, with SPF, aligned
   Civant DKIM and DMARC passing for each. DMARC remains a monitoring policy.
   Verification did not retrieve message bodies or bearer links, so it does not
   claim inbox rendering or a live link click. No additional messages were sent.
5. **Complete release integration checks without lifting the hold early.**
   GitHub ruleset `25782603` now requires the exact `quality` check from GitHub
   Actions app `15368` on `main`, with strict freshness and no bypass actors.
   The unpublished candidate has not run in GitHub-hosted CI. Vercel automatic
   production aliasing is disabled and the current deployment is unchanged.
   A Vercel GitHub `quality` Deployment Check is now configured through the
   project-check API for production deployment aliases, with a 30-minute timeout.
   Readback confirmed its definition, the disabled automatic aliasing setting
   and unchanged production deployment. Actual evaluation and promotion blocking
   remain untested because no deployment is authorized. Do not enable aliasing
   or create a deployment just to exercise the check while blockers remain.
   Local `vercel.json` sets `git.deploymentEnabled: false`; this applies only
   to commits containing it and does not block manual deployments. Its build
   command runs `security:check`, `test`, `typecheck` and `marketing:build`.
   Before an authorized release, run GitHub checks on the exact candidate,
   repeat fresh full/production audits, inspect the artifact, and verify the
   final promotion gate. Branch publication and a draft PR are authorized for CI
   only. Do not merge, deploy or promote while the hold remains.

The limiter uses separate production/preview key namespaces. Local in-memory
mode is allowed only with `NODE_ENV=development` or `test`, no Vercel flags,
no custom or integration-managed Redis settings and explicit
`RATE_LIMIT_LOCAL_MEMORY=1`. Even an empty or partial Redis pair prevents this
fallback. It is bounded
and cannot be enabled as a production fallback. Global and recipient limits
bound abuse but do not establish visitor identity or eliminate deliberate
quota exhaustion; review real usage before adjusting them.

The CSP retains `unsafe-inline` for Next static hydration and style attributes.
It is a tested baseline, not a strict nonce/hash CSP or a guarantee against
every XSS path. Moving to nonces/hashes requires a separately validated rendering
change. No user-controlled XSS sink was demonstrated in this review.

## Verification and rollback

The local evidence pack is under `output/security-fixes-20261024/`. It records
the runtime source/checksum, clean install, all mandatory checks, npm audits,
browser checks, Lighthouse output and isolated Redis concurrency results.
Only record completed checks as passed; see `verification.md` for the final
results and limits. The follow-up pack at
`output/release-verification-20261024/` records verified promotion settings,
effective GitHub rules, the production origin, signing checks, mail DNS,
authenticated inbox receipt and provider-runtime findings.
Its `checks/summary.json` confirms `npm test`, `npm run lint`,
`npm run typecheck`, `npm run build` and `npm run security:check` all passed
under Node 24.22.1. GitHub-hosted CI has not run for this unpublished branch.

No database rollback or validation SQL applies. Before release, reverting
unpublished candidate changes restores the previous local source, but the old
dependency set must not be treated as an approved secure release. After any
future release, prefer a forward fix or a separately verified patched artifact.
The fail-closed behavior must not be bypassed to restore form availability.
Do not restore automatic production promotion while the hold is active.
The additive GitHub ruleset can be rolled back independently by its exact ID,
without replacing other rules. Redis is connected only to production and has
a verified $20 cap. Any authorized connection rollback must target the exact
connection and account for its integration-managed environment variables; do
not disable the limiter or introduce a production memory fallback.

Primary patch sources:

- [Node October security release](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases)
- [Node 24.22.1 release](https://nodejs.org/en/blog/release/v24.22.1/)
- [Next.js October security update](https://nextjs.org/blog/nextjs-security-update-october-14-2026)
- [Vercel runtime bulletin](https://vercel.com/kb/bulletin/node-js-security-advisory)
- [Next.js CSP guidance](https://nextjs.org/docs/app/guides/content-security-policy#without-nonces)
- [Vercel request headers](https://vercel.com/docs/headers/request-headers)
- [Redis REST protocol reference](https://upstash.com/docs/redis/features/restapi)

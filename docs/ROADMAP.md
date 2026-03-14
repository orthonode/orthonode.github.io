# orthonode.github.io — Roadmap

> Public website for Orthonode Infrastructure Labs. Deployed via GitHub Pages to orthonode.xyz.
> Static HTML/CSS/JS — no build system, no package manager.

---

## Phase 1 — Initial Site ✅ Complete

**What shipped:**
- [x] index.html — homepage with terminal/console aesthetic, Cloudflare Turnstile
- [x] sha.html — Stylus Hardware Anchor product page
- [x] oap.html — Orthonode Assurance Platform page
- [x] nexus.html — Nexus Protocol page with Cloudflare Turnstile
- [x] ton-sha.html — TON-SHA agent trust page
- [x] invariant.html — INVARIANT subnet page
- [x] tix-dao.html — TIX-DAO governance page
- [x] iotex-research.html — IoTeX forensic research paper
- [x] site-index.html — site index / research log
- [x] terms.html, privacy.html — legal pages
- [x] 404.html — custom error page
- [x] sitemap.xml, robots.txt, CNAME
- [x] SEO head block on every page (geo meta, OG, Twitter Card, ld+json, canonical)
- [x] CSS design system (terminal/monochrome, :root variables on every page)
- [x] Google Fonts CDN (Inter, JetBrains Mono, Space Grotesk)

**2026 Design System** (completed March 2026):
- [x] All pages migrated to Syne / DM Sans / IBM Plex Mono font stack
- [x] New color system: --void, --space, --plasma tokens across all pages
- [x] Status ticker added to homepage
- [x] Animated project cards with DotLend featured first
- [x] dotlend.html added (March 9, 2026) — Polkadot Solidity Hackathon 2026 project page
- [x] Localhost Turnstile bypass on index.html and nexus.html for local dev
- [x] DotLend data corrected: 13 contracts, 108 tests, 30-min ZK oracle, updated LendingPool address

---

## Phase 2 — Content Accuracy (Ongoing)

Keep product pages in sync with actual repo state after every significant push to any Type A repo.

### Tracked Items

| Page | Last Verified | Open Items |
|:-----|:-------------|:-----------|
| sha.html | 2026-03-06 | Confirm Phase 1 open items (cargo-fuzz docs, test vector artifacts) reflected |
| oap.html | — | Surface only README-documented content (PROPRIETARY/RESTRICTED) |
| nexus.html | — | Confirm Phase 1.4.0 (Cloudflare Zero Trust) reflected; ngrok deprecated |
| ton-sha.html | — | Confirm TON Testnet address and receipt spec (640-bit, SHA-256) |
| invariant.html | — | Type B SANDBOXED — no integration claim with nexus-core |
| tix-dao.html | — | Finance page is mock; Phase 3 KYD not yet implemented |
| iotex-research.html | 2026-03-06 | Grant amount corrected: $25,000 (was $49,000) |
| dotlend.html | 2026-03-09 | 13 contracts, 108 tests, 30-min ZK oracle; Type B SANDBOXED |

---

## Phase 3 — 2026 Design System Rollout ✅ Complete

**What shipped (March 2026):**
- [x] 2026 design system deployed across all pages (Syne/DM Sans/IBM Plex Mono, new color tokens)
- [x] DotLend integrated as newest and featured project on homepage
- [x] Twitter/X live feed embedded
- [x] Status ticker added to homepage
- [x] All product pages updated to new animated card pattern

---

## Phase 4 — Future Pages (Not Scheduled)

When Arhant decides to add new project pages:
- Each new page requires: sitemap.xml update + site-index.html update
- Canonical URL format must match existing pages
- SEO head block (OG, Twitter Card, ld+json, geo meta) required

---

## Immediate Open Items (from CLAUDE.md)

| Item | Status |
|:-----|:-------|
| example.html deletion is unstaged | Confirm with Arhant before next push |
| No local preview server documented | python3 -m http.server works — add to README if desired |
| sitemap.xml manual update easy to miss | Workflow note only |
| SHA grant amount $49,000 → $25,000 | Fixed in iotex-research.html (2026-03-06) — verify all pages |

---

## Decision Log

| Date | Decision |
|:-----|:---------|
| 2026-03-06 | SHA grant confirmed $25,000 — corrected in iotex-research.html |
| 2026-03-06 | ORTHONODE SYSTEMS™ .claude/ infrastructure written across all 8 repos |
| 2026-03-09 | DotLend page added (Polkadot Solidity Hackathon 2026) — Type B SANDBOXED |
| 2026-03-15 | Full site redesign — 2026 design system (Syne/DM Sans/IBM Plex Mono, --void/--space/--plasma tokens), DotLend featured, status ticker, Twitter feed |

---

*orthonode.github.io · ORTHONODE SYSTEMS™ · https://orthonode.xyz · Arhant Barmate*

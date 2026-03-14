# ORTHONODE_CONTEXT — orthonode.github.io

## Classification

| Property | Value |
|:---------|:------|
| Type | Type A — Core Infrastructure |
| Classification | PUBLIC |
| Live URL | https://orthonode.xyz |
| Deployment | GitHub Pages — push to main deploys automatically |

## Role in the Stack

orthonode.github.io is the **public web presence** for all Orthonode Infrastructure Labs projects. It is the canonical public record of:

- Project status and phase for every repo
- On-chain deployment addresses
- Research (IoTeX forensic paper)
- Legal (terms, privacy)

This site is updated after every significant push to any Type A repo. It does not run code — it describes code.

## Repo Type Map

| Repo | Type | Status on this site |
|:-----|:-----|:-------------------|
| Stylus-Hardware-Anchor | Type A | sha.html |
| ton-sha | Type A | ton-sha.html |
| oap | Type A (PROPRIETARY) | oap.html — surface README only |
| nexus-core | Type A | nexus.html |
| INVARIANT | Type B SANDBOXED | invariant.html |
| tix-dao | Type B SANDBOXED | tix-dao.html |
| dotlend | Type B SANDBOXED | dotlend.html |

## Known Deployment Addresses

| Project | Address | Network |
|:--------|:--------|:--------|
| SHA | 0xD661a1aB8CEFaaCd78F4B968670C3bC438415615 | Arbitrum Sepolia |
| TON-SHA | kQBVqAhPv_ANWm0hfjJdLnQmvvC8_rQ_NEryVX3uFOUF05OP | TON Testnet |
| SPL-Governance | GovER5Lthms3bLBqWub97yVrMmEogzX7xNjdXpPPCVZw | Solana Devnet |
| DotLend LendingPool (vDOT) | 0x34B22768B16262aD5b7fC23DD797D80791e4e7e6 | Polkadot Hub TestNet (Chain 420420417) |
| DotLend PriceOracle | 0x1282F6B59869a57Fd2a1D7a5BC8535bB7B15D173 | Polkadot Hub TestNet |
| DotLend CollateralVault (vDOT) | 0xF94eBe7F8d8F922B7FBBFb4BE080EB71a69415A2 | Polkadot Hub TestNet |
| DotLend SolvencyGateway | 0x199E3E7c1f1382bc389b495B927B0535B390Acd0 | Polkadot Hub TestNet |

## Key Constraints for Claude

- **No build step** — every HTML edit goes live on push
- **One page at a time** — content edits are never bundled
- **Grant amount**: SHA grant is $25,000 — $49,000 is wrong everywhere
- **oap.html**: surface only README-documented content — PROPRIETARY/RESTRICTED
- **INVARIANT / tix-dao pages**: Type B SANDBOXED — do not claim integration with Type A repos unless Arhant confirms
- **Turnstile sitekeys**: only public challenge keys in source — secret keys must never appear in HTML
- **dotlend.html**: Type B SANDBOXED — Polkadot Solidity Hackathon 2026 project. 13 contracts, 108 tests. No integration claim with Type A repos without Arhant decision.
- **Localhost Turnstile bypass**: index.html and nexus.html auto-bypass on localhost/127.0.0.1 — this is intentional for local dev, does NOT affect production
- **Never push**: Arhant pushes manually

## Update Triggers

This site should be reviewed for accuracy after:
- Any SHA deployment address change
- Any nexus-core phase advance
- Any tix-dao mainnet decision
- Any oap version bump (README-documented facts only)
- Any INVARIANT testnet address change

---
ORTHONODE SYSTEMS™ | Infrastructure Labs // Physical Verification Layer
https://orthonode.xyz | @OrthonodeSys | Arhant Barmate

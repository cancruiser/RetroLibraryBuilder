# 🎮 Retro Library Builder

![Retro Library Builder](banner.PNG)

### Preserve Once. Build Many.

**Retro Library Builder (RLB)** is a Windows desktop application for understanding, preserving and rebuilding retro-gaming ecosystems. It combines device intelligence, verified preservation, managed Library content, reusable knowledge and deployment workflows so decisions are based on evidence rather than guesswork.

> **RLB is currently in Beta.** Correctness, preservation integrity, truthful workflow state and safe device handling remain the priority.

## What RLB does today

RLB currently includes documented Beta workflows for:

- **Home Dashboard** — preserved ecosystems, Library snapshot, recommendations, recent activity, storage and background-task status.
- **Import Studio** — source-safe Select → Analyze → Review → Import → Verify workflow.
- **Review Center** — grouped exception/conflict decisions and incoming-vs-Library comparison.
- **Library Explorer** — managed games, systems, ROM variants, BIOS, saves, configuration and Library health.
- **Media Explorer** — preferred artwork/media, linked assets and missing-media review.
- **Device Inspector** — evidence-based device identity, storage/boot/firmware inspection and preservation state.
- **Verified Preservation** — reusable Library representation, device-specific retained content, cryptographic verification, resume and reconciliation.
- **Device Readiness** — identity, confidence, target knowledge and blocking-risk gates before deployment.
- **Knowledge Explorer** — device, platform, firmware, DTB, hardware and compatibility intelligence with source attribution.
- **Background Operations** — durable long-running task state so preservation and analysis are not tied only to the current screen.
- **Deployment** — staged firmware preparation, provisioning, native content routing, verification and frontend finalization for accepted targets.

See the live capability map:

**https://cancruiser.github.io/RetroLibraryBuilder/capabilities.html**

## Physically accepted SBC deployment tracks

RLB's current Raspberry Pi 3B+ deployment track has completed end-to-end physical acceptance for:

- **Batocera** — Accepted / Frozen
- **Recalbox** — Deployment accepted / frozen through **A4R8.4R2**
- **RetroPie** — Accepted / Frozen at **A4R9.7R10**
- **Lakka** — Accepted / Frozen at **A4R10.6R2**

Accepted build details:

**https://cancruiser.github.io/RetroLibraryBuilder/builds.html**

Deployment workflow:

**https://cancruiser.github.io/RetroLibraryBuilder/deployment.html**

## Why RLB exists

Original retro-device media can contain far more than ROM files: device-specific boot assets, board/display configuration, firmware, BIOS, artwork, saves, frontend metadata, user configuration and files unique to one hardware revision. Devices sold under the same product name may also use different boards, displays, DTBs or firmware requirements.

RLB is designed to answer four practical questions:

1. **What is it?** — Identify device, hardware, firmware and supporting evidence.
2. **What does it contain?** — Inventory games, BIOS, media, saves, configuration and device-specific content.
3. **Is it protected?** — Establish verified representation or retain content that cannot safely be represented elsewhere.
4. **Can it be rebuilt?** — Use preserved evidence, managed content and validated deployment knowledge to recreate the ecosystem.

## Core principles

- Evidence over assumptions.
- Preserve before modifying.
- Original sources are not renamed, moved or deleted by import workflows.
- Same filename or same size does not prove content identity.
- Cryptographic verification is used where identity matters.
- Device-specific evidence is not discarded merely because similar Library content exists.
- Analyze, Review/Preview, Apply, Verify and Complete are distinct workflow states.
- RLB respects the target firmware/frontend instead of arbitrarily choosing emulators for the user.

## Device Inspector

Device Inspector builds an evidence-based picture from available signals such as storage topology, boot files, firmware characteristics, DTB fingerprints, content organization and accumulated device knowledge. A label or generic operating-system file is not treated as sufficient proof of device identity.

## Preservation

Preservation distinguishes between:

- **Library representation** — verified reusable content that can support multiple devices and future builds.
- **Retained content** — verified content that remains associated with a specific preservation because an appropriate reusable representation was not established.

RLB also supports durable preservation state, interrupted-work resume and later retained-content reconciliation.

## Knowledge

Knowledge Explorer keeps device/platform intelligence separate from optional downloadable assets. RLB can accumulate hardware variants, firmware compatibility, DTBs, boot relationships, known issues, recommendations and source attribution for reuse in later decisions.

## Deployment

Deployment begins only after the required device/target knowledge is available. For accepted SBC tracks, RLB can prepare firmware, provision first boot, deploy ROM/BIOS/media/user content into firmware-native locations, verify deployed content and perform firmware-specific frontend finalization.

**Deployment acceptance is target-specific.** Accepted Raspberry Pi SBC workflows do not imply that handheld deployment is already accepted, and Recalbox deployment acceptance is separate from Recalbox source/import acceptance.

## Beta boundaries still being expanded

RLB is still under active development. Areas that remain broader Beta work include:

- handheld deployment acceptance;
- additional firmware/device coverage;
- complete source/import parity across all firmware layouts;
- deeper canonical ROM identification and archive-path parity before broader claims are made;
- continuing performance, UX and production-readiness hardening.

## Documentation

Live documentation:

**https://cancruiser.github.io/RetroLibraryBuilder/**

Key pages:

- [Current Capabilities](https://cancruiser.github.io/RetroLibraryBuilder/capabilities.html)
- [Getting Started](https://cancruiser.github.io/RetroLibraryBuilder/getting-started.html)
- [Workspaces](https://cancruiser.github.io/RetroLibraryBuilder/workspaces.html)
- [Preservation](https://cancruiser.github.io/RetroLibraryBuilder/preservation.html)
- [Knowledge](https://cancruiser.github.io/RetroLibraryBuilder/knowledge.html)
- [Deployment](https://cancruiser.github.io/RetroLibraryBuilder/deployment.html)
- [Accepted Builds](https://cancruiser.github.io/RetroLibraryBuilder/builds.html)
- [Guides](https://cancruiser.github.io/RetroLibraryBuilder/guides.html)

## Platform

RLB is currently developed as a Windows desktop application using .NET.

## Issues and feedback

RLB is still in Beta, so real-world testing and accurate problem reports are valuable. When reporting an issue, include the build/version, device, operation, expected result, actual result and screenshots or relevant error information where possible.

## Community

Discord: https://discord.gg/zCDA8evmyE

## ROM and content disclaimer

Retro Library Builder does **not** provide or distribute commercial ROM collections. Users are responsible for ensuring that their use, preservation and storage of software and media complies with applicable laws and licences.

## Source code

This repository is currently the **public project and documentation home for Retro Library Builder**. The current application source code is not published in this repository. A decision about future source availability and licensing has not yet been made.

---

**Know what you have. Protect what matters. Build with confidence.**

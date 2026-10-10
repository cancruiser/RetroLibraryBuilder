# 🎮 Retro Library Builder

![Retro Library Builder](banner.PNG)

### Preserve Once. Build Many.

**Retro Library Builder (RLB)** is a Windows desktop application for understanding, preserving and rebuilding retro-gaming ecosystems. It combines device intelligence, verified preservation, managed Library content, reusable knowledge and deployment workflows so decisions are based on evidence rather than guesswork.

> **RLB is currently in Beta.** Correctness, preservation integrity, truthful workflow state and safe device handling remain the priority.

## What RLB does today

RLB currently includes documented Beta workflows for:

- **Home Dashboard** — preserved ecosystems, Library snapshot, recommendations, recent activity, storage and background-task status.
- **Import Studio** — source-safe discovery → Analyze → Review → Import → Verify workflow.
- **Physical-device import expansion** — a selected local drive root can be correlated to readable sibling volumes on the same physical media; inaccessible partitions are warned, not silently counted.
- **Network import discovery** — bounded read-only discovery from RLB-known firmware profiles, prior proven network context and Windows remembered/connected SMB resources; no subnet sweep.
- **Review Center** — grouped exception/conflict decisions and incoming-vs-Library comparison.
- **Library Explorer** — managed games, systems, ROM variants, BIOS, saves, configuration and Library health.
- **Media Explorer** — preferred artwork/media, linked assets and missing-media review.
- **BIOS Manager** — BIOS, Kickstarts, boot ROMs, IPLs and support firmware with managed identity/verification knowledge and deployment integration.
- **Library Health** — missing artwork, multi-variant titles, unmatched media, verification work and repair routing.
- **Device Inspector** — evidence-based device identity, storage/boot/firmware inspection and preservation state.
- **Verified Preservation** — reusable Library representation, device-specific retained content, cryptographic verification, resume and reconciliation.
- **Device Readiness** — identity, confidence, target knowledge and blocking-risk gates before deployment.
- **Knowledge Explorer / Sources** — device, platform, firmware, DTB, hardware and compatibility intelligence with source attribution.
- **Background Operations** — durable long-running task state so preservation and analysis are not tied only to the current screen.
- **Deployment** — staged firmware preparation, provisioning, native content routing, verification and frontend finalization for accepted targets.

See the live capability map:

**https://cancruiser.github.io/RetroLibraryBuilder/capabilities.html**

## Physically accepted SBC deployment tracks

RLB's current Raspberry Pi 3B+ deployment track has completed end-to-end physical acceptance for:

- **Batocera** — Accepted / Frozen
- **Recalbox** — Accepted / Frozen
- **RetroPie** — Accepted / Frozen
- **Lakka** — Accepted / Frozen

Accepted build details:

**https://cancruiser.github.io/RetroLibraryBuilder/builds.html**

Deployment workflow:

**https://cancruiser.github.io/RetroLibraryBuilder/deployment.html**

## Current source/import expansion

The project continues to expand source and portability coverage while preserving the frozen physical-deployment baseline:

- **Physical-device import expansion** — readable sibling volumes on the same proven physical device can be analyzed together.
- **Network import discovery** — bounded read-only discovery of known network sources is available to Import Studio.
- **Lakka user-data portability parity** — native user-data shares such as `Savefiles`, `Savestates`, `Configfiles`, `Joypads`, `Remappings`, `Playlists` and `Services` retain their native share identity for safe same-firmware replay.

These are separate claims from physical-deployment acceptance. RLB does not assume that deployment acceptance automatically proves every source/import or cross-firmware portability path.

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

## Preservation

Preservation distinguishes between:

- **Library representation** — verified reusable content that can support multiple devices and future builds.
- **Retained content** — verified content that remains associated with a specific preservation because an appropriate reusable representation was not established.

RLB also supports durable preservation state, interrupted-work resume and later retained-content reconciliation.

## Deployment

Deployment begins only after the required device/target knowledge is available. For accepted SBC tracks, RLB can prepare firmware, provision first boot, deploy ROM/BIOS/media/user content into firmware-native locations, verify deployed content and perform firmware-specific frontend finalization.

**Deployment acceptance is target-specific.** Accepted Raspberry Pi SBC workflows do not imply that handheld deployment is already accepted.

## Beta boundaries still being expanded

RLB remains under active development. Broader Beta work includes:

- handheld deployment acceptance;
- additional firmware/device coverage;
- complete source/import parity across firmware layouts;
- deeper canonical ROM identification and equivalent results across every archive/source form before broader claims are made;
- continuing performance, UX and production-readiness hardening.

## Documentation

Live documentation:

**https://cancruiser.github.io/RetroLibraryBuilder/**

Key pages:

- [Current Capabilities](https://cancruiser.github.io/RetroLibraryBuilder/capabilities.html)
- [Workspaces](https://cancruiser.github.io/RetroLibraryBuilder/workspaces.html)
- [Home Dashboard](https://cancruiser.github.io/RetroLibraryBuilder/home-dashboard.html)
- [Import Studio](https://cancruiser.github.io/RetroLibraryBuilder/import.html)
- [BIOS Manager](https://cancruiser.github.io/RetroLibraryBuilder/bios-manager.html)
- [Library Health](https://cancruiser.github.io/RetroLibraryBuilder/library-health.html)
- [Preservation](https://cancruiser.github.io/RetroLibraryBuilder/preservation.html)
- [Knowledge](https://cancruiser.github.io/RetroLibraryBuilder/knowledge.html)
- [Deployment](https://cancruiser.github.io/RetroLibraryBuilder/deployment.html)
- [Accepted Builds](https://cancruiser.github.io/RetroLibraryBuilder/builds.html)
- [Guides](https://cancruiser.github.io/RetroLibraryBuilder/guides.html)

## Platform

RLB is currently developed as a Windows desktop application using .NET.

## Issues and feedback

RLB is still in Beta, so real-world testing and accurate problem reports are valuable. When reporting an issue, include the application version, device, operation, expected result, actual result and screenshots or relevant error information where possible.

## Community

Discord: https://discord.gg/zCDA8evmyE

## ROM and content disclaimer

Retro Library Builder does **not** provide or distribute commercial ROM collections. Users are responsible for ensuring that their use, preservation and storage of software and media complies with applicable laws and licences.

## Source code

This repository is currently the **public project and documentation home for Retro Library Builder**. The current application source code is not published in this repository. A decision about future source availability and licensing has not yet been made.

---

**Know what you have. Protect what matters. Build with confidence.**

<p align="center">
  <img src="banner.PNG" alt="ROM Consolidator Banner" width="100%">
</p>

# 🎮 Retro Library Builder

![Retro Library Builder](banner.PNG)

### Understand. Preserve. Rebuild.

**Retro Library Builder (RLB)** is a Windows desktop application designed to help owners of retro-gaming handhelds, SBC systems and removable-media gaming devices understand what they have, protect it, and prepare for safe rebuilding or deployment.

RLB goes beyond simply copying an SD card or organizing ROM files.

It brings together **device identification, preservation, content verification, reusable library management and device knowledge** so that decisions can be based on evidence rather than guesswork.

> **RLB is currently in Beta.**
> Correctness, preservation integrity and safe device handling are the primary development priorities.

---

## Why RLB Exists

Many retro handhelds ship with inexpensive or unreliable SD cards.

Replacing one sounds simple until you discover that the original media may contain:

* device-specific boot files;
* board or display configuration;
* firmware;
* ROM collections;
* BIOS files;
* artwork and media;
* saves;
* user configuration;
* frontend metadata;
* files unique to that particular device.

Different devices sold under similar names may also use different boards, displays, DTBs or firmware requirements.

A simple file copy or generic disk image doesn't answer the most important questions:

**What device is this?**

**What is actually important on the original media?**

**Has that content been safely represented somewhere else?**

**What must be retained specifically for this device?**

**What can safely be reused when building replacement media?**

RLB is being built to answer those questions.

---

# 🔍 Device Inspector

Device Inspector examines connected or mounted device media and builds an evidence-based picture of the device.

Depending on the available evidence, RLB can examine information such as:

* storage and partition layout;
* filesystem structure;
* boot files;
* DTB files and fingerprints;
* firmware characteristics;
* ROM and content organization;
* known hardware signatures;
* previously accumulated device knowledge.

RLB does not assume that a volume label, folder name or generic operating-system file proves the identity of a device.

When possible, identification is based on multiple pieces of evidence and the result is presented with the supporting information.

---

# 🛡️ Preservation

RLB preservation is more than copying the contents of an SD card into another folder.

The goal is to establish **verified protection** for the content discovered on a device.

RLB determines which content can be represented by verified reusable Library content and which content must remain associated with the individual preservation.

Preservation can include:

* device and storage topology;
* boot assets;
* device-specific files;
* ROM and game content;
* BIOS files;
* media and artwork;
* saves and configuration;
* files that cannot be represented elsewhere;
* verification evidence;
* preservation metadata.

Content equality is verified cryptographically where required.

RLB is designed around an important principle:

> **Never claim that content is protected simply because a file with the same name or size exists somewhere else.**

---

# 📚 The RLB Library

RLB maintains a reusable content Library independently from individual preserved devices.

When appropriate, verified content from a device can be represented by canonical Library content instead of creating unnecessary duplicate copies for every preservation.

This allows RLB to distinguish between:

### Library Content

Verified reusable content that may be shared across devices and future builds.

### Retained Content

Verified content that must remain associated with a specific preservation because an appropriate Library representation could not be established.

This distinction allows RLB to preserve the identity and unique content of a device without blindly duplicating everything it encounters.

---

# 🧠 Knowledge Explorer

Retro handheld identification can be surprisingly complicated.

The same product name can appear on devices with different boards, displays, firmware requirements or boot configurations.

Knowledge Explorer brings together RLB's accumulated information about:

* handheld devices;
* consoles and platforms;
* hardware variants;
* boards;
* firmware;
* DTBs;
* boot configurations;
* device relationships;
* known compatibility information;
* supporting reference material.

The goal is to turn information gathered while working with retro devices into reusable device intelligence.

---

# 💾 Deployment

Preservation answers:

**“How do I make sure I don't lose what I already have?”**

Deployment addresses the next problem:

**“How do I safely create replacement media for this device?”**

RLB's deployment system is intended to use known device identity, firmware compatibility, Library content and preserved device information to help prepare replacement storage without treating every handheld as an unknown generic SD card.

Deployment workflows are continuing to be hardened during Beta.

---

# 🔄 Background Operations

Large preservation and analysis operations can involve many thousands of files.

RLB performs long-running work through background operations so that users can continue to interact with the application while work progresses.

Preservation work also maintains durable state and evidence so that RLB can reason about what was completed rather than relying only on what was visible in the user interface at the time.

---

# 🧭 A Typical RLB Workflow

A common workflow begins with the original media from a retro handheld:

1. **Connect or insert the original media.**
2. **Inspect the device.**
3. **Review RLB's identification and supporting evidence.**
4. **Analyze the protection requirements.**
5. **Review what RLB intends to preserve or represent in the Library.**
6. **Run the selected preservation operation.**
7. **Allow RLB to verify the resulting protection.**
8. **Use the accumulated device knowledge when preparing replacement media.**

Detailed step-by-step guides will be published as the Beta workflows are finalized.

---

# 🔒 Designed Around Safe Handling

RLB development follows several conservative principles.

* Original content is treated as the authority.
* Preservation operations copy content rather than deleting originals.
* Identification must be supported by evidence.
* Same filename or same size does not automatically mean same content.
* Verification should be cryptographic where content identity matters.
* Device-specific information should not be discarded simply because similar Library content exists.
* Analysis should be distinguishable from operations that actually change or copy data.

---

# 🚧 Beta Status

RLB is under active development.

The application has evolved considerably from its original ROM-library-management origins and is currently being hardened around:

* device intelligence;
* preservation correctness;
* verification;
* performance;
* interruption safety;
* deployment;
* production readiness.

Some interfaces and workflows may continue to change while Beta validation is underway.

---

# 🖥️ Platform

RLB is currently developed as a Windows desktop application using .NET.

---

# 📖 Documentation

A complete RLB user site is being developed.

Planned documentation includes:

* What is RLB?
* Getting Started
* Device Inspector
* Preserving Your First Device
* Understanding Preservation
* RLB Library
* Knowledge Explorer
* Deployment
* Supported Devices
* Troubleshooting
* Terminology
* Frequently Asked Questions

---

# 🐞 Issues and Feedback

RLB is still in Beta, so real-world testing and accurate problem reports are valuable.

When reporting an issue, please include where possible:

* the RLB version/build;
* the device involved;
* what operation was being performed;
* what you expected to happen;
* what actually happened;
* screenshots or relevant error information.

---

# 💬 Community

Join the RLB Discord community:

https://discord.gg/zCDA8evmyE

---

# ⚠️ ROM and Content Disclaimer

Retro Library Builder does **not** provide or distribute commercial ROM collections.

RLB is designed to work with content and devices available to the user. Users are responsible for ensuring that their use, preservation and storage of software and media complies with applicable laws and licences.

---

# 📦 Source Code

This repository is currently the **public project and documentation home for Retro Library Builder**.

The RLB application source code is not currently published in this repository.

A decision about future source availability and licensing has not yet been made.

---

## Retro Library Builder

**Know what you have. Protect what matters. Build with confidence.**

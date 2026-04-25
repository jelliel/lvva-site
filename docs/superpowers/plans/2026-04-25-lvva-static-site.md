# LVVA Static Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static, responsive LVVA website with Roman Catholic visual identity, inter-religious comparison sections, downloadable dossiers, references, and contact.

**Architecture:** A no-build static site keeps the first version simple and easy to open locally or upload to any static host. HTML owns content, CSS owns the visual system, and a tiny JavaScript file enhances dossier search/filtering.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Markdown downloads.

---

### Task 1: Create Static Page Structure

**Files:**
- Create: `index.html`

- [x] **Step 1: Add semantic sections**

Create sections for hero, mission, traditions, dossiers, references, method, and contact.

- [x] **Step 2: Add accessible navigation**

Use anchor links, a skip link, and clear labels.

### Task 2: Create Visual System

**Files:**
- Create: `assets/css/styles.css`

- [x] **Step 1: Add tokens**

Define colors, spacing, typography, shadows, and responsive layout primitives.

- [x] **Step 2: Add Roman/patristic styling**

Use basilica-inspired hero treatment, arch motifs, stone/ivory surfaces, document cards, and readable dense sections.

### Task 3: Add Download Library Behavior

**Files:**
- Create: `assets/js/main.js`

- [x] **Step 1: Add filtering**

Filter dossier cards by text and tradition.

- [x] **Step 2: Add count feedback**

Update a visible result count and empty state.

### Task 4: Add Starter Dossiers

**Files:**
- Create: `dossiers/lvva-methode-comparaison.md`
- Create: `dossiers/catholicisme-romain-references.md`
- Create: `dossiers/islam-catholicisme-pistes.md`
- Create: `dossiers/protestantisme-catholicisme-pistes.md`
- Create: `dossiers/tradition-kamite-pistes.md`

- [x] **Step 1: Add downloadable Markdown files**

Each file contains a title, objective, source categories, and a working outline.

### Task 5: Verify Locally

**Files:**
- Read: all site files

- [ ] **Step 1: Start local static server**

Run: `python -m http.server 4173`

- [ ] **Step 2: Verify HTTP response**

Run: `Invoke-WebRequest -Uri http://localhost:4173`

- [ ] **Step 3: Verify links**

Run a local script to ensure every local `href` target exists.

- [ ] **Step 4: Inspect in browser**

Open `http://localhost:4173` in Chrome and visually check desktop and mobile layout.

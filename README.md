# PWA-Template

![Vite](https://img.shields.io/badge/Vite-PWA_Template-646CFF?logo=vite&logoColor=white)
![PWA Ready](https://img.shields.io/badge/PWA-Ready-5A0FC8)
![Minimal](https://img.shields.io/badge/Setup-Minimal-00C853)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

A minimal and production-oriented **Progressive Web App (PWA) template** built with **Vite**.

This repository is designed to provide a clean, working example of how to correctly set up a PWA without unnecessary complexity, unclear documentation, or hidden magic.

---

## ✨ Purpose

PWA setup in most tutorials is either overcomplicated or incomplete.

This template focuses on:

- Clear and minimal configuration
- Working PWA fundamentals out of the box
- Easy customization of icons, manifest, and themes
- No external PWA libraries or abstractions

---

## 🚀 Features

- ⚡ Built with **Vite**
- 📱 Fully configured **PWA manifest**
- 🌙 Light / dark theme support for icons
- 🍏 iOS-friendly icons and splash screen setup
- 🧩 Optimized favicon system (minimal file set)
- 🔌 Offline support with custom offline page
- 🎯 Clean structure — easy to extend or modify
- 🪶 No external PWA libraries or service worker frameworks

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/eugenevve/pwa-template.git
cd pwa-template
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## 📁 Project Structure

```
public/
  ├── favicons
  └── manifest.webmanifest

src/
  ├── components
  ├── hooks
  ├── pages
  ├── ui
  ├── utils
  ├── App.tsx
  ├── main.css
  └── main.tsx
```

---

## 📱 PWA Setup

This template includes a ready-to-use:

### Manifest

Configured via `manifest.webmanifest` in the `public` folder.

### Offline Support

A simple custom offline page is displayed when the user loses connection.

No service worker frameworks are used — everything is intentionally minimal.

---

## 🍏 Favicon & iOS Support

The template uses an optimized favicon strategy with minimal assets:

- `favicon-512-512.png` → light theme icon
- `favicon-180-180.png` → transparent iOS icon (iOS 18+ adaptive background)
- `favicon-32-32.png` → dark theme icon

### Theme support

- Light / dark adaptive icons
- Transparent iOS icon for system-aware backgrounds (iOS 18+)

---

## 🎨 Favicon Design Guide

Favicon variations in this project are based on the following design system:

👉 [https://www.figma.com/community/file/1380577671249157222/website-icon-generation?q_id=3def6b37-f218-4f34-b254-2b9d6d2ff335](https://www.figma.com/community/file/1380577671249157222/website-icon-generation?q_id=3def6b37-f218-4f34-b254-2b9d6d2ff335)

It demonstrates how to correctly adapt a single icon into multiple formats for:

- light theme
- dark theme
- transparent iOS adaptive icons

---

## 🍏 Splash Screens (iOS)

Splash screens are generated using an automated canvas-based generator.

For advanced customization or manual generation, you can use:

[https://progressier.com/pwa-icons-and-ios-splash-screen-generator](https://progressier.com/pwa-icons-and-ios-splash-screen-generator)

or inspect implementation inside this template.

---

## 🧠 Why this template exists

Most PWA guides online:

- are outdated
- use unnecessary libraries
- hide important configuration details
- don’t explain favicon / iOS behavior properly

This template solves that by providing a **working, minimal, and understandable baseline**.

---

## 📌 Notes

- PWA features work only in production builds
- Requires HTTPS in production environments
- Best tested on real devices (especially iOS Safari)

---

## 🤝 Contribution

If you find issues or improvements, feel free to open an issue or pull request.

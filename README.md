# Skandan Home Carre Clinic

A modern, high-performance, and responsive React web application for **Skandan Home Carre Clinic** (incorporated as *Skandan Home Carre Cclinic LLP*), a premier in-home healthcare and clinical nursing provider based in Hyderabad, India.

---

## Overview

Skandan Home Carre delivers hospital-grade healthcare directly to patient residences across Hyderabad and India. Services include skilled ICU bedside nursing, senior & geriatric care, physical therapy rehabilitation, doorstep diagnostic pathology collection, doctor-on-call consultations, pharmaceutical delivery, and vaccinations.

---

## Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Bundler & Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Native CSS3 with CSS Custom Properties (Design System tokens), Responsive Typography, and Dark Mode theme support

---

## Getting Started

### Prerequisites

- Node.js (v18.0 or higher recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```
Starts the local development server at `http://localhost:5173/`.

### Production Build

```bash
npm run build
```
Compiles and optimizes assets into the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```
Previews the production build locally.

---

## Environment Variables

Copy `.env.example` to `.env` for local configuration:

```bash
cp .env.example .env
```

| Variable | Description | Default |
| :--- | :--- | :--- |
| `VITE_SITE_URL` | Base application URL | `http://localhost:5173` |
| `VITE_ENABLE_ANALYTICS` | Enable analytics tracking | `false` |

---

## Project Structure

```text
SkandanSite/
├── public/                  # Static assets and favicon
│   └── assets/images/       # Public-facing images
├── src/
│   ├── assets/              # Component-imported images
│   ├── components/          # Reusable UI components (Navbar, Footer, Hero, Forms, etc.)
│   ├── context/             # React context providers (ThemeContext for Dark/Light mode)
│   ├── data/                # Centralized site, service, about, and event data models
│   ├── pages/               # Page route components
│   ├── styles/              # Global variables, typography, and responsive sheets
│   ├── App.jsx              # Main router configuration and layout wrapper
│   └── main.jsx             # React DOM root entry point
├── .env.example             # Environment variable template
├── .gitignore               # Git ignore configuration
├── package.json             # Project dependencies and npm scripts
├── vite.config.js           # Vite configuration
└── README.md                # Project documentation
```

---

## Key Features

- 🌓 **Professional Dark Mode**: Seamless theme toggle with system preference fallback and `localStorage` persistence.
- 📱 **Mobile-First Responsive Design**: Optimized from 375px mobile screens up to 1920px 4K displays.
- ⚡ **Lightweight & High Performance**: 0 heavy runtime animation dependencies; smooth native CSS transitions.
- 🩺 **Comprehensive Clinical Service Catalog**: 8 dedicated service pages, 6 About Us / Leadership subpages, Events, Careers, and Contact workflows.
- 💬 **WhatsApp Quick Connect**: Fixed bottom-right direct WhatsApp consultation trigger.
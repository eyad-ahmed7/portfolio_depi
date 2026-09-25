# Eyad El Bohy — Personal Portfolio & Engineering Journal

> Personal editorial portfolio website built for the **DEPI Freelancing Learning & Demo Project**.  
> Computer Engineering student at **Egypt University of Informatics (EUI)**.

---

## ⚡ Core Philosophy
> *"I like figuring things out."*  
A balance between **technology + curiosity + people + exploration**.

---

## 🛠️ Built With

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Plus Jakarta Sans, Instrument Serif, JetBrains Mono

---

## 📂 Project Architecture

```text
├── assets/             # Original photography, certificates & project captures
├── public/             # Static web assets served by Next.js
│   └── assets/         # Web-optimized assets and PDFs
├── src/
│   ├── app/
│   │   ├── globals.css # Design system tokens, grid backgrounds & fonts
│   │   ├── layout.tsx  # Root layout, metadata & OpenGraph tags
│   │   └── page.tsx    # Single-page editorial layout assembly
│   ├── components/     # Focused, accessible UI sections
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── StatementSection.tsx
│   │   ├── FeaturedProjectSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── OutdoorInterlude.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── FieldKitSection.tsx
│   │   ├── AchievementsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── CertificateModal.tsx
│   │   └── Footer.tsx
│   └── data/
│       └── portfolioData.ts # Centralized source of truth
├── tailwind.config.ts  # Custom colors & typography
└── tsconfig.json       # TypeScript configuration
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18.17+ or LTS)
- npm

### Installation & Run

```bash
# 1. Clone the repository
git clone https://github.com/eyad-ahmed7/portfolio_depi.git
cd portfolio_depi

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Visit http://localhost:3000
```

### Production Build

```bash
npm run build
npm run start
```

---

## 📬 Contact

- **Email**: [eyadar2007@gmail.com](mailto:eyadar2007@gmail.com)
- **GitHub**: [github.com/eyad-ahmed7](https://github.com/eyad-ahmed7)
- **Location**: Cairo, Egypt

---
© 2026 Eyad El Bohy. All rights reserved.

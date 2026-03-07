# Habeeba Faiza - Personal Branding Website

A world-class personal branding website for an International Education & Admissions Specialist, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🎯 Project Overview

This website showcases Habeeba Faiza's professional expertise in international higher education, university admissions, and student guidance. Built following principles from:

- **Building a StoryBrand** by Donald Miller
- **Don't Make Me Think** by Steve Krug  
- **Refactoring UI** by Adam Wathan
- **Known** by Mark Schaefer
- **Show Your Work** by Austin Kleon

## ✨ Features

- **Hero Section**: Clear professional positioning with value proposition
- **About**: Professional journey and mission
- **Achievements**: Metrics-driven accomplishments with quantified impact
- **Experience**: Structured career timeline with achievement-focused content
- **Expertise**: Comprehensive skills and capabilities showcase
- **Thought Leadership**: Industry insights and articles
- **Portfolio**: Case studies and project examples
- **Contact**: Professional networking call-to-action

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Deployment**: Vercel
- **Format**: Static Export (GitHub Pages compatible)

## 📦 Project Structure

```
habeeba-faiza-portfolio/
├── app/                      # Next.js app directory
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   │   ├── Section.tsx
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Achievements.tsx
│   ├── Experience.tsx
│   ├── Expertise.tsx
│   ├── ThoughtLeadership.tsx
│   ├── Portfolio.tsx
│   └── Contact.tsx
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

This creates an optimized static export in the `out/` directory.

## 🌐 Deployment

### Deploy to Vercel

1. Push code to GitHub repository
2. Import project in Vercel dashboard
3. Vercel will automatically detect Next.js and configure deployment
4. Deploy!

### Deploy to GitHub Pages

1. Build the project:
```bash
npm run build
```

2. The static files in `out/` directory can be deployed to GitHub Pages
3. Configure GitHub Pages to serve from the `gh-pages` branch or `docs` folder

## 🎨 Design System

### Colors

- **Primary**: Blue scale for accents and CTAs
- **Neutral**: Gray scale for text and backgrounds
- **Accent**: Used sparingly for highlights

### Typography

- **Font**: Inter (sans-serif)
- **Headings**: Bold, tight tracking
- **Body**: Regular weight, relaxed leading

### Components

- **Section**: Consistent spacing and layout
- **Container**: Max-width wrapper for content
- **Button**: Primary, secondary, and outline variants
- **Card**: Elevated surfaces with hover effects
- **MetricCard**: Quantified achievements display

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- All components fully responsive

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Focus indicators
- Color contrast compliance

## 🔍 SEO Optimization

- Metadata configuration
- Open Graph tags
- Semantic markup
- Fast loading performance
- Static generation for optimal SEO

## 📄 License

© 2026 Habeeba Faiza. All rights reserved.

## 📧 Contact

For questions or collaboration opportunities:

- **LinkedIn**: [linkedin.com/in/habeeba-faiza](https://linkedin.com/in/habeeba-faiza)
- **Email**: habeeba.faiza@education.com

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS

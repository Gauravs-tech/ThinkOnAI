# Aura - High-End Editorial AI

A pixel-perfect recreation of the "Digital Curator" Stitch design using React, Tailwind CSS, Framer Motion, and GSAP.

## Tech Stack
- React (TypeScript, Vite)
- Tailwind CSS
- Framer Motion
- GSAP & ScrollTrigger

## Setup Instructions
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:5173/` in your browser.

## Design Details
- **Creative North Star:** "The Digital Curator". A dark-mode first gallery aesthetic.
- **Tonal Layering:** The design eschews 1px solid borders (`"No-Line Rule"`) in favor of surface color shifts (`surface-container-lowest` to `surface-container-highest`) and glassmorphism.
- **Typography:** Display & Headline using `Manrope`, Body & Labels using `Inter`.
- **Animations:** Custom Framer Motion initial `Loader` sequence, smooth page transitions, and GSAP ScrollTrigger delays on feature cards and benefits.

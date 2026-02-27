# Heart @ Home - Mobile Vet Website

A modern, accessible landing page for Heart @ Home, a mobile veterinary service offering home visits for small animals and exotic pets in the Wrexham, Chester, and surrounding areas.

![Heart @ Home Logo](./assets/logo.png)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start dev server
npm run dev
```

The site will be available at `http://localhost:5173/heart-at-home/`

### Production Build

```bash
# Build for production
npm run build

# Preview the build
npm run preview
```

## 📧 Form Submission Setup (Formspree)

The registration form uses [Formspree](https://formspree.io/) for submissions.

### Setting up Formspree:

1. Create a free account at [formspree.io](https://formspree.io/)
2. Create a new form and copy your form endpoint
3. Create a `.env` file in the project root:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

4. Restart the dev server

**Fallback:** If no Formspree endpoint is configured, the form will fall back to opening the user's email client with a pre-filled message.

## 🌐 GitHub Pages Deployment

### Option 1: Manual Deployment

1. Update the `base` in `vite.config.ts` to match your repository name:

```ts
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
})
```

2. Build and deploy:

```bash
npm run deploy
```

### Option 2: GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
        env:
          VITE_FORMSPREE_ENDPOINT: ${{ secrets.FORMSPREE_ENDPOINT }}
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

Then:
1. Go to your repo Settings → Secrets and variables → Actions
2. Add `FORMSPREE_ENDPOINT` as a repository secret
3. Go to Settings → Pages → Set source to "GitHub Actions"

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx      # Sticky navigation
│   ├── Hero.tsx        # Main landing section
│   ├── Services.tsx    # Service cards
│   ├── ServiceArea.tsx # Coverage areas
│   ├── RegisterForm.tsx # Interest registration form
│   ├── Team.tsx        # Team members with lightbox
│   ├── FAQ.tsx         # Accordion FAQs
│   └── Footer.tsx      # Site footer
├── data/
│   ├── services.ts     # Services list
│   ├── areas.ts        # Coverage areas
│   ├── faqs.ts         # FAQ content
│   └── team.ts         # Team member info
├── hooks/
│   └── useInView.ts    # Intersection observer hook
├── styles/
│   └── globals.css     # Global styles & Tailwind
├── App.tsx
└── main.tsx
```

## 🎨 Customization

### Updating Content

- **Services:** Edit `src/data/services.ts`
- **Coverage Areas:** Edit `src/data/areas.ts`
- **FAQs:** Edit `src/data/faqs.ts`
- **Team Members:** Edit `src/data/team.ts`

### Adding Team Photos

1. Add photos to `/assets/team/` (e.g., `sandra.jpg`, `tim.jpg`, `michelle.jpg`)
2. Update `src/data/team.ts` to include photo paths:

```ts
{
  id: 'sandra',
  name: 'Sandra Sheils',
  role: 'Veterinary Surgeon',
  bio: '...',
  photo: './assets/team/sandra.jpg', // Add this
  initials: 'SS',
  color: 'primary',
}
```

3. Update the `Avatar` component in `src/components/Team.tsx` to render the photo

### Updating Colors

The color scheme is defined in `src/styles/globals.css`:

```css
:root {
  --color-background: #FDFDFC;
  --color-primary: #59A5AE;
  --color-accent: #DB6435;
  --color-secondary: #D7AF6E;
  --color-text: #322918;
  --color-muted: #8F8A6F;
  --color-deep: #38524B;
}
```

## ♿ Accessibility

- Semantic HTML landmarks
- ARIA labels where appropriate
- Large tap targets (48px minimum)
- High contrast ratios
- Keyboard navigation support
- Reduced motion support
- Focus indicators

## 📊 Lighthouse Targets

- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 📝 License

© 2024 Heart @ Home. All rights reserved.


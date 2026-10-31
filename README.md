# Sujal Pandey - Cloud & DevOps Portfolio

A modern, high-performance portfolio website engineered with **React 18**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

Inspired by the dark cyber-aesthetic of [neetesh-sahu.github.io](https://neetesh-sahu.github.io/), upgraded with fluid 3D interactions, live simulators, and interactive architectural showcases.

---

## ✨ Features & Architecture

- **🌌 Ambient Particle Constellation Mesh**: High-performance HTML5 canvas network reacting dynamically to mouse movement and theme accents.
- **🚀 Animated CI/CD Pipeline Simulator**: Interactive visual workflow showing `Source Code ➔ Lint & Test ➔ Docker Containerize ➔ IaC Terraform ➔ AWS Cloud Rollout` with live CloudWatch log streaming.
- **✨ Spotlight 3D Bento Grid**: Mouse-tracking radial glow and modular view for AWS & Serverless, Linux & Automation, Architecture & DevOps, and Software Systems.
- **💻 Interactive DevOps Terminal**: Real browser-based terminal simulator (`whoami`, `skills`, `aws s3 ls`, `certs`, `theme <color>`, `contact`, `clear`).
- **🎨 Dynamic Cyber Accent Palette**: Instant accent switcher supporting:
  - *Cyber Lime* (`#C6F432`)
  - *Quantum Mint* (`#5EE0C1`)
  - *Hyper Orange* (`#FF8A5B`)
  - *Glacier Blue* (`#9BB4FF`)
- **📜 Verified Credentials Showcase**: Integrated with Sujal's actual certifications (Infosys AWS Developer Associate, IBM Cloud Fundamentals, Forage AWS Solutions Architecture, ABESIT Linux & AWS, Infosys DBMS).
- **⚡ Instant Pre-filled Inquiry Dispatch**: Real-time pre-filled `mailto:` generator and one-click email copy button with clipboard confirmation.

---

## 🛠️ Quick Start

### 1. Run Development Server
```bash
cd sujal-portfolio
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```
Creates an optimized, compressed production build in `dist/`.

---

## 🚀 Free Deployment to GitHub Pages

To deploy this directly to your GitHub Pages (`https://sujal-pandey.github.io/` or similar):

1. In `vite.config.ts`, if your repository is named `portfolio`, set `base: '/portfolio/'` (or `base: '/'` if using `<username>.github.io`).
2. Run:
```bash
npm run build
```
3. Push the `dist` folder to your `gh-pages` branch, or use the standard GitHub Actions workflow for Vite:
```yaml
# .github/workflows/deploy.yml
name: Deploy Portfolio
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## ⚙️ Customizing Content

All your data (bio, skills, projects, certifications, links) is centralized in:
📂 [`src/data/portfolioData.ts`](./src/data/portfolioData.ts)

You can update your email, add new projects, or link newly earned AWS badges with ease.

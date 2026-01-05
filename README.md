<div align="center">

# 🚀 Arun Jawlia - Portfolio

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-3.14-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)

<p align="center">
  <strong>A modern, visually stunning, and fully responsive personal portfolio website</strong>
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-deployment">Deployment</a> •
  <a href="#-project-structure">Structure</a>
</p>

---

</div>

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 Design
- Clean, minimal & premium aesthetic
- White, black & green color palette
- Bold, modern typography
- Smooth micro-interactions
- Dark/Light theme toggle

</td>
<td width="50%">

### ⚡ Performance
- Blazing fast with Vite
- Optimized production builds
- Lazy loading images
- Smooth scroll animations
- Mobile-first responsive design

</td>
</tr>
<tr>
<td width="50%">

### 🎭 Animations
- GSAP-powered scroll effects
- Parallax backgrounds
- Hover micro-interactions
- Smooth page transitions
- Loading preloader

</td>
<td width="50%">

### 📱 Sections
- Hero with animated intro
- About Me
- Skills & Expertise
- Featured Projects
- Work Experience
- Testimonials
- Certificates Carousel
- Contact Form

</td>
</tr>
</table>

## 🛠 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18, TypeScript, Tailwind CSS |
| **Build Tool** | Vite |
| **Animations** | GSAP, Framer Motion |
| **UI Components** | shadcn/ui, Radix UI |
| **Routing** | React Router DOM |
| **Styling** | Tailwind CSS, CSS Variables |
| **Deployment** | Docker, Nginx, DigitalOcean |

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🐳 Docker Deployment

### Local Testing

```bash
# Build Docker image
docker build -t portfolio .

# Run container
docker run -p 8080:80 portfolio
```

### Deploy to DigitalOcean

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions including:
- DigitalOcean App Platform
- Droplet with Docker
- Container Registry

## 📁 Project Structure

```
src/
├── components/
│   ├── portfolio/        # Portfolio sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Certificates.tsx
│   │   ├── Contact.tsx
│   │   ├── GitHub.tsx
│   │   └── ...
│   └── ui/               # Reusable UI components
├── lib/
│   ├── data.ts           # Centralized content data
│   └── utils.ts          # Utility functions
├── pages/
│   ├── Index.tsx         # Home page
│   └── Projects.tsx      # Projects page
└── index.css             # Global styles & design tokens
```

## 🎨 Customization

### Update Content

All portfolio content is managed in `src/lib/data.ts`:

```typescript
// Update your personal info
export const personalInfo = {
  name: "Your Name",
  role: "Your Role",
  // ...
};

// Update projects, experience, skills, etc.
```

### Modify Theme

Design tokens are defined in `src/index.css`:

```css
:root {
  --primary: 142 76% 36%;      /* Green accent */
  --background: 0 0% 100%;     /* White background */
  --foreground: 0 0% 3.9%;     /* Dark text */
}
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ by Arun Jawlia**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yourprofile)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yourprofile)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://yourportfolio.com)

</div>

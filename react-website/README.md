# Rung Labs React Website

A lightweight React landing page for Rung Labs, converted from Next.js to reduce cloud hosting costs.

## Features

- Modern React with TypeScript
- Vite for fast development and builds
- React Router for client-side routing
- Tailwind CSS for styling
- 3D particle animation using React Three Fiber
- Responsive design
- All visual elements preserved from the original Next.js site

## Getting Started

### Install Dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
# or
pnpm build
# or
yarn build
```

The built files will be in the `dist` directory, ready for static hosting.

### Preview Production Build

```bash
npm run preview
# or
pnpm preview
# or
yarn preview
```

## Deployment

This is a static site that can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your repo and it will auto-detect Vite
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **Cloudflare Pages**: Connect repo and set build command to `npm run build`
- **AWS S3 + CloudFront**: Upload `dist` folder to S3 bucket

## Project Structure

```
react-website/
├── src/
│   ├── components/      # React components
│   │   ├── gl/         # 3D particle system
│   │   └── ui/         # UI components
│   ├── pages/          # Page components
│   ├── lib/            # Utilities
│   ├── App.tsx         # Main app with routing
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
├── index.html          # HTML template
└── vite.config.ts      # Vite configuration
```

## Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **React Three Fiber** - 3D graphics
- **Three.js** - 3D library
- **Radix UI** - Accessible UI primitives



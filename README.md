# Cyberglow Portfolio

A modern, cybersecurity-themed portfolio website built with React, Three.js, and Tailwind CSS. This portfolio features sleek 3D animations, holographic stats displays, and a futuristic cyberpunk design.

![Cyberglow Portfolio Preview](public/preview.png)

## Features

- 🌐 Interactive 3D background with Three.js
- 🔮 Holographic statistics display
- 🎨 Cyberpunk-inspired UI with glitch effects
- 💻 Responsive design for all devices
- ⚡ Fast performance with Vite
- 🔧 TypeScript for type safety
- 🎭 Smooth animations with Framer Motion
- 🔒 Cybersecurity themed components

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cyberglow-portfolio.git
cd cyberglow-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

## Customization

### Personal Information

Edit the following files to customize your personal information:

- `src/pages/Home.tsx` - Main homepage content, services, and about sections
- `src/components/Layout.tsx` - Footer information
- `src/components/Navbar.tsx` - Navigation links

### Theme Colors

The theme colors are defined in the `src/index.css` file. You can modify the following CSS variables to match your personal brand:

```css
:root {
  --cyber-primary: 155, 135, 245;      /* #9b87f5 - Main purple */
  --cyber-secondary: 49, 10, 93;       /* #310a5d - Dark purple */
  --cyber-accent: 0, 255, 196;         /* #00ffc4 - Cyan accent */
  --cyber-red: 255, 65, 84;            /* #ff4154 - Red accent */
  --background: 18, 18, 18;            /* #121212 - Background black */
}
```

### 3D Background

The 3D background is created using Three.js and can be customized in the `src/components/CyberGrid.tsx` file. You can modify the grid size, colors, and animation properties.

### Stats and Services

- Update the statistics in `src/components/HolographicStats.tsx`
- Modify services in the `services` array in `src/pages/Home.tsx`

## Project Structure

```
cyberglow-portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions and libraries
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Application entry point
├── index.html           # HTML template
└── package.json         # Project dependencies and scripts
```

## Building for Production

To build the site for production, run:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist/` directory.

## Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Three.js](https://threejs.org/)
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [FontAwesome](https://fontawesome.com/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from modern cybersecurity websites
- Three.js examples and documentation
- React Three Fiber community

---

Made with ❤️ by [Your Name]

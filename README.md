# Bouquet Animation TypeScript Project

A beautiful animated flower bouquet created with TypeScript, CSS animations, and modern web technologies.

## 🌸 Features

- **TypeScript**: Type-safe JavaScript for better development experience
- **Customizable Text**: Easy message customization ("Flowers for Thazin" by default)
- **CSS Animations**: Smooth, performance-optimized flower animations
- **Responsive Design**: Works on desktop and mobile devices
- **Interactive Elements**: Click on flowers for interactive animations
- **Code Quality**: Biome linting and formatting for consistent code style
- **Modern Build System**: TypeScript compilation with source maps

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Alfred-ZMK28.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

1. **Build the TypeScript code:**
   ```bash
   npm run build
   ```

2. **Watch for changes during development:**
   ```bash
   npm run dev
   ```

3. **Serve the application:**
   ```bash
   npm run serve
   ```

4. **Build and serve in one command:**
   ```bash
   npm start
   ```

## 📁 Project Structure

```
├── src/
│   ├── main.ts          # Main TypeScript entry point
│   └── styles/
│       └── style.css    # CSS animations and styles
├── dist/
│   ├── index.html       # Production HTML file
│   └── *.js            # Compiled JavaScript (generated)
├── package.json         # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── README.md          # This file
```

## 🎨 Customization

### Modifying Animations

- Edit `src/styles/style.css` to customize flower animations, colors, and timing
- Modify `src/main.ts` to add new interactive features or change behavior

### Adding New Features

The TypeScript architecture allows easy extension:

1. Create new classes in the `src/` directory
2. Import them in `main.ts`
3. Build with `npm run build`

## 🛠 Development Commands

| Command | Description |
|---------|-------------|
| `npm run build` | Lint, compile TypeScript, and copy assets |
| `npm run dev` | Watch for changes and auto-compile |
| `npm run serve` | Serve the dist folder on localhost:3000 |
| `npm start` | Build and serve the application |
| `npm run lint` | Check code quality with Biome |
| `npm run lint:fix` | Auto-fix linting and formatting issues |
| `npm run format` | Format code with Biome |
| `npm run clean` | Remove compiled files |

## 🎨 Customization

You can easily customize the message displayed with the flowers:

### Simple Text Change:
```typescript
// Change the message in the browser console
flowerController.updateBouquetText({
  message: 'Flowers for [Your Name]',
  showAnimation: true
});
```

The default message is "Flowers for Thazin" but you can change it to any message you'd like!

## 🌐 Deployment

### GitHub Pages

1. Build the project:
   ```bash
   npm run build
   ```

2. Commit and push the `dist/` folder contents to your repository

3. Configure GitHub Pages to serve from the root directory or `dist/` folder

### Other Hosting

The `dist/` folder contains all files needed for deployment. Simply upload the contents to any web server.

## 🎯 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Project Link: [https://github.com/Alfred-ZMK28/Alfred-ZMK28.github.io](https://github.com/Alfred-ZMK28/Alfred-ZMK28.github.io)
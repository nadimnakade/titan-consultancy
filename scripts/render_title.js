import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';

// Neon glow title in the style of the provided example
const width = 2000;
const height = 350;

const text = 'Welcome to Titan Consultancy';
const fontSize = 112;
const fontWeight = 700;

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="optimizeLegibility">
  <defs>
    <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#86F7FF"/>
      <stop offset="45%" stop-color="#BB64FF"/>
      <stop offset="100%" stop-color="#FF7A00"/>
    </linearGradient>

    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0cf"/>
      <stop offset="50%" stop-color="#a3f"/>
      <stop offset="100%" stop-color="#f70"/>
    </linearGradient>

    <filter id="blur20" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="20"/>
    </filter>
    <filter id="blur40" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="40"/>
    </filter>
    <filter id="blur70" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="70"/>
    </filter>
    <filter id="textShadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.25"/>
    </filter>
  </defs>

  <rect width="100%" height="100%" fill="#000000"/>

  <g transform="translate(${width / 2}, ${Math.round(height/2 + fontSize*0.35)})">
    <text text-anchor="middle" fill="url(#glowGradient)" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif" font-size="${fontSize}" font-weight="${fontWeight}" letter-spacing="0.5" filter="url(#blur40)">${text}</text>
    <text text-anchor="middle" fill="url(#glowGradient)" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif" font-size="${fontSize}" font-weight="${fontWeight}" letter-spacing="0.5" filter="url(#blur20)" opacity="0.9">${text}</text>
    <text text-anchor="middle" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif" font-size="${fontSize}" font-weight="${fontWeight}" letter-spacing="0.5" filter="url(#textShadow)" stroke="url(#glowGradient)" stroke-width="1.2" stroke-opacity="0.35">${text}</text>
  </g>
</svg>`;

const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: width },
  font: {
    loadSystemFonts: true,
    defaultFontFamily: 'Arial',
  },
  background: 'transparent',
});

const pngData = resvg.render();
const pngBuffer = pngData.asPng();

const outPath = fileURLToPath(new URL('../public/title_titan.png', import.meta.url));
writeFileSync(outPath, pngBuffer);
console.log(`Generated: ${outPath}`);
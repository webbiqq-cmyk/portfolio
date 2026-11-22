// Converts source images into web-ready WebP at fixed sizes.
// Usage: node scripts/optimize-images.mjs <input> <output.webp> <width> [height]
// Example: node scripts/optimize-images.mjs ~/shots/dental.png public/images/projects/dental-lab-1.webp 1600
import sharp from "sharp";

const [input, output, w, h] = process.argv.slice(2);
if (!input || !output || !w) {
  console.error("Usage: node scripts/optimize-images.mjs <input> <output.webp> <width> [height]");
  process.exit(1);
}
const info = await sharp(input)
  .resize({ width: Number(w), height: h ? Number(h) : undefined, fit: "cover", position: "top" })
  .webp({ quality: 80 })
  .toFile(output);
console.log(`${output}: ${info.width}x${info.height}, ${(info.size / 1024).toFixed(1)} KB`);

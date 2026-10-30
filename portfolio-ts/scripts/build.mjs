// Tiny build helper: copies everything in /public (HTML, CSS, images) into /dist.
// TypeScript output goes to dist/js via `tsc`.
import { cpSync, rmSync, mkdirSync } from "node:fs";

const mode = process.argv[2];

if (mode === "clean") {
  rmSync("dist", { recursive: true, force: true });
} else if (mode === "copy") {
  mkdirSync("dist", { recursive: true });
  cpSync("public", "dist", { recursive: true });
  console.log("Copied public/ -> dist/");
} else {
  console.error("Usage: node scripts/build.mjs <clean|copy>");
  process.exit(1);
}

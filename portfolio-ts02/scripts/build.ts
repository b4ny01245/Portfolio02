// Build helper written in TypeScript.
// Copies everything in /public (HTML, CSS, images) into /dist.
// The site's own TypeScript is compiled to dist/js by `tsc`.
import { cpSync, mkdirSync, rmSync } from "node:fs";

type Mode = "clean" | "copy";

function run(mode: string | undefined): void {
    switch (mode as Mode | undefined) {
        case "clean":
            rmSync("dist", { recursive: true, force: true });
            break;
        case "copy":
            mkdirSync("dist", { recursive: true });
            cpSync("public", "dist", { recursive: true });
            console.log("Copied public/ -> dist/");
            break;
        default:
            console.error("Usage: node .build/build.js <clean|copy>");
            process.exit(1);
    }
}

run(process.argv[2]);

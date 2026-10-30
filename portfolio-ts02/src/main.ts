import { byId } from "./dom.js";
import { renderApp } from "./render.js";
import { initMobileMenu } from "./menu.js";
import { initHeaderScroll } from "./header.js";
import { initContactForm } from "./contactForm.js";

function init(): void {
    const root = byId("app");
    if (!root) {
        console.error("Missing #app element.");
        return;
    }

    // 1. Render all content from src/data.ts
    renderApp(root);

    // 2. Wire up behaviour
    const menu = initMobileMenu();
    initHeaderScroll(menu);
    initContactForm();

    // 3. If the page was opened with a #section link, jump there now that it exists
    if (location.hash) {
        document.getElementById(location.hash.slice(1))?.scrollIntoView();
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}

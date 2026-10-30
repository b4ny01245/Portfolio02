import { initMobileMenu } from "./menu.js";
import { initHeaderScroll } from "./header.js";
import { initContactForm } from "./contactForm.js";

function init(): void {
    const menu = initMobileMenu();
    initHeaderScroll(menu);
    initContactForm();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}

import { byId } from "./dom.js";
import type { MobileMenu } from "./menu.js";

const HIDE_AFTER_PX = 100;

/** Hides the header while scrolling down, shows it again when scrolling up. */
export function initHeaderScroll(menu: MobileMenu | null): void {
    const header = byId("header");
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener(
        "scroll",
        () => {
            const current = window.scrollY;
            const scrollingDown = current > lastScroll && current > HIDE_AFTER_PX;

            header.classList.toggle("header-hidden", scrollingDown);

            // Also close the mobile menu when the header slides away
            if (scrollingDown && menu?.isOpen()) {
                menu.close();
            }

            lastScroll = current;
        },
        { passive: true }
    );
}

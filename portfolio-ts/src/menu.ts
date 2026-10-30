import { byId } from "./dom.js";

const OPEN_LABEL = "Open navigation menu";
const CLOSE_LABEL = "Close navigation menu";

export interface MobileMenu {
    isOpen(): boolean;
    close(): void;
}

/** Mobile hamburger menu: toggle, close on link click, close on outside click. */
export function initMobileMenu(): MobileMenu | null {
    const toggle = byId("menuToggle", HTMLButtonElement);
    const navigation = byId("navigation");
    if (!toggle || !navigation) return null;

    const setOpen = (open: boolean): void => {
        navigation.classList.toggle("active", open);
        toggle.classList.toggle("active", open);
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? CLOSE_LABEL : OPEN_LABEL);
    };

    const isOpen = (): boolean => navigation.classList.contains("active");

    toggle.addEventListener("click", () => setOpen(!isOpen()));

    navigation
        .querySelectorAll<HTMLAnchorElement>("a")
        .forEach((link) => link.addEventListener("click", () => setOpen(false)));

    document.addEventListener("click", (event: MouseEvent) => {
        const target = event.target;
        if (
            isOpen() &&
            target instanceof Node &&
            !navigation.contains(target) &&
            !toggle.contains(target)
        ) {
            setOpen(false);
        }
    });

    return { isOpen, close: () => setOpen(false) };
}

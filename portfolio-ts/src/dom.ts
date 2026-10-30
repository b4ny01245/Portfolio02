/**
 * Typed DOM helpers.
 * They return `null` instead of throwing, so a missing element
 * never breaks the rest of the page.
 */

export function byId<T extends HTMLElement = HTMLElement>(
    id: string,
    type?: new () => T
): T | null {
    const el = document.getElementById(id);
    if (!el) return null;
    if (type && !(el instanceof type)) {
        console.warn(`#${id} exists but is not a ${type.name}.`);
        return null;
    }
    return el as T;
}

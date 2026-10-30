/**
 * Tiny typed element builder (a mini "hyperscript").
 *   h("a", { class: "btn", href: "#" }, "Click me")
 */

export type Child = Node | string | null | undefined | false;
export type Attrs = Record<string, string | boolean | null | undefined>;

export function h<K extends keyof HTMLElementTagNameMap>(
    tag: K,
    attrs: Attrs = {},
    ...children: Child[]
): HTMLElementTagNameMap[K] {
    const el = document.createElement(tag);

    for (const [key, value] of Object.entries(attrs)) {
        if (value === false || value === null || value === undefined) continue;
        el.setAttribute(key, value === true ? "" : value);
    }

    append(el, children);
    return el;
}

export function append(parent: Node, children: Child[]): void {
    for (const child of children) {
        if (child === null || child === undefined || child === false) continue;
        parent.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
    }
}

export function br(): HTMLBRElement {
    return document.createElement("br");
}

/** Link that opens in a new tab safely when the URL is external. */
export function link(href: string, attrs: Attrs, ...children: Child[]): HTMLAnchorElement {
    const external = /^https?:\/\//.test(href);
    return h(
        "a",
        {
            ...attrs,
            href,
            target: external ? "_blank" : null,
            rel: external ? "noopener noreferrer" : null,
        },
        ...children
    );
}

const SVG_NS = "http://www.w3.org/2000/svg";

/** 24x24 filled SVG icon from a single path. */
export function icon(pathData: string): SVGSVGElement {
    const svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("width", "18");
    svg.setAttribute("height", "18");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("fill", "currentColor");

    const path = document.createElementNS(SVG_NS, "path");
    path.setAttribute("d", pathData);
    svg.appendChild(path);
    return svg;
}

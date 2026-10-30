import { h, link } from "../h.js";
import { profile } from "../data.js";

export function renderFooter(): HTMLElement {
    return h(
        "footer",
        {},
        h("img", { src: profile.avatar, alt: profile.name }),
        h("p", {}, profile.name),
        h("p", {}, profile.tagline),
        h("p", {}, link(profile.github.url, {}, "GitHub"), " \u00A0·\u00A0 ", link("#home", {}, "Back to Top")),
        h("p", {}, `© ${profile.copyrightYear} ${profile.name}. All rights reserved.`)
    );
}

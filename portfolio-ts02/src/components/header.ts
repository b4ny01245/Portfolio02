import { h, link } from "../h.js";
import { nav, profile } from "../data.js";

export function renderHeader(): HTMLElement {
    return h(
        "header",
        { id: "header" },
        h(
            "div",
            { class: "head" },
            h("img", { src: profile.avatar, alt: profile.name }),
            h("strong", {}, profile.name.toUpperCase()),
            h(
                "nav",
                { id: "navigation" },
                ...nav.map((item) => link(`#${item.id}`, {}, item.label))
            ),
            h(
                "button",
                {
                    class: "menu-toggle",
                    id: "menuToggle",
                    type: "button",
                    "aria-label": "Open navigation menu",
                    "aria-expanded": "false",
                },
                h("span"),
                h("span"),
                h("span")
            )
        )
    );
}

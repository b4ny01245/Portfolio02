import { h, icon, link } from "../h.js";
import { profile } from "../data.js";
import { GITHUB_PATH, LINKEDIN_PATH } from "../icons.js";

export function renderHero(): HTMLElement {
    return h(
        "section",
        { class: "hero", id: "home" },
        h("img", { src: profile.heroImage, alt: profile.name }),
        h(
            "div",
            { class: "hero-info" },
            h("h1", {}, "Hello, I'm ", h("br"), `${profile.name}.`),
            h(
                "p",
                { class: "hero-role" },
                `${profile.role} `,
                h("span", { class: "hero-sep" }, "/"),
                ` ${profile.location}`
            ),
            h(
                "div",
                { class: "hero-buttons" },
                link(profile.github.url, { id: "github" }, icon(GITHUB_PATH), " GitHub"),
                link(profile.linkedin, { id: "linkedin" }, icon(LINKEDIN_PATH), " LinkedIn"),
                link("#projects", { class: "hero-cta" }, "View My Projects")
            )
        )
    );
}

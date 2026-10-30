import { append, h } from "./h.js";
import { renderHeader } from "./components/header.js";
import { renderHero } from "./components/hero.js";
import {
    renderAbout,
    renderAchievements,
    renderContact,
    renderExperience,
    renderProjects,
    renderSkills,
} from "./components/sections.js";
import { renderFooter } from "./components/footer.js";

/** Builds the whole page and mounts it into the given root element. */
export function renderApp(root: HTMLElement): void {
    // Numbered sections: 01 About, 02 Skills, ... in this order
    const numbered = [
        renderAbout,
        renderSkills,
        renderProjects,
        renderExperience,
        renderAchievements,
        renderContact,
    ].map((render, i) => render(i + 1));

    root.replaceChildren();
    append(root, [renderHeader(), h("main", {}, renderHero(), ...numbered), renderFooter()]);
}

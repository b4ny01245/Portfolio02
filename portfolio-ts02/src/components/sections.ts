import { br, h, link } from "../h.js";
import { about, achievements, contact, experience, profile, projects, skills } from "../data.js";

/** "01 / ABOUT" style heading */
function sectionTitle(index: number, title: string): HTMLHeadingElement {
    const number = String(index).padStart(2, "0");
    return h("h1", {}, `${number} `, h("span", { class: "section-slash" }, "/"), ` ${title}`);
}

/** Cycles flex1 → flex2 → flex3 for the card layout in the CSS. */
const cardClass = (i: number): string => `flex${(i % 3) + 1}`;

export function renderAbout(index: number): HTMLElement {
    return h(
        "section",
        { id: "about" },
        sectionTitle(index, "ABOUT"),
        ...about.paragraphs.map((text) => h("p", {}, text)),
        h("h3", {}, "EDUCATION"),
        h(
            "p",
            {},
            h("strong", {}, about.education.degree),
            br(),
            about.education.school,
            br(),
            about.education.period
        ),
        h("h3", {}, "CAREER INTERESTS"),
        h("p", {}, about.careerInterests.join(" · "))
    );
}

export function renderSkills(index: number): HTMLElement {
    return h(
        "section",
        { class: "flexbox-products", id: "skills" },
        sectionTitle(index, "SKILLS & TECHNOLOGIES"),
        ...skills.map((group, i) =>
            h(
                "div",
                { class: cardClass(i) },
                h("h2", {}, group.title),
                br(),
                ...group.items.map((item) => h("p", {}, item))
            )
        )
    );
}

export function renderProjects(index: number): HTMLElement {
    return h(
        "section",
        { class: "flexbox-products", id: "projects" },
        sectionTitle(index, "SELECTED PROJECTS"),
        ...projects.map((project, i) =>
            h(
                "div",
                { class: cardClass(i) },
                h("img", { src: project.image, alt: project.imageAlt, loading: "lazy" }),
                h("h2", {}, project.title),
                br(),
                h("p", {}, project.description),
                br(),
                h("p", {}, h("strong", {}, project.stack.join(" · ")))
            )
        )
    );
}

export function renderExperience(index: number): HTMLElement {
    return h(
        "section",
        { id: "experience" },
        sectionTitle(index, "EXPERIENCE"),
        h(
            "div",
            { class: "review" },
            ...experience.map((job) =>
                h(
                    "div",
                    {},
                    h("blockquote", {}, h("strong", {}, job.title), br(), br(), job.organization, br(), job.period),
                    h("p", {}, job.description)
                )
            )
        )
    );
}

export function renderAchievements(index: number): HTMLElement {
    return h(
        "section",
        { class: "flexbox-products", id: "achievements" },
        sectionTitle(index, "ACHIEVEMENTS"),
        ...achievements.map((item, i) =>
            h(
                "div",
                { class: cardClass(i) },
                h("h2", {}, item.title),
                br(),
                ...item.lines.map((line) => h("p", {}, line))
            )
        )
    );
}

export function renderContact(index: number): HTMLElement {
    const field = (
        tag: "input" | "textarea",
        name: string,
        placeholder: string,
        extra: Record<string, string> = {}
    ): HTMLElement => h(tag, { id: name, name, placeholder, required: true, ...extra });

    return h(
        "section",
        { class: "contact-section", id: "contact" },
        sectionTitle(index, "CONTACT ME"),
        h(
            "div",
            { class: "contact-grid" },
            h(
                "div",
                { class: "contact-card" },
                h("h2", {}, contact.heading),
                br(),
                h("p", {}, contact.intro),
                h(
                    "ul",
                    { class: "contact-list" },
                    h("li", {}, h("strong", {}, "Email:"), br(), link(`mailto:${profile.email}`, {}, profile.email)),
                    h("li", {}, h("strong", {}, "GitHub:"), br(), link(profile.github.url, {}, profile.github.label)),
                    h("li", {}, h("strong", {}, "Portfolio:"), br(), link(profile.portfolioUrl, {}, "View Portfolio"))
                )
            ),
            h(
                "form",
                { class: "contact-form", id: "contactForm" },
                field("input", "name", "Your Name", { type: "text" }),
                field("input", "email", "Your Email", { type: "email" }),
                field("input", "subject", "Subject", { type: "text" }),
                field("textarea", "message", "Your Message", { rows: "7" }),
                h("button", { type: "submit" }, "SEND MESSAGE")
            )
        )
    );
}

import { byId } from "./dom.js";

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const RESET_DELAY_MS = 2000;

function readField(form: HTMLFormElement, name: keyof ContactFormData): string {
    const field = form.elements.namedItem(name);
    if (
        field instanceof HTMLInputElement ||
        field instanceof HTMLTextAreaElement
    ) {
        return field.value.trim();
    }
    return "";
}

function readForm(form: HTMLFormElement): ContactFormData {
    return {
        name: readField(form, "name"),
        email: readField(form, "email"),
        subject: readField(form, "subject"),
        message: readField(form, "message"),
    };
}

/**
 * Contact form (demo handler — it shows a confirmation but does not send anything yet).
 * To really send messages, post `data` to a service such as Formspree or Netlify Forms.
 */
export function initContactForm(): void {
    const form = byId("contactForm", HTMLFormElement);
    if (!form) return;

    form.addEventListener("submit", (event: SubmitEvent) => {
        event.preventDefault();

        const data = readForm(form);
        if (Object.values(data).some((value) => value === "")) return;

        const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
        if (!button) return;

        const originalText = button.textContent ?? "";

        button.textContent = "MESSAGE SENT";
        button.style.background = "white";
        button.style.color = "black";

        window.setTimeout(() => {
            button.textContent = originalText;
            button.style.background = "";
            button.style.color = "";
            form.reset();
        }, RESET_DELAY_MS);
    });
}

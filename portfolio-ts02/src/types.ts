export interface Profile {
    name: string;
    role: string;
    location: string;
    tagline: string;
    avatar: string;
    heroImage: string;
    email: string;
    github: { url: string; label: string };
    linkedin: string;
    portfolioUrl: string;
    copyrightYear: number;
}

export interface NavItem {
    id: string;
    label: string;
}

export interface About {
    paragraphs: string[];
    education: { degree: string; school: string; period: string };
    careerInterests: string[];
}

export interface SkillGroup {
    title: string;
    items: string[];
}

export interface Project {
    title: string;
    image: string;
    imageAlt: string;
    description: string;
    stack: string[];
}

export interface Experience {
    title: string;
    organization: string;
    period: string;
    description: string;
}

export interface Achievement {
    title: string;
    lines: string[];
}

export interface ContactSection {
    heading: string;
    intro: string;
}

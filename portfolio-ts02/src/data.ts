import type {
    About,
    Achievement,
    ContactSection,
    Experience,
    NavItem,
    Profile,
    Project,
    SkillGroup,
} from "./types.js";

// =====================================================
//  ALL SITE CONTENT LIVES HERE — edit this file to update the site.
// =====================================================

export const profile: Profile = {
    name: "Bert Ann S. Binasbas",
    role: "Information Technology Graduate",
    location: "Philippines",
    tagline: "Information Technology Graduate · Web Developer",
    avatar: "assets/images/profile.jpg",
    heroImage: "ME.png",
    email: "your-email@example.com",
    github: { url: "https://github.com/b4ny01245", label: "github.com/b4ny01245" },
    linkedin: "#",
    portfolioUrl: "https://bii-ey-portfolio-website-2026.netlify.app/",
    copyrightYear: 2026,
};

export const nav: NavItem[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
];

export const about: About = {
    paragraphs: [
        "I am a Bachelor of Science in Information Technology graduate from Eastern Samar State University, graduating Cum Laude in 2026.",
        "I have hands-on experience in web development, technical support, system testing, database-driven applications, and academic software projects.",
        "During my internship, I contributed to the development of BorrowSmart, a QR-based office asset management system. I also assisted with hardware and software installation, device configuration, networking, troubleshooting, and system-related tasks.",
    ],
    education: {
        degree: "Bachelor of Science in Information Technology",
        school: "Eastern Samar State University",
        period: "2022 – 2026 · Cum Laude",
    },
    careerInterests: [
        "Web Development",
        "IT Support",
        "Software Testing",
        "Junior Development",
        "Data & Digital Technology",
    ],
};

export const skills: SkillGroup[] = [
    {
        title: "Frontend",
        items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Responsive Web Design", "UI Implementation"],
    },
    {
        title: "Backend & Database",
        items: ["PHP", "MySQL", "Firebase", "Google Apps Script", "Google Sheets"],
    },
    {
        title: "IT & Development",
        items: [
            "Git & GitHub",
            "VS Code",
            "Technical Support",
            "Software Testing",
            "Basic Networking",
            "Hardware Troubleshooting",
        ],
    },
];

export const projects: Project[] = [
    {
        title: "Digital Discovery for Elderly People",
        image: "assets/images/projects/digital-discovery.png",
        imageAlt: "Digital Discovery for Elderly People",
        description:
            "An educational web platform designed to help elderly users develop digital literacy, understand online safety, and learn common digital tasks.",
        stack: ["PHP", "MySQL", "HTML", "CSS"],
    },
    {
        title: "BorrowSmart",
        image: "assets/images/projects/borrowsmart.png",
        imageAlt: "BorrowSmart",
        description:
            "A QR-based office asset management system for tracking equipment, tools, keys, borrowers, returns, and photo-based verification.",
        stack: ["JavaScript", "Firebase", "Google Apps Script"],
    },
    {
        title: "CWTS Attendance Management System",
        image: "assets/images/projects/cwts.png",
        imageAlt: "CWTS Attendance Management System",
        description:
            "A browser-based attendance management system designed to simplify attendance recording and organization.",
        stack: ["JavaScript", "HTML", "CSS", "LocalStorage"],
    },
    {
        title: "MINED / CORE_OS",
        image: "assets/images/projects/mined.png",
        imageAlt: "MINED CORE OS",
        description:
            "A personal productivity system based on missions, accountability, competition, consequences, and task completion.",
        stack: ["JavaScript", "Firebase", "HTML", "CSS"],
    },
    {
        title: "BEH — AI Second Brain",
        image: "assets/images/projects/beh.png",
        imageAlt: "BEH AI Second Brain",
        description:
            "A personal AI-powered knowledge and productivity application designed to organize information and assist with everyday tasks.",
        stack: ["JavaScript", "OpenRouter", "HTML", "CSS"],
    },
];

export const experience: Experience[] = [
    {
        title: "IT INTERN",
        organization: "Wilson Works Trading Inc.",
        period: "January 2026 – April 2026",
        description:
            "Contributed to BorrowSmart development, backend logic, database organization, technical support, device configuration, networking, software installation, and troubleshooting.",
    },
    {
        title: "IT STUDENT ORGANIZATION SECRETARY",
        organization: "IT Student Organization",
        period: "2023 – 2024",
        description:
            "Managed organizational documentation, meeting minutes, records, coordination, and administrative responsibilities while working with students, faculty, and advisers.",
    },
    {
        title: "CAPSTONE TEAM LEADER",
        organization: "Digital Discovery for Elderly People",
        period: "2025 – 2026",
        description:
            "Led the development team, delegated tasks according to strengths, coordinated milestones, and helped resolve project delays and development challenges.",
    },
];

export const achievements: Achievement[] = [
    { title: "Cum Laude", lines: ["Eastern Samar State University", "2025 – 2026"] },
    { title: "Dean's Lister", lines: ["Academic achievement maintained from 2023 – 2025."] },
    {
        title: "Service Awardee",
        lines: ["Recognized for service and contribution to the university and IT community."],
    },
    { title: "ITSO Secretary", lines: ["Served as Secretary of the IT Student Organization."] },
    { title: "SHS High Honors", lines: ["ICT Strand · 2021 – 2022"] },
];

export const contact: ContactSection = {
    heading: "Let's connect.",
    intro:
        "I am currently open to entry-level opportunities in web development, IT support, software testing, and related technology roles.",
};

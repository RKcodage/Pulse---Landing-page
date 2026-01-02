import type { Integration } from "@/types";

export const integrations: Integration[] = [
    {
        name: "Slack",
        category: "Communication",
        logo: "https://cdn.simpleicons.org/slack",
    },
    {
        name: "GitHub",
        category: "Développement",
        logo: "https://cdn.simpleicons.org/github",
    },
    {
        name: "Notion",
        category: "Productivité",
        logo: "https://cdn.simpleicons.org/notion",
    },
    {
        name: "Google",
        category: "Espace de travail",
        logo: "https://cdn.simpleicons.org/google",
    },
    {
        name: "Figma",
        category: "Design",
        logo: "https://cdn.simpleicons.org/figma",
    },
    {
        name: "Salesforce",
        category: "CRM",
        logo: "https://cdn.simpleicons.org/salesforce",
    },
    {
        name: "Zapier",
        category: "Automatisation",
        logo: "https://cdn.simpleicons.org/zapier",
    },
    {
        name: "Stripe",
        category: "Paiements",
        logo: "https://cdn.simpleicons.org/stripe",
    },
    {
        name: "Hubspot",
        category: "Marketing",
        logo: "https://cdn.simpleicons.org/hubspot",
    },
    {
        name: "Zoom",
        category: "Réunions",
        logo: "https://cdn.simpleicons.org/zoom",
    },
];

export const animationVariants = {
    container: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    },
    item: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
            },
        },
    },
};

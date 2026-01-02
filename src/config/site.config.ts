export const siteConfig = {
    name: "Pulse",
    description: "Rationalisez votre flux de travail avec notre puissante solution SaaS",
    url: "https://pulse.com",
    ogImage: "/image.png",
    links: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        github: "#",
    },
    creator: "Rayan Kabra",
}

export const navigationConfig = {
    mainNav: [
        { title: "Fonctionnalités", href: "#features" },
        { title: "Tarifs", href: "#pricing" },
        { title: "Témoignages", href: "#testimonials" },
        { title: "FAQ", href: "#faq" },
    ],
}

export const pricingConfig = {
    plans: [
        {
            name: "Starter",
            price: "$29",
            description: "Parfait pour les petites entreprises et startups",
            features: ["5 Membres d'équipe", "10 Go de stockage", "Analyse de base", "Support par email"],
        },
        {
            name: "Professional",
            price: "$79",
            description: "Idéal pour les entreprises en croissance",
            features: [
                "15 Membres d'équipe",
                "50 Go de stockage",
                "Analyse avancée",
                "Support prioritaire",
                "Accès API",
                "Intégrations personnalisées",
            ],
            popular: true,
        },
        {
            name: "Enterprise",
            price: "$149",
            description: "Pour les grandes organisations avec des besoins complexes",
            features: [
                "Nombre illimité de membres",
                "500 Go de stockage",
                "Analyse d'entreprise",
                "Support dédié 24/7",
                "Sécurité avancée",
                "Développement personnalisé",
                "Assistance à l'intégration",
            ],
        },
    ],
}

export const comparisonConfig = {
    features: [
        { name: "Fonctionnalités de base", basic: true, pro: true, enterprise: true },
        { name: "Projets illimités", basic: false, pro: true, enterprise: true },
        { name: "Accès API", basic: false, pro: true, enterprise: true },
        { name: "Analyse avancée", basic: false, pro: true, enterprise: true },
        { name: "Intégrations personnalisées", basic: false, pro: false, enterprise: true },
        { name: "Support dédié", basic: false, pro: false, enterprise: true },
        { name: "Garantie SLA", basic: false, pro: false, enterprise: true },
    ],
}

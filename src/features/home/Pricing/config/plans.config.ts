import type { PricingPlan } from "@/types";

export const plans: PricingPlan[] = [
    {
        name: "Standard",
        price: "29 €",
        description: "Parfait pour les petites entreprises et startups",
        features: [
            "5 Membres d'équipe",
            "10 Go de stockage",
            "Analyse de base",
            "Support par email",
        ],
    },
    {
        name: "Pro",
        price: "79 €",
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
        name: "Entreprise",
        price: "149 €",
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
];

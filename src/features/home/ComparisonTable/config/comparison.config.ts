export interface ComparisonFeature {
    name: string;
    basic: boolean;
    pro: boolean;
    enterprise: boolean;
}

export const comparisonFeatures: ComparisonFeature[] = [
    { name: "Fonctionnalités de base", basic: true, pro: true, enterprise: true },
    { name: "Projets illimités", basic: false, pro: true, enterprise: true },
    { name: "Accès API", basic: false, pro: true, enterprise: true },
    { name: "Analyse avancée", basic: false, pro: true, enterprise: true },
    { name: "Intégrations personnalisées", basic: false, pro: false, enterprise: true },
    { name: "Support dédié", basic: false, pro: false, enterprise: true },
    { name: "Garantie SLA", basic: false, pro: false, enterprise: true },
];

export const pricingTiers = {
    basic: {
        name: "Standard",
        price: "29 €",
        description: "Pour les petites équipes",
        buttonText: "Commencer",
        buttonVariant: "outline" as const,
    },
    pro: {
        name: "Pro",
        price: "79 €",
        description: "Pour les entreprises en croissance",
        buttonText: "Commencer",
        buttonVariant: "primary" as const,
        popular: true,
    },
    enterprise: {
        name: "Entreprise",
        price: "149 €",
        description: "Pour les grandes organisations",
        buttonText: "Contacter les ventes",
        buttonVariant: "outline" as const,
    },
};

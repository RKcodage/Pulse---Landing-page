import type { Step } from "@/types";

export const steps: Step[] = [
    {
        number: "01",
        title: "Inscription",
        description:
            "Créez votre compte en quelques secondes. Aucune carte de crédit requise pour l'essai gratuit.",
        color: "from-purple-500 to-purple-700",
        image: "/images/dashboard.png",
    },
    {
        number: "02",
        title: "Configurer",
        description:
            "Configurez votre espace de travail et invitez les membres de votre équipe à collaborer.",
        color: "from-pink-500 to-purple-500",
        image: "/images/team.png",
    },
    {
        number: "03",
        title: "Importer des données",
        description:
            "Importez facilement vos données existantes ou commencez par nos modèles.",
        color: "from-blue-500 to-purple-500",
        image: "/images/webinar.png",
    },
    {
        number: "04",
        title: "Commencer à travailler",
        description:
            "Commencez à utiliser la plateforme pour rationaliser votre flux de travail et augmenter la productivité.",
        color: "from-purple-500 to-pink-500",
        image: "/images/automation.png",
    },
];

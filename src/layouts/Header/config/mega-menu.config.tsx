import {
  Laptop,
  Users,
  BarChart3,
  Settings,
  HelpCircle,
  FileText,
  Zap,
} from "lucide-react";
import type { MegaMenuData } from "@/types";

export const megaMenuConfig: Record<string, MegaMenuData> = {
  products: {
    title: "Produits",
    columns: [
      {
        title: "Plateforme principale",
        items: [
          {
            icon: <Laptop className="h-5 w-5" />,
            title: "Tableau de bord",
            description: "Vue d'ensemble complète de votre entreprise",
            href: "#",
          },
          {
            icon: <Users className="h-5 w-5" />,
            title: "Gestion d'équipe",
            description: "Organisez et gérez votre équipe",
            href: "#",
          },
          {
            icon: <BarChart3 className="h-5 w-5" />,
            title: "Analyse",
            description: "Informations et visualisation des données",
            href: "#",
          },
        ],
      },
      {
        title: "Modules supplémentaires",
        items: [
          {
            icon: <Zap className="h-5 w-5" />,
            title: "Automatisation",
            description: "Rationalisez vos flux de travail",
            href: "#",
          },
          {
            icon: <Settings className="h-5 w-5" />,
            title: "Intégrations",
            description: "Connectez avec d'autres outils",
            href: "#",
          },
          {
            icon: <FileText className="h-5 w-5" />,
            title: "Rapports",
            description: "Générez des rapports détaillés",
            href: "#",
          },
        ],
      },
    ],
    featured: {
      title: "Nouvelle fonctionnalité",
      description: "Essayez notre nouveau tableau de bord d'analyse alimenté par l'IA",
      ctaText: "En savoir plus",
      ctaLink: "#",
      imageSrc: "/images/dashboard.png",
    },
  },
  resources: {
    title: "Ressources",
    columns: [
      {
        title: "Aide et support",
        items: [
          {
            icon: <FileText className="h-5 w-5" />,
            title: "Documentation",
            description: "Guides et références",
            href: "#",
          },
          {
            icon: <HelpCircle className="h-5 w-5" />,
            title: "Base de connaissances",
            description: "Réponses aux questions fréquentes",
            href: "#",
          },
          {
            icon: <Users className="h-5 w-5" />,
            title: "Forum communautaire",
            description: "Connectez-vous avec d'autres utilisateurs",
            href: "#",
          },
        ],
      },
      {
        title: "Apprentissage",
        items: [
          {
            icon: <Laptop className="h-5 w-5" />,
            title: "Tutoriels",
            description: "Guides étape par étape",
            href: "#",
          },
          {
            icon: <Zap className="h-5 w-5" />,
            title: "Webinaires",
            description: "Sessions en direct et enregistrées",
            href: "#",
          },
          {
            icon: <FileText className="h-5 w-5" />,
            title: "Blog",
            description: "Les dernières nouvelles et conseils",
            href: "#",
          },
        ],
      },
    ],
    featured: {
      title: "Dernier webinaire",
      description: "Maximiser la productivité avec Pulse",
      ctaText: "Regarder maintenant",
      ctaLink: "#",
      imageSrc: "/images/webinar.png",
    },
  },
};

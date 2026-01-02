import { Activity, Lock, Users, Zap, BarChart3, Clock } from "lucide-react";
import type { ReactNode } from "react";

export interface FeatureItem {
  title: string;
  description: string;
  icon: ReactNode;
}

export const features: FeatureItem[] = [
  {
    title: "Tableau de bord intuitif",
    description:
      "Obtenez une vue d'ensemble complète de votre entreprise avec notre tableau de bord facile à utiliser.",
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    title: "Analyse avancée",
    description:
      "Prenez des décisions basées sur les données avec des analyses et rapports complets.",
    icon: <Activity className="h-6 w-6" />,
  },
  {
    title: "Collaboration d'équipe",
    description: "Travaillez en toute transparence avec les membres de votre équipe en temps réel.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Outils d'automatisation",
    description: "Gagnez du temps en automatisant les tâches répétitives et les flux de travail.",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: "Stockage sécurisé",
    description: "Gardez vos données en sécurité grâce à des mesures de sécurité de niveau entreprise.",
    icon: <Lock className="h-6 w-6" />,
  },
  {
    title: "Support 24/7",
    description:
      "Obtenez de l'aide quand vous en avez besoin auprès de notre équipe d'assistance dévouée.",
    icon: <Clock className="h-6 w-6" />,
  },
];

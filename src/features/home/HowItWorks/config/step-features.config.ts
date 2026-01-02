export interface Feature {
  id: string;
  description: string;
}

export interface StepFeatures {
  stepNumber: string;
  features: Feature[];
}

export const stepFeaturesConfig: StepFeatures[] = [
  {
    stepNumber: "01",
    features: [
      {
        id: "oauth",
        description: "Se connecter avec Google, GitHub ou Microsoft en un clic",
      },
      {
        id: "magic-link",
        description: "Recevez un lien de connexion unique par email, sans mot de passe",
      },
      {
        id: "validation",
        description: "Messages d'erreur instantanés et vérification de la force du mot de passe",
      },
    ],
  },
  {
    stepNumber: "02",
    features: [
      {
        id: "workspace-settings",
        description: "Personnalisez le nom, le logo et les paramètres de votre workspace",
      },
      {
        id: "team-invite",
        description: "Invitez les membres de votre équipe avec des rôles configurables",
      },
      {
        id: "permissions",
        description: "Contrôlez les droits d'accès granulaires par rôle ou équipe",
      },
    ],
  },
  {
    stepNumber: "03",
    features: [
      {
        id: "data-import",
        description: "Importez depuis CSV, JSON, Excel ou connecteurs pré-configurés",
      },
      {
        id: "templates",
        description: "Démarrez rapidement avec des templates industrie-spécifiques",
      },
      {
        id: "migration-guide",
        description: "Assistant interactif pour migrer vos données sans perte",
      },
    ],
  },
  {
    stepNumber: "04",
    features: [
      {
        id: "automation",
        description: "Créez des workflows automatisés sans code",
      },
      {
        id: "analytics",
        description: "Tableaux de bord avec métriques et KPIs personnalisables",
      },
      {
        id: "integrations",
        description: "Connectez vos outils favoris (Slack, Zapier, etc.)",
      },
    ],
  },
];

export interface SiteConfig {
  siteName: string;
  siteDomain: string;
  tagline: string;
  description: string;
  contactEmail: string;
  // Métadonnées SEO prioritaires (optimisation mot-clé "Meilleur", sans branding)
  primaryKeyword?: string;
  homeSeoTitle?: string;
  homeH1?: string;
  homeTagline?: string;
  homeDescription?: string;
  affiliate: {
    amazonTag: string;
    disclaimer: string;
  };
  theme: {
    primaryColor: "#0891b2",
    primaryHoverColor: "#0e7490",
    accentColor: "#06b6d4"
  };
}

export const siteConfig: SiteConfig = {
  siteName: "Meilleur Découpeur Plasma",
  siteDomain: "https://meilleur-decoupeur-plasma.fr",
  tagline: "Le guide comparatif indépendant pour choisir votre poste de découpe plasma",
  description: "Découvrez notre comparatif indépendant des meilleurs découpeurs plasma : modèles avec compresseur, inverter 230V, professionnels et compatibles CNC.",
  contactEmail: "contact@meilleur-decoupeur-plasma.fr",
  primaryKeyword: "Meilleur decoupeur plasma",
  homeSeoTitle: "Meilleur decoupeur plasma : Comparatif, Tests & Guide",
  homeH1: "Meilleur decoupeur plasma",
  homeTagline: "Le guide comparatif indépendant pour choisir votre poste de découpe plasma",
  homeDescription: "Découvrez notre comparatif indépendant des meilleurs découpeurs plasma : modèles avec compresseur, inverter 230V, professionnels et compatibles CNC.",
  affiliate: {
    amazonTag: "amazonwp0b-21",
    disclaimer: "En tant que Partenaire Amazon, ce site réalise un bénéfice sur les achats remplissant les conditions requises."
  },
  theme: {
    primaryColor: "#0f233a",
    primaryHoverColor: "#091624",
    accentColor: "#f97316"
  }
};

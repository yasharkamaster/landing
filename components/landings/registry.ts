import type { ComponentType } from 'react';

export type LandingPageProps = Record<string, never>;

type LandingEntry = {
  title: string;
  load: () => Promise<{ default: ComponentType }>;
};

const registry: Record<string, LandingEntry> = {
  food: {
    title: 'Axiom OS — Business Command Centre for Food Franchises | HypeX',
    load: () => import('./food/FoodLanding'),
  },
  clinic: {
    title: 'LeadMatrix for Clinics — HypeX',
    load: () => import('./clinic/ClinicLanding'),
  },
  luxury: {
    title: 'LeadMatrix for Luxury Fashion Boutiques — HypeX',
    load: () => import('./luxury/LuxuryLanding'),
  },
  professional: {
    title: 'LeadMatrix for Professional Services — HypeX',
    load: () => import('./professional/ProfessionalLanding'),
  },
  tours: {
    title: 'LeadMatrix — Tours & Travel Revenue System',
    load: () => import('./tours/ToursLanding'),
  },
};

export function getLandingComponent(slug: string) {
  return registry[slug] ?? null;
}

export function getAllLandingSlugs(): string[] {
  return Object.keys(registry);
}

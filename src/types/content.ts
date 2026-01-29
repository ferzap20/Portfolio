export interface ProcessStep {
  title: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  year: string;
  role: string;
  tools: string[];
  blurb: string;
  hero: string;
  gallery: string[];
  problem: string;
  approach: string[];
  outcome: string;
  processSteps?: ProcessStep[];
}

export interface SiteMetadata {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  linkedin: string;
  github: string;
  headshot: string;
  cv: string;
}

export interface PortfolioContent {
  site: SiteMetadata;
  latest_works: CaseStudy[];
  ia_experiments: CaseStudy[];
  product_process: CaseStudy[];
  product_management: CaseStudy[];
  ux_research: CaseStudy[];
  gallery: {
    src: string;
    alt: string;
    ratio: string;
  }[];
}

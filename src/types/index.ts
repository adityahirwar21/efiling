export interface Pricing {
  marketRate: number;
  ourPrice: number;
  label: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface Service {
  faqs: any;
  id: string;
  name: string;
  category: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  benefits: string[];
  documents: string[];
  process: Step[];
  pricing: Pricing;
}

export interface Category {
  id: string;
  name: string;
  services: Service[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image?: string;
}

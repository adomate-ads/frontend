/* eslint-disable import/prefer-default-export */
import { RouteLocationRaw } from "vue-router";

declare interface MenuItem {
  title: string;
  to?: string;
  href?: string;
}

export interface Link {
  title: string;
  to?: string | RouteLocationRaw;
  href?: string;
  sublinks?: Link[];
  auth?: boolean;
  roles?: string[];
  sameWindow?: boolean;
}

export interface Plan {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  monthlyStripeID: string;
  annualStripeID: string;
  featureTitle: string;
  features: string[];
}

export interface SignupSteps {
  step: number;
  title: string;
  inProgress: boolean;
  completed: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
  selected: boolean;
}

export interface Member {
  name: string;
  role: string;
  email: string;
  image: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  github?: string;
}

export interface Review {
  name: string;
  role: string;
  review: string;
  company: string;
  image: string;
}
export interface Testimonial {
  name: string;
  role: string;
  review: string;
  company: string;
  logo: string;
  image: string;
  testimonial: string;
}

export interface Feature {
  title: string;
  description: string;
  starter: ContainFeature;
  business: ContainFeature;
  enterprise: ContainFeature;
}

export interface ContainFeature {
  checked?: boolean;
  description?: string;
}

export interface Blog {
  img_src: string;
  headline: string;
  sub: string;
  description: string;
  link: string;
}

export interface PopularArticles {
  title: string;
  description: string;
  link: string;
}

export interface PopularTutorials {
  title: string;
  description: string;
  thumbnail: string;
  link: string;
}

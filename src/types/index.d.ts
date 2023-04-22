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
  monthly_price: number;
  annual_price: number;
  feature_title: string;
  features: string[];
}

export interface SignupSteps {
  step: number;
  title: string;
  in_progress: boolean;
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

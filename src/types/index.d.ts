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
  monthly_price: number;
  annual_price: number;
  features: string[];
  description: string;
}

export interface SignupSteps {
  step: number;
  title: string;
  in_progress: boolean;
  completed: boolean;
}

export interface Location {
  name: string;
  address: string;
}

export interface Service {
  name: string;
  price?: number;
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

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

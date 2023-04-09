import type { Feature } from "@/types";

const Features: Feature[] = [
  {
    title: "Monthly Fee",
    description: "No long-term contracts. Cancel anytime.",
    starter: {
      description: "$20/mo",
    },
    business: {
      description: "$50/mo",
    },
    enterprise: {
      description: "$250/mo",
    },
  },
  {
    title: "Smart Ad Budgeting",
    description: "Generate ads for your business.",
    starter: {
      checked: true,
    },
    business: {
      checked: true,
    },
    enterprise: {
      checked: true,
    },
  },
  {
    title: "Search Ad Generation",
    description: "Generate ads for your business.",
    starter: {
      checked: true,
    },
    business: {
      checked: true,
    },
    enterprise: {
      checked: true,
    },
  },
  {
    title: "Smart Bidding",
    description: "Generate ads for your business.",
    starter: {
      checked: false,
    },
    business: {
      checked: true,
    },
    enterprise: {
      checked: true,
    },
  },
  {
    title: "Marketplace Ad Generation",
    description: "Generate ads for your business.",
    starter: {
      checked: false,
    },
    business: {
      checked: true,
    },
    enterprise: {
      checked: true,
    },
  },
  {
    title: "Video Ad Generation",
    description: "Generate ads for your business.",
    starter: {
      checked: false,
    },
    business: {
      checked: false,
    },
    enterprise: {
      checked: true,
    },
  },
];

export default Features;

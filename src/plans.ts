import type { Plan } from "@/types";

const Plans: Plan[] = [
  {
    name: "Starter",
    description: "Automated Ads for growing businesses in need of customers.",
    monthly_price: 20,
    annual_price: 220,
    feature_title: "Features include:",
    features: [
      "1 Target Location",
      "$500/mo Ad Spend Limit",
      "Ad and Website Analytics",
    ],
  },
  {
    name: "Business",
    description: "Ads for high traffic businesses with larger ad budgets.",
    monthly_price: 50,
    annual_price: 550,
    feature_title: "All features of Starter plus:",
    features: [
      "3 Target Locations",
      "$2,500/mo Ad Spend Limit",
      "Ad Description Optimization",
      "Monthly Website SEO Analysis",
    ],
  },
  {
    name: "Enterprise",
    description:
      "Ads for the largest businesses with quickly changing content.",
    monthly_price: 250,
    annual_price: 2750,
    feature_title: "All features of Business plus:",
    features: [
      "National Ad Targeting",
      "$10,000/mo Ad Spend Limit",
      "Digital Ad Channel",
      "Automatic Conversion Tracking",
    ],
  },
];

export default Plans;

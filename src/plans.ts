import type { Plan } from "@/types";

const Plans: Plan[] = [
  {
    name: "Starter",
    monthly_price: 20,
    annual_price: 220,
    features: [
      "1 Target Location",
      "$500/mo Ad Spend Limit",
      "Ad and Website Analytics",
    ],
    description: "For small teams or personal use.",
  },
  {
    name: "Business",
    monthly_price: 50,
    annual_price: 550,
    features: [
      "3 Target Locations",
      "$2,500/mo Ad Spend Limit",
      "Ad Description Optimization",
      "Monthly Website SEO Analysis",
    ],
    description: "For medium size businesses.",
  },
  {
    name: "Enterprise",
    monthly_price: 250,
    annual_price: 2750,
    features: [
      "National Ad Targeting",
      "$10,000/mo Ad Spend Limit",
      "Digital Ad Channel",
      "Automatic Conversion Tracking",
    ],
    description: "Large businesses.",
  },
];

export default Plans;

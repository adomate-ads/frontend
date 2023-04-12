import type { Plan } from "@/types";

const Plans: Plan[] = [
  {
    name: "Starter",
    description: "Ads for growing businesses in need of customers.",
    monthly_price: 20,
    annual_price: 18, // $216 Annually
    feature_title: "Features include:",
    features: [
      "$500/mo Ad Spend Limit",
      "Weekly Website Parsing",
      "Run 10 Auto Generated Ads",
      "Dashboard Access with Basic Analytics",
    ],
  },
  {
    name: "Business",
    description: "Ads for high traffic businesses with larger ad budgets.",
    monthly_price: 50,
    annual_price: 45, // $540 Annually
    feature_title: "All features of Starter plus:",
    features: [
      "$2,500/mo Ad Spend Limit",
      "Daily Website Parsing",
      "Run 50 Auto Generated Ads",
      "Real-Time Analytics",
    ],
  },
  {
    name: "Enterprise",
    description:
      "Ads for the largest businesses with quickly changing content.",
    monthly_price: 250,
    annual_price: 225, // $2,700 Annually
    feature_title: "All features of Business plus:",
    features: [
      "$10,000/mo Ad Spend Limit",
      "Hourly Website Parsing",
      "Run 500 Auto Generated Ads",
      "Smart Bidding",
    ],
  },
];

export default Plans;

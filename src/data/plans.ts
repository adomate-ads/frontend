import type { Plan } from "@/types";

const Plans: Plan[] = [
  {
    name: "Starter",
    description: "Ads for growing businesses in need of customers.",
    monthlyPrice: 29,
    annualPrice: 25, // $300 Annually
    monthlyStripeID: "price_1N6NH6JSLdyWx69CWTxHBlPk",
    annualStripeID: "price_1N6NJvJSLdyWx69CIFPyg6Fc",
    featureTitle: "Features include:",
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
    monthlyPrice: 79,
    annualPrice: 70, // $840 Annually
    monthlyStripeID: "price_1N6NH7JSLdyWx69COdQB1ncv",
    annualStripeID: "price_1N6NJXJSLdyWx69CCpeTOfOz",
    featureTitle: "All features of Starter plus:",
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
    monthlyPrice: 349,
    annualPrice: 325, // $3,900 Annually
    monthlyStripeID: "price_1N6NH7JSLdyWx69CC3m9QxUr",
    annualStripeID: "price_1N6NIyJSLdyWx69CNnJ05RId",
    featureTitle: "All features of Business plus:",
    features: [
      "$10,000/mo Ad Spend Limit",
      "Hourly Website Parsing",
      "Run 500 Auto Generated Ads",
      "Smart Bidding",
    ],
  },
];

export default Plans;

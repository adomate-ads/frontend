import type { Plan } from "@/types";

const Plans: Plan[] = [
  {
    name: "Starter",
    description: "Ads for growing businesses in need of customers.",
    monthly_price: 20,
    annual_price: 18, // $216 Annually
    monthly_stripe_id: "price_1N6NH6JSLdyWx69CWTxHBlPk",
    annual_stripe_id: "price_1N6NJvJSLdyWx69CIFPyg6Fc",
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
    monthly_stripe_id: "price_1N6NH7JSLdyWx69COdQB1ncv",
    annual_stripe_id: "price_1N6NJXJSLdyWx69CCpeTOfOz",
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
    monthly_stripe_id: "price_1N6NH7JSLdyWx69CC3m9QxUr",
    annual_stripe_id: "price_1N6NIyJSLdyWx69CNnJ05RId",
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

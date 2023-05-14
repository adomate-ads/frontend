import axios, { AxiosError } from "axios";
import { defineStore } from "pinia";

import { API } from "@/utils/api";

interface GetStartedState {
  getStarted: GetStarted;
  PaymentIntent: PaymentIntent;
  error: string | null;
  checkout: boolean;
  fetching: boolean;
}

interface GetStarted {
  domain: string;
  first_name: string;
  last_name: string;
  email: string;
  company_name: string;
  price: string;
  locations: string[];
  services: string[];
  budget: number;
}

interface PaymentIntent {
  id: string;
  ClientSecret: string;
  Total: number;
  Tax: number;
  items: PaymentIntentItem[];
}

interface PaymentIntentItem {
  id: string;
  price: number;
}

const useGetStartedStore = defineStore("getStarted", {
  state: () =>
    ({
      getStarted: {
        domain: "",
        first_name: "",
        last_name: "",
        email: "",
        company_name: "",
        price: "",
        locations: [],
        services: [],
        budget: 0,
      },
      PaymentIntent: {
        id: "",
        ClientSecret: "",
        Total: 0,
        Tax: 0,
        items: [],
      },
      error: null,
      checkout: false,
      fetching: false,
    } as GetStartedState),
  getters: {
    getCheckout: (state) => state.checkout,
    getFetching: (state) => state.fetching,
    getLocations: (state) => state.getStarted.locations,
    getServices: (state) => state.getStarted.services,
    getDomain: (state) => state.getStarted.domain,
    getPaymentIntent: (state) => state.PaymentIntent,
    getError: (state) => state.error,
  },
  actions: {
    async setURL(url: string): Promise<void> {
      this.getStarted.domain = url;

      this.fetching = true;
      await this.getLocationsAndServices();
      this.fetching = false;
    },
    addLocation(location: string): void {
      this.getStarted.locations.push(location);
    },
    updateLocation(oldLocation: string, newLocation: string): void {
      this.getStarted.locations = this.getStarted.locations.map((loc) =>
        loc === oldLocation ? newLocation : loc
      );
    },
    deleteLocation(location: string): void {
      this.getStarted.locations = this.getStarted.locations.filter(
        (loc) => loc !== location
      );
    },
    addService(service: string): void {
      this.getStarted.services.push(service);
    },
    updateService(oldService: string, newService: string): void {
      this.getStarted.services = this.getStarted.services.map((serv) =>
        serv === oldService ? newService : serv
      );
    },
    deleteService(service: string): void {
      this.getStarted.services = this.getStarted.services.filter(
        (serv) => serv !== service
      );
    },
    setPrice(price: string): void {
      this.getStarted.price = price;
    },
    setBudget(budget: number): void {
      this.getStarted.budget = budget;
    },
    setCheckout(status: boolean) {
      this.checkout = status;
    },
    async getLocationsAndServices(): Promise<void> {
      try {
        this.fetching = true;
        const data = await API.get(
          `/v1/get-started/location-service/${this.getStarted.domain}`
        );

        if (data.status === 200) {
          this.getStarted.locations = data.data.locations;
          this.getStarted.services = data.data.services;
        } else {
          this.error = "Error fetching locations and services";
        }
        this.fetching = false;
      } catch (e) {
        this.error = "Error fetching locations and services";
        this.fetching = false;
      }
    },
    setAccount(
      first_name: string,
      last_name: string,
      email: string,
      company_name: string
    ): void {
      this.getStarted.first_name = first_name;
      this.getStarted.last_name = last_name;
      this.getStarted.email = email;
      this.getStarted.company_name = company_name;
    },
    async createAccount(): Promise<void> {
      try {
        this.fetching = true;
        const ip = await axios.get("https://api.ipify.org?format=json");
        const data = await API.post("/v1/get-started", {
          first_name: this.getStarted.first_name,
          last_name: this.getStarted.last_name,
          email: this.getStarted.email,
          company_name: this.getStarted.company_name,
          industry: "software",
          domain: this.getStarted.domain,
          price: this.getStarted.price,
          locations: this.getStarted.locations,
          services: this.getStarted.services,
          budget: this.getStarted.budget,
          ip: ip.data.ip,
        });

        if (data.status === 201) {
          this.PaymentIntent = {
            id: data.data.message.id,
            ClientSecret: data.data.message.payment_intent,
            Total: data.data.message.total,
            Tax: data.data.message.tax,
            items: data.data.message.items,
          } as PaymentIntent;
        } else {
          this.error = "Error creating account";
        }
        this.fetching = false;
      } catch (err: unknown) {
        if (err instanceof Error || err instanceof AxiosError) {
          if (axios.isAxiosError(err)) {
            // Access to config, request, and response
            this.error = err.response?.data.error;
            this.fetching = false;
          } else {
            // Just a stock error
            this.error = "Error creating account";
            this.fetching = false;
          }
        }
      }
    },
  },
});

export default useGetStartedStore;

import { defineStore } from "pinia";

import { API } from "@/utils/api";

interface GetStartedState {
  getStarted: GetStarted;
  checkout: boolean;
  fetching: boolean;
}

interface GetStarted {
  domain: string;
  first_name: string;
  last_name: string;
  email: string;
  company_name: string;
  budget: number;
  locations: string[];
  services: string[];
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
        budget: 0,
        locations: [],
        services: [],
      },
      checkout: false,
      fetching: false,
    } as GetStartedState),
  getters: {
    // getStarted: (state) => state.getStarted,
    getCheckout: (state) => state.checkout,
    getLocations: (state) => state.getStarted.locations,
    getServices: (state) => state.getStarted.services,
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
    setCheckout(status: boolean) {
      this.checkout = status;
    },
    async getLocationsAndServices(): Promise<void> {
      try {
        const { data } = await API.get(
          `/v1/get-started/location-service/${this.getStarted.domain}`
        );

        this.getStarted.locations = data.locations;
        this.getStarted.services = data.services;
      } catch (e) {
        console.log(e);
      }
    },
    async CreateAccount(): Promise<string> {
      try {
        const data = await API.post("/v1/get-started/", {
          first_name: this.getStarted.first_name,
          last_name: this.getStarted.last_name,
          email: this.getStarted.email,
          company_name: this.getStarted.company_name,
          industry: "software",
          domain: this.getStarted.domain,
          price: "price_1MzQkOFzHmjFR1Qwa4QajKrY",
        });

        if (data.status === 201) {
          return data.data.message.payment_intent;
        }
        return "";
      } catch (e) {
        return "";
      }
    },
  },
});

export default useGetStartedStore;

import { defineStore } from "pinia";

import { API } from "@/utils/api";

interface GetStartedState {
  getStarted: GetStarted;
  checkout: boolean;
  fetching: false;
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
    getStarted: (state) => state.getStarted,
    getCheckout: (state) => state.checkout,
    getLocations: (state) => state.getStarted.locations,
    getServices: (state) => state.getStarted.services,
  },
  actions: {
    setURL(url: string) {
      this.getStarted.domain = url;

      // TODO - Start Getting Location and Service, set fetching to true. Once done, set fetching to false
    },
    setCheckout(status: boolean) {
      console.log(status);
      this.checkout = status;
    },
    async CreateAccount(): Promise<void> {
      try {
        const data = await API.post("/v1/get-started/", {
          first_name: this.getStarted.first_name,
          last_name: this.getStarted.last_name,
          email: this.getStarted.email,
          company_name: this.getStarted.company_name,
          industry: "",
          domain: this.getStarted.domain,
        });

        if (data.status === 201) {
          console.log("Account Created");
        } else {
          console.log("Account Not Created");
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
});

export default useGetStartedStore;

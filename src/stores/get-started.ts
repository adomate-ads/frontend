import { defineStore } from "pinia";

interface GetStartedState {
  getStarted: GetStarted | null;
  checkout: boolean;
}

interface GetStarted {
  domain: string;
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  created_at: string;
  updated_at: string;
}

const useGetStartedStore = defineStore("getStarted", {
  state: () =>
    ({
      getStarted: null,
      checkout: false,
    } as GetStartedState),
  getters: {
    getStarted: (state) => state.getStarted,
    getCheckout: (state) => state.checkout,
  },
  actions: {
    setCheckout(status: boolean) {
      console.log(status);
      this.checkout = status;
    },
  },
});

export default useGetStartedStore;

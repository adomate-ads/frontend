<template>
  <div class="h-full flex flex-col justify-between">
    <div v-if="page == 0">
      <h2 class="text-2xl font-bold mb-2">Account Info</h2>
      <div class="flex gap-x-2.5 w-full">
        <div class="mb-4 w-full">
          <label class="block font-sm text-gray-700 mb-1" for="name">
            First Name
          </label>
          <div class="mt-1">
            <input
              id="fname"
              v-model="firstName"
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              type="text"
              placeholder="Jane"
            />
          </div>
        </div>
        <div class="mb-4 w-full">
          <label class="block font-sm text-gray-700 mb-1" for="name">
            Last Name
          </label>
          <div class="mt-1">
            <input
              id="lname"
              v-model="lastName"
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
      </div>
      <div class="flex gap-x-2.5 w-full">
        <div class="mb-4 w-full">
          <label class="block font-sm text-gray-700 mb-1" for="name">
            Email
          </label>
          <div class="mt-1">
            <input
              id="email"
              v-model="email"
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              type="text"
              placeholder="jane.doe@adomate.ai"
            />
          </div>
        </div>
        <div class="mb-4 w-full">
          <label class="block font-sm text-gray-700 mb-1" for="name">
            Domain
          </label>
          <div class="mt-1">
            <input
              id="domain"
              v-model="domain"
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              type="text"
              placeholder="adomate.ai"
            />
          </div>
        </div>
      </div>
      <div class="mb-4 w-full">
        <label class="block font-sm text-gray-700 mb-1" for="name">
          Business Name
        </label>
        <div class="mt-1">
          <input
            id="bname"
            v-model="businessName"
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            type="text"
            placeholder="Adomate LLC/Inc."
          />
        </div>
      </div>
    </div>
    <div v-if="page == 1">
      <h2 class="text-2xl font-bold mb-2">Payment</h2>
      <StripeElements
        v-if="stripeLoaded"
        v-slot="{ elements }"
        ref="elms"
        :stripe-key="stripeKey"
        :instance-options="instanceOptions"
        :elements-options="elementsOptions"
      >
        <StripeElement
          type="payment"
          :elements="elements"
          :options="cardNumberOptions"
        />
      </StripeElements>
    </div>

    <div class="flex flex-col justify-center">
      <div class="flex space-x-2 mx-auto my-3">
        <button
          type="button"
          class="w-2.5 h-2.5 rounded-full"
          :class="page >= 0 ? 'bg-dark-purple' : 'bg-gray-300'"
        ></button>
        <button
          type="button"
          class="w-2.5 h-2.5 rounded-full"
          :class="page >= 1 ? 'bg-dark-purple' : 'bg-gray-300'"
        ></button>
      </div>
      <div class="flex justify-center space-x-10 text-lg">
        <button
          class="bg-transparent text-gray-500 rounded-lg w-44"
          @click="previousPage()"
        >
          <i class="fa-solid fa-caret-left"></i>
          Previous
        </button>
        <button
          class="shadow bg-dark-purple text-white font-semibold tracking-wide w-44 py-4 rounded mb-4 md:mr-5 md:mb-0 hover:bg-white hover:text-dark-purple transition hover:-translate-y-1"
          @click="nextPage()"
        >
          Continue
          <i class="fa-solid fa-arrow-right ml-2"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";
import { StripeElement, StripeElements } from "vue-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useGetStartedStore from "@/stores/get-started";

const GetStartedStore = useGetStartedStore();

const page = ref<number>(0);

const emit = defineEmits<{
  (e: "next-step"): void;
  (e: "previous-step"): void;
}>();

const stripeKey = ref("pk_test_gb9Ci5uY6dvCkOw8JulaVyiA00LIxVv2Zm"); // test key
const instanceOptions = ref({
  // https://stripe.com/docs/js/initializing#init_stripe_js-options
  appearance: {
    theme: "stripe",
  },
});
const elementsOptions = ref({
  // https://stripe.com/docs/js/elements_object/create#stripe_elements-options
  mode: "subscription",
  currency: "usd",
  amount: 100,
  appearance: {
    theme: "stripe",
  },
});
const cardNumberOptions = ref({
  // https://stripe.com/docs/stripe.js#element-options
});

const stripeLoaded = ref(false);
const card = ref();
const elms = ref();

onBeforeMount(() => {
  const stripePromise = loadStripe(stripeKey.value);
  stripePromise.then(() => {
    stripeLoaded.value = true;
  });
});

const pay = (): void => {
  // Get stripe element
  const cardElement = card.value.stripeElement;

  // Access instance methods, e.g. createToken()
  elms.value.instance.createToken(cardElement).then((result: object) => {
    // Handle result.error or result.token
    if (result.error) {
      // Do something
    }
  });
};

const nextPage = (): void => {
  if (page.value === 1) {
    emit("next-step");
    GetStartedStore.setCheckout(false);
    return;
  }

  page.value += 1;
  GetStartedStore.setCheckout(true);
};

const previousPage = (): void => {
  if (page.value === 0) {
    emit("previous-step");
    return;
  }

  page.value -= 1;
  GetStartedStore.setCheckout(false);
};
</script>
<style scoped></style>

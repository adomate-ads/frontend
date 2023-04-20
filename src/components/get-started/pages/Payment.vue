<template>
  <div class="h-full flex flex-col justify-between">
    <div class="">
      <h2 class="text-2xl font-bold mb-2">Payment</h2>
      <StripeElements
        v-if="stripeLoaded"
        v-slot="{ elements }"
        ref="elms"
        :stripe-key="stripeKey"
        :instance-options="instanceOptions"
        :elements-options="elementsOptions"
      >
        <div class="mb-4"> <!-- Stripe doesn't support collecting cardholder name. Check this workaround for production https://jsfiddle.net/7w2vnyb5/ -->
          <label class="block font-sm text-gray-700 mb-2" for="name">
            Full name
          </label>
          <div class="mt-1">
            <input
              id="name"
              v-model="name"
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              type="text"
            />
          </div>
        </div>
        <div class="mb-4">
          <label class="block font-sm text-gray-700 mb-2" for="email">
            Email address
          </label>
          <div class="mt-1">
            <input
              id="email"
              v-model="email"
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              type="email"
            />
          </div>
        </div>
        <StripeElement
          type="payment"
          :elements="elements"
          :options="cardNumberOptions"
        />
      </StripeElements>

      <button
        type="button"
        class="bg-dark-purple px-2 py-1 my-5 rounded-lg font-semibold text-white"
        @click="pay"
      >
        Pay
      </button>
    </div>

    <div class="flex justify-center space-x-10 text-lg">
      <button
        class="bg-transparent text-gray-500 rounded-lg w-44"
        @click="emit('previous-step')"
      >
        <i class="fa-solid fa-caret-left"></i>
        Previous
      </button>
      <button
        class="shadow bg-dark-purple text-white font-semibold tracking-wide w-44 py-4 rounded mb-4 md:mr-5 md:mb-0 hover:bg-white hover:text-dark-purple transition hover:-translate-y-1"
        @click="emit('next-step')"
      >
        Continue
        <i class="fa-solid fa-arrow-right ml-2"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";
import { StripeElement, StripeElements } from "vue-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

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
</script>
<style scoped></style>

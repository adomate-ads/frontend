<template>
  <div class="h-full flex flex-col justify-between">
    <div class="max-h-[300px] overflow-y-auto">
      <h2 class="text-2xl font-bold pb-1">Payment</h2>
      <p class="py-3 text-gray-500">...</p>
      <StripeElements
        v-if="stripeLoaded"
        v-slot="{ elements, instance }"
        ref="elms"
        :stripe-key="stripeKey"
        :instance-options="instanceOptions"
        :elements-options="elementsOptions"
      >
        <StripeElement ref="card" :elements="elements" :options="cardOptions" />
      </StripeElements>
      <button type="button" @click="pay">Pay</button>
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
});
const elementsOptions = ref({
  // https://stripe.com/docs/js/elements_object/create#stripe_elements-options
  mode: "subscription",
  currency: "usd",
  amount: 10,
});
const cardOptions = ref({
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
    console.log(result);
  });
};
</script>
<style scoped></style>

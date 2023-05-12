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
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none"
              type="text"
              placeholder="Jane"
              :class="[
                isValidName(firstName)
                  ? 'focus:border-light-purple'
                  : 'border-red-500',
              ]"
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
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none"
              type="text"
              placeholder="Doe"
              :class="[
                isValidName(lastName)
                  ? 'focus:border-light-purple'
                  : 'border-red-500',
              ]"
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
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none"
              type="text"
              placeholder="jane.doe@adomate.ai"
              :class="[
                isValidEmail(email)
                  ? 'focus:border-light-purple'
                  : 'border-red-500',
              ]"
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
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none"
            type="text"
            placeholder="Adomate"
            :class="[
              isValidName(businessName)
                ? 'focus:border-light-purple'
                : 'border-red-500',
            ]"
          />
        </div>
      </div>
      <p v-if="getStartedStore.getError" class="text-xs text-red-600">
        {{ getStartedStore.getError }}
      </p>
    </div>
    <div v-if="page == 1">
      <h2 class="text-2xl font-bold mb-2">Payment</h2>
      <StripeElements
        v-if="stripeLoaded && elementsOptions.clientSecret !== ''"
        v-slot="{ elements }"
        ref="elms"
        :stripe-key="stripeKey"
        :instance-options="instanceOptions"
        :elements-options="elementsOptions"
      >
        <StripeElement
          ref="payment"
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
          class="shadow bg-dark-purple text-white font-semibold tracking-wide w-44 rounded mb-4 md:mr-5 md:mb-0 hover:bg-white hover:text-dark-purple transition hover:-translate-y-1 flex items-center justify-center"
          :class="getStartedStore.getFetching ? 'py-1' : 'py-4'"
          :disabled="
            !isValidName(firstName) ||
            !isValidName(lastName) ||
            !isValidEmail(email) ||
            !isValidName(businessName)
          "
          @click="nextPage()"
        >
          <span v-if="getStartedStore.getFetching">
            <loader :width="50" :height="50"></loader>
          </span>
          <span v-else>
            <span v-if="page === 0">Continue</span>
            <span v-else>Checkout</span>
            <i class="fa-solid fa-arrow-right ml-2"></i>
          </span>
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

import Loader from "@/components/Loader.vue";

const getStartedStore = useGetStartedStore();

const page = ref<number>(0);

const firstName = ref<string>("");
const lastName = ref<string>("");
const email = ref<string>("");
const businessName = ref<string>("");

const isValidName = (input: string): boolean => {
  return input !== "";
};

const isValidEmail = (input: string): boolean => {
  const urlRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  return urlRegex.test(input);
};

const emit = defineEmits<{
  (e: "next-step"): void;
  (e: "previous-step"): void;
}>();

const stripeKey = ref(
  "pk_test_51N6NB7JSLdyWx69CLTQWTydpReygPyivfe8gnZc0hbGcSMVQQwnCzfHICp7k3kPARYw4KWOEkAE7KeMQBeI3LN6t00Th2gqJD6"
); // test key
const instanceOptions = ref({
  // https://stripe.com/docs/js/initializing#init_stripe_js-options
  appearance: {
    theme: "stripe",
  },
});
const elementsOptions = ref({
  // https://stripe.com/docs/js/elements_object/create#stripe_elements-options
  clientSecret: "",
  appearance: {
    theme: "stripe",
  },
});
const cardNumberOptions = ref({
  // https://stripe.com/docs/stripe.js#element-options
});

const stripeLoaded = ref(false);
const payment = ref();
const elms = ref();

onBeforeMount(() => {
  const stripePromise = loadStripe(stripeKey.value);
  stripePromise.then(() => {
    stripeLoaded.value = true;
  });
});

const pay = (): void => {
  // Get stripe element
  // const paymentElement = payment.value.stripeElement;
  // Do something...
};

const nextPage = async (): Promise<void> => {
  if (page.value === 1) {
    pay();
    emit("next-step");
    getStartedStore.setCheckout(false);
    return;
  }

  getStartedStore.error = null;

  getStartedStore.setAccount(
    firstName.value,
    lastName.value,
    email.value,
    businessName.value
  );
  await getStartedStore.createAccount();
  if (getStartedStore.getError == null) {
    const paymentIntent = getStartedStore.getPaymentIntent;
    elementsOptions.value.clientSecret = paymentIntent.ClientSecret;
    getStartedStore.setCheckout(true);
    page.value += 1;
  }
};

const previousPage = (): void => {
  if (page.value === 0) {
    emit("previous-step");
    return;
  }

  page.value -= 1;
  getStartedStore.setCheckout(false);
};
</script>
<style scoped></style>

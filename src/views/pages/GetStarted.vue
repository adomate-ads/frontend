<template>
  <div class="flex items-center justify-center h-screen">
    <Card>
      <template #left>
        <URL v-if="currentStep === 0" @next-step="currentStep += 1" />
        <Verification
          v-if="currentStep === 1"
          @next-step="currentStep += 1"
          @previous-step="currentStep -= 1"
        />
        <Budget
          v-if="currentStep === 2"
          @next-step="currentStep += 1"
          @previous-step="currentStep -= 1"
        />
        <Ad
          v-if="currentStep === 3"
          @next-step="currentStep += 1"
          @previous-step="currentStep -= 1"
        />
        <Payment
          v-if="currentStep === 4"
          @next-step="currentStep += 1"
          @previous-step="currentStep -= 1"
        />
        <Completion
          v-if="currentStep === 5"
          @next-step="currentStep += 1"
          @previous-step="currentStep -= 1"
        />
      </template>
      <template v-if="!checkout" #right>
        <div v-for="step in steps" :key="step.step">
          <Check
            :in-progress="step.inProgress"
            :completed="step.completed"
            :final="step.step === steps.length - 1"
          >
            {{ step.title }}
          </Check>
          <div
            class="border-l-2 border-dashed h-10 ml-4 transition delay-100 duration-200"
            :class="{
              'border-dark-purple': step.completed,
              hidden: step.step === steps.length - 1,
            }"
          ></div>
        </div>
      </template>
      <template v-else #right>
        <fade-in :delay="0.3">
          <div class="w-full">
            <h3 class="text-gray-400">Subscribe to Adomate</h3>
            <div class="flex mb-10">
              <h2 class="font-semibold text-4xl text-gray-800">${{ total }}</h2>
              <div class="mx-2 justify-center">
                <p class="text-sm text-gray-400">per</p>
                <p class="text-sm text-gray-400">month</p>
              </div>
            </div>
            <div class="flex flex-col gap-y-4 mb-4">
              <div
                v-for="(item, idx) in GetStartedStore.getPaymentIntent.items"
                :key="idx"
                class="flex justify-between"
              >
                <div v-if="plan(item.id)">
                  <h4 class="text-gray-800">{{ plan(item.id).name }} Plan</h4>
                  <p class="text-sm text-gray-400">Billed Montly</p>
                </div>
                <div v-else>
                  <h4 class="text-gray-800">Ad Budget</h4>
                  <p class="text-sm text-gray-400">Billed Montly</p>
                </div>
                <p class="text-gray-800 text-lg">
                  ${{ (item.price / 100).toFixed(2) }}
                </p>
              </div>
            </div>
            <div class="flex flex-col gap-x-1 border-t-2">
              <div class="flex justify-between">
                <div>
                  <h4 class="text-gray-400 text-sm">Sub-Total</h4>
                </div>
                <p class="text-gray-400 text-sm">${{ total - tax }}</p>
              </div>
              <div class="flex justify-between">
                <div>
                  <h4 class="text-gray-400 text-sm">Tax</h4>
                </div>
                <p class="text-gray-400 text-sm">${{ tax }}</p>
              </div>
              <div class="flex justify-between mt-1">
                <div>
                  <h4 class="text-gray-800">Total</h4>
                </div>
                <p class="text-gray-800 text-lg">${{ total }}</p>
              </div>
            </div>
          </div>
        </fade-in>
      </template>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import Card from "@/components/get-started/Card.vue";
import Check from "@/components/get-started/Check.vue";
import FadeIn from "@/components/FadeIn.vue";

import { computed, onMounted, ref, watch } from "vue";
import { Plan, SignupSteps } from "@/types";
import Plans from "@/data/plans";
import useGetStartedStore from "@/stores/get-started";

import Ad from "@/components/get-started/pages/Ad.vue";
import Budget from "@/components/get-started/pages/Budget.vue";
import Completion from "@/components/get-started/pages/Completion.vue";
import Payment from "@/components/get-started/pages/Payment.vue";
import URL from "@/components/get-started/pages/URL.vue";
import Verification from "@/components/get-started/pages/Verification.vue";

const GetStartedStore = useGetStartedStore();

const total = computed(() => {
  return (GetStartedStore.getPaymentIntent.Total / 100).toFixed(2);
});

const tax = computed(() => {
  return (GetStartedStore.getPaymentIntent.Tax / 100).toFixed(2);
});

const plan = (priceID: string): Plan => {
  return Plans.filter(
    (subPlan) =>
      subPlan.monthlyStripeID === priceID || subPlan.annualStripeID === priceID
  )[0];
};

const steps = ref<SignupSteps[]>([
  {
    step: 0,
    title: "Website Data Collection",
    inProgress: true,
    completed: false,
  },
  {
    step: 1,
    title: "Verify Location & Services",
    inProgress: false,
    completed: false,
  },
  {
    step: 2,
    title: "Set Budget & Select Plan",
    inProgress: false,
    completed: false,
  },
  {
    step: 3,
    title: "Preview and Confirm Ad",
    inProgress: false,
    completed: false,
  },
  {
    step: 4,
    title: "Payment",
    inProgress: false,
    completed: false,
  },
  {
    step: 5,
    title: "Running Ads",
    inProgress: false,
    completed: false,
  },
]);

const checkout = computed(() => GetStartedStore.checkout);

const currentStep = ref(0);

watch(currentStep, (newStep: number, oldStep: number) => {
  if (newStep > oldStep) {
    steps.value[newStep].inProgress = true;
    steps.value[oldStep].inProgress = false;
    steps.value[oldStep].completed = true;
  } else {
    steps.value[newStep].inProgress = true;
    steps.value[newStep].completed = false;
    steps.value[oldStep].inProgress = false;
  }
});

const completed = (): void => {
  currentStep.value = 5;
  steps.value[1].completed = true;
  steps.value[2].completed = true;
  steps.value[3].completed = true;
  steps.value[4].completed = true;
};

onMounted(() => {
  // Direct Navigation to Step
  const { hash } = window.location;
  if (hash) {
    if (hash.startsWith("#step")) {
      const step = parseInt(hash.replace("#step", ""), 10);
      if (step) {
        currentStep.value = step;
      }
    } else if (hash === "#completed") {
      completed();
    }
  }
});
</script>

<style scoped></style>

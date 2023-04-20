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
        <URL
          v-if="currentStep === 5"
          @next-step="currentStep += 1"
          @previous-step="currentStep -= 1"
        />
      </template>
      <template v-if="!checkout" #right>
        <div v-for="step in steps" :key="step.step">
          <Check
            :in-progress="step.in_progress"
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
              <h2 class="font-semibold text-4xl text-gray-800">$550.00</h2>
              <div class="mx-2 justify-center">
                <p class="text-sm text-gray-400">per</p>
                <p class="text-sm text-gray-400">month</p>
              </div>
            </div>
            <div class="flex flex-col gap-y-4 mb-4">
              <div class="flex justify-between">
                <div>
                  <h4 class="text-gray-800">Business Plan</h4>
                  <p class="text-sm text-gray-400">Billed Montly</p>
                </div>
                <p class="text-gray-800 text-lg">$50.00</p>
              </div>
              <div class="flex justify-between">
                <div>
                  <h4 class="text-gray-800">Ad Budget</h4>
                  <p class="text-sm text-gray-400">Billed Montly</p>
                </div>
                <p class="text-gray-800 text-lg">$500.00</p>
              </div>
            </div>
            <div class="flex flex-col gap-x-1 border-t-2">
              <div class="flex justify-between">
                <div>
                  <h4 class="text-gray-400 text-sm">Sub-Total</h4>
                </div>
                <p class="text-gray-400 text-sm">$550.00</p>
              </div>
              <div class="flex justify-between">
                <div>
                  <h4 class="text-gray-400 text-sm">Tax</h4>
                </div>
                <p class="text-gray-400 text-sm">$5.00</p>
              </div>
              <div class="flex justify-between mt-1">
                <div>
                  <h4 class="text-gray-800">Total</h4>
                </div>
                <p class="text-gray-800 text-lg">$555.00</p>
              </div>
            </div>
          </div>
        </fade-in>
      </template>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import FadeIn from "@/components/FadeIn.vue";
import Card from "@/components/get-started/Card.vue";
import Check from "@/components/get-started/Check.vue";

import { computed, onMounted, ref, watch } from "vue";
import { SignupSteps } from "@/types";
import useGetStartedStore from "@/stores/get-started";

import Ad from "@/components/get-started/pages/Ad.vue";
import Budget from "@/components/get-started/pages/Budget.vue";
import Payment from "@/components/get-started/pages/Payment.vue";
import URL from "@/components/get-started/pages/URL.vue";
import Verification from "@/components/get-started/pages/Verification.vue";

const GetStartedStore = useGetStartedStore();

const steps = ref<SignupSteps[]>([
  {
    step: 0,
    title: "Website Data Collection",
    in_progress: true,
    completed: false,
  },
  {
    step: 1,
    title: "Verify Location & Services",
    in_progress: false,
    completed: false,
  },
  {
    step: 2,
    title: "Set Budget & Select Plan",
    in_progress: false,
    completed: false,
  },
  {
    step: 3,
    title: "Preview and Confirm Ad",
    in_progress: false,
    completed: false,
  },
  {
    step: 4,
    title: "Payment",
    in_progress: false,
    completed: false,
  },
  {
    step: 5,
    title: "Running Ads",
    in_progress: false,
    completed: false,
  },
]);

const checkout = computed(() => GetStartedStore.checkout);

const currentStep = ref(0);

watch(currentStep, (newStep: number, oldStep: number) => {
  if (newStep > oldStep) {
    steps.value[newStep].in_progress = true;
    steps.value[oldStep].in_progress = false;
    steps.value[oldStep].completed = true;
  } else {
    steps.value[newStep].in_progress = true;
    steps.value[newStep].completed = false;
    steps.value[oldStep].in_progress = false;
  }
});

onMounted(() => {
  // Direct Navigation to Step
  const { hash } = window.location;
  if (hash && hash.startsWith("#step")) {
    const step = parseInt(hash.replace("#step", ""), 10);
    if (step) {
      currentStep.value = step;
    }
  }
});
</script>

<style scoped></style>

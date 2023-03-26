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
        <URL
          v-if="currentStep === 2"
          @next-step="currentStep += 1"
          @previous-step="currentStep -= 1"
        />
        <URL
          v-if="currentStep === 3"
          @next-step="currentStep += 1"
          @previous-step="currentStep -= 1"
        />
        <URL
          v-if="currentStep === 4"
          @next-step="currentStep += 1"
          @previous-step="currentStep -= 1"
        />
        <URL
          v-if="currentStep === 5"
          @next-step="currentStep += 1"
          @previous-step="currentStep -= 1"
        />
        <URL
          v-if="currentStep === 6"
          @next-step="currentStep += 1"
          @previous-step="currentStep -= 1"
        />
      </template>
      <template #right>
        <div v-for="step in steps" :key="step.step">
          <Check
            :in_progress="step.in_progress"
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
    </Card>
  </div>
</template>

<script lang="ts" setup>
import Card from "@/components/get-started/Card.vue";
import Check from "@/components/get-started/Check.vue";

import { onMounted, ref, watch } from "vue";
import { SignupSteps } from "@/types";

import URL from "@/components/get-started/pages/URL.vue";
import Verification from "@/components/get-started/pages/Verification.vue";

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
    title: "Create an Account",
    in_progress: false,
    completed: false,
  },
  {
    step: 5,
    title: "Payment",
    in_progress: false,
    completed: false,
  },
  {
    step: 6,
    title: "Running Ads",
    in_progress: false,
    completed: false,
  },
]);

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

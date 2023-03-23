<template>
  <div class="flex items-center justify-center h-screen">
    <Card>
      <template #left> Left Side </template>
      <template #right>
        <div v-for="step in steps" :key="step.id">
          <Check :in_progress="step.in_progress" :completed="step.completed">
            {{ step.title }}
          </Check>
          <div
            class="border-l-2 border-dashed h-10 ml-4 transition delay-100 duration-200"
            :class="{ 'border-dark-purple': step.completed }"
          ></div>
        </div>
        <div
          class="rounded-2xl border-2 border-dashed text-center text-gray-400"
          :class="{ 'border-dark-purple': steps[steps.length - 1].completed }"
        >
          <h2 class="text-xl">Running Ads</h2>
        </div>
      </template>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import Card from "@/components/get-started/Card.vue";
import Check from "@/components/get-started/Check.vue";

import { ref } from "vue";
import { SignupSteps } from "@/types";

const steps = ref<SignupSteps[]>([
  {
    step: 0,
    title: "Website Data Collection",
    in_progress: false,
    completed: true,
  },
  {
    step: 1,
    title: "Verify Location & Services",
    in_progress: true,
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
]);
</script>

<style scoped></style>

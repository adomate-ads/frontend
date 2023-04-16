<template>
  <div class="h-full flex flex-col justify-between">
    <div class="max-h-[400px] overflow-y-auto">
      <h2 class="text-2xl font-bold">Budget & Plan Selection</h2>
      <p class="py-3 text-gray-500">
        Based on your industry and we've done our best to estimate a budget for
        you however may modify it to your liking. You may modify you budget at
        any time and our magical algorithms will adjust your campaigns
        accordingly.
      </p>
      <div class="w-full px-10">
        <div class="relative mb-6">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-dark-purple"
          >
            <i class="fa-solid fa-dollar-sign"></i>
          </div>
          <input
            id="input-group-1"
            v-model="budget"
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ring-transparent focus:border-light-purple block w-full pl-10 p-2.5"
            placeholder="500"
          />
        </div>
      </div>

      <div class="flex flex-col w-full gap-y-4 mb-5">
        <p v-if="budget <= 10000" class="text-gray-500">
          Based on your budget, we recommend the
          <span v-if="budget < 500" class="font-bold"> Starter</span>
          <span v-else-if="budget < 2500" class="font-bold"> Business</span>
          <span v-else class="font-bold"> Enterprise</span>
          plan. You may choose to modify this plan at any time from the
          dashboard. To learn more about our plans, please visit our
          <router-link
            to="pricing"
            class="underline decoration-2 decoration-dark-purple"
          >
            pricing page</router-link
          >.
        </p>
        <p v-else class="text-gray-500">
          Your budget does not fall within our plans. Please Contact Us at
          info@adomate.ai to get started.
        </p>
      </div>
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
import { ref } from "vue";

const emit = defineEmits<{
  (e: "next-step"): void;
  (e: "previous-step"): void;
}>();

const budget = ref(500);
</script>

<style scoped></style>

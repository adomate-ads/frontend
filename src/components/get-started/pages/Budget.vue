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
        <p class="text-gray-500">
          We've selected the following plan for you based on your budget.
        </p>
        <!--      TODO - refactor using plans.ts -->
        <div
          v-if="budget < 500"
          class="w-full border-2 border-light-purple border-dashed pl-4 p-2 rounded-xl"
        >
          <h3 class="text-sm">
            <span class="text-lg font-bold">Starter</span> - $20/Mo ($500 Ad
            Spend Limit)
          </h3>
          - For small teams or personal use.
        </div>
        <div
          v-else-if="budget < 2500"
          class="w-full border-2 border-light-purple border-dashed pl-4 p-2 rounded-xl"
        >
          <h3 class="text-sm">
            <span class="text-lg font-bold">Business</span> - $50/Mo ($2,500 Ad
            Spend Limit)
          </h3>
          - For medium size businesses.
        </div>
        <div
          v-else-if="budget < 10000"
          class="w-full border-2 border-light-purple border-dashed pl-4 p-2 rounded-xl"
        >
          <h3 class="text-sm">
            <span class="text-lg font-bold">Enterprise</span> - $250/Mo ($10,000
            Ad Spend Limit)
          </h3>
          - Large businesses.
        </div>
        <div
          v-else
          class="w-full border-2 border-light-purple border-dashed pl-4 p-2 rounded-xl"
        >
          <h3 class="text-sm">
            <span class="text-lg font-bold">Contact Us</span>
          </h3>
        </div>
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

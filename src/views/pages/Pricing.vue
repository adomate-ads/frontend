<template>
  <div class="bg-adomate-off-white">
    <div
      class="text-center mx-auto bg-light-purple h-[550px]"
      style="
        clip-path: polygon(0 0, 5760px 0, 5760px calc(100% - 352px), 0 100%);
      "
    >
      <div class="pt-20">
        <h1
          class="text-6xl font-bold tracking-wide mb-4 subpixel-antialiased text-adomate-off-black"
        >
          Find the right plan for<br />
          your business
        </h1>
      </div>
      <div>
        <div class="flex justify-center mt-10">
          <div class="flex items-center">
            <div class="mr-2 text-gray-700">Billed Monthly</div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input v-model="monthly" type="checkbox" class="sr-only peer" />
              <span
                class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-dark-purple"
              ></span>
            </label>
            <div class="ml-2 text-gray-700">
              Billed Annually <span class="text-gray-900">(-%8)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="-mt-64 mb-5 justify-center">
      <div class="flex flex-row gap-x-6 justify-center">
        <div
          v-for="plan in Plans"
          :key="plan.name"
          class="w-full drop-shadow-xl sm:w-auto py-5 transition ease-in-out delay-100 hover:scale-105 duration-200 z-10"
        >
          <LargePlans :plan="plan" :monthly="monthly" />
        </div>
      </div>
    </div>
    <div
      class="w-2/3 bg-adomate-off-white mx-auto drop-shadow-xl p-8 flex justify-between"
    >
      <div>
        <p class="text-xs font-bold text-extra-dark-purple">Custom Solution</p>
        <h4 class="text-adomate-off-black font-semibold text-2xl">
          Launched a business that doesn't fit the plans above?
        </h4>
      </div>
      <button
        class="shadow bg-dark-purple text-white font-semibold tracking-wide px-4 py-4 rounded mb-4 lg:mr-5 lg:mb-0 hover:bg-white hover:text-dark-purple transition hover:-translate-y-1"
      >
        Contact Us
        <i class="fa-solid fa-arrow-right ml-2"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LargePlans from "@/components/plans/LargePlans.vue";
import Plans from "@/plans";

import { ref } from "vue";

const monthly = ref(false);
</script>

<style scoped></style>

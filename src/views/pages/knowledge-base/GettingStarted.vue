<template>
  <div id="getting-started">
    <FadeIn>
      <div class="bg-dark-purple py-20 px-5">
        <div class="flex flex-col items-center pt-10">
          <h1 class="text-5xl font-bold text-center text-white">
            Getting Started
          </h1>
          <p class="text-white text-center mt-4">
            Learn how to get started with Adomate
          </p>
        </div>
        <div class="flex flex-col items-center justify-center pt-5">
          <div
            class="flex flex-col items-center w-full sm:flex-row sm:justify-center sm:items-center sm:space-x-4 px-5"
          >
            <div
              class="flex flex-col sm:flex-row items-center w-full sm:w-auto"
            >
              <input
                type="text"
                class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:adomate-off-black w-full sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-2xl"
                placeholder="What are you looking for?"
              />
            </div>
            <button
              class="mt-2 sm:mt-0 bg-adomate-navy text-white rounded-lg px-4 py-2 w-full sm:w-auto focus:outline-none"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </FadeIn>
    <FadeIn>
      <div class="flex w-5/6 mx-auto my-10 px-5 py-5">
        <div class="w-1/5">
          <h3 class="mb-4 border-r-2 border-gray-200 pr-4"></h3>
        </div>
        <div class="flex-grow">
          <h1 class="text-5xl font-bold justify-center text-adomate-navy">
            Getting Started
          </h1>
        </div>
      </div>
    </FadeIn>
  </div>
</template>

<script lang="ts" setup>
import FadeIn from "@/components/FadeIn.vue";
// import GettingStartedKB from "@/data/knowledge-base/getting-started";
</script>

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
      <div
        class="bg-gray-100 text-black h-60 w-64 left-20 top-100 overflow-y-auto z-10"
      >
        <div class="p-4">
          <h2 class="text-lg font-bold">Getting Started</h2>
          <ul class="mt-4">
            <li v-for="(link, idx) in GettingStartedKB" :key="idx">
              <a :href="link.linkid">{{ link.title }}</a>
            </li>
          </ul>
        </div>
      </div>
    </FadeIn>
  </div>
</template>

<script lang="ts" setup>
import FadeIn from "@/components/FadeIn.vue";
import GettingStartedKB from "@/data/knowledge-base/getting-started";
</script>

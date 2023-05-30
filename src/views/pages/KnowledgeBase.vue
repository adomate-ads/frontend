<template>
  <div id="knowledgebase">
    <FadeIn>
      <div class="bg-dark-purple py-20 px-5">
        <div class="flex flex-col items-center pt-10">
          <h1 class="text-5xl font-bold text-center text-white">
            Knowledge Base
          </h1>
          <p class="text-white text-center mt-4">
            Here you will find all the information you need to get started with
            Adomate.
          </p>
        </div>
        <div class="flex justify-center pt-5">
          <input
            type="text"
            class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:adomate-off-black w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
            placeholder="What are you looking for?"
          />
          <button
            class="ml-2 bg-adomate-navy text-white rounded-lg px-4 py-2 focus:outline-none"
          >
            Search
          </button>
        </div>
      </div>
    </FadeIn>
    <FadeIn>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-6">
        <div class="bg-white shadow-lg rounded-lg p-6">
          <div class="flex items-center justify-center mb-4">
            <i class="fas fa-rocket text-4xl xl:text-5xl"></i>
          </div>
          <h1
            class="text-2xl xl:text-4xl font-semibold subpixel-antialiased text-center mb-4"
          >
            Getting Started
          </h1>
          <p class="text-l text-center py-2">Ready to dive into Adomate?</p>

          <p class="text-center">
            Whether you're new to Adomate or just looking for a refresher, this
            section will guide you through the initial steps, setup process, and
            key concepts. Maximize your experience with Adomate's powerful
            tools.
          </p>
        </div>
        <div class="bg-white shadow-lg rounded-lg p-6">
          <div class="flex items-center justify-center mb-4">
            <i class="fas fa-lightbulb text-4xl xl:text-5xl"></i>
          </div>
          <h1
            class="text-2xl xl:text-4xl font-semibold subpixel-antialiased text-center mb-4"
          >
            Tips and Tutorials
          </h1>
          <p class="text-l text-center py-2">
            Looking to level up your skills with Adomate?
          </p>

          <p class="text-center">
            Explore a wide range of topics, from advanced techniques to creative
            strategies, and learn how to optimize your productivity and achieve
            impressive results with Adomate.
          </p>
        </div>
        <div class="bg-white shadow-lg rounded-lg p-6">
          <div class="flex items-center justify-center mb-4">
            <i class="fas fa-screwdriver-wrench text-4xl xl:text-5xl"></i>
          </div>
          <h1
            class="text-2xl xl:text-4xl font-semibold subpixel-antialiased text-center mb-4"
          >
            Troubleshooting
          </h1>
          <p class="text-l text-center py-2">
            Encountering a challenge or issue while using Adomate?
          </p>
          <p class="text-center">
            Don't worry, we've got you covered! Get back on track and maximize
            your experience with expert guidance. Find answers to common issues
            and learn how to troubleshoot them.
          </p>
        </div>
      </div>
    </FadeIn>
    <FadeIn>
      <div class="bg-gray-300 py-20 px-5 justify-center">
        <h1 class="text-3xl font-bold text-center text-adomate-navy">
          Popular Articles
        </h1>
        <!--TODO Add a list of article links-->
      </div>
    </FadeIn>
  </div>
</template>

<script lang="ts" setup>
import FadeIn from "@/components/FadeIn.vue";
</script>

<template>
  <div id="tips-and-tutorials">
    <FadeIn>
      <div class="bg-dark-purple py-20 px-5">
        <div class="flex flex-col items-center pt-10">
          <h1 class="text-5xl font-bold text-center text-white">
            Tips and Tutorials
          </h1>
          <p class="text-white text-center mt-4">
            Learn new tips and tricks to get the most out of Adomate
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
        <div
          class="w-3/5 px-4 py-2 h-50 w-70 overflow-x-hidden overflow-y-auto custom-scrollbar"
        >
          <h3 class="text-l font-bold justify-center text-adomate-navy">
            Tips and Tutorials
          </h3>
          <ul class="list-disc ml-4 pl-4">
            <li class="relative">
              <h4>
                <a href="#"> T1</a>
              </h4>
            </li>
          </ul>
        </div>
        <div class="flex-grow px-5 py-5 bg-gray-100">
          <h2 class="text-3xl font-bold justify-center text-adomate-navy">
            Tips and Tutorials
          </h2>
          <p class="text-adomate-navy py-2">
            Explore a wide range of topics, from advanced techniques to creative
            strategies, and learn how to optimize your productivity and achieve
            impressive results with Adomate.
          </p>
          <div class="flex justify-center">
            <img
              src="@/assets/knowledge-base/getting-started/AdomateDashboardLogin.png"
              alt="title"
              class="w-1/2"
            />
          </div>
        </div>
      </div>
    </FadeIn>
  </div>
</template>

<script lang="ts" setup>
import FadeIn from "@/components/FadeIn.vue";
</script>

<style>
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
  background-color: #31394d;
  border-radius: 8px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #637efe;
  border-radius: 8px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: #637efe;
}
</style>

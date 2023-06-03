<template>
  <div id="getting-started">
    <FadeIn>
      <div class="bg-dark-purple py-20 px-5">
        <h1 class="text-5xl font-bold text-center text-white">
          Getting Started
        </h1>
        <p class="text-white text-center mt-4">
          Learn how to get started with Adomate
        </p>
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
          class="w-4/5 px-4 py-2 h-50 w-70 overflow-x-hidden overflow-y-auto custom-scrollbar"
        >
          <h3 class="text-l font-bold justify-center text-adomate-navy">
            Getting Started
          </h3>
          <ul class="list-disc ml-4 pl-4">
            <li
              v-for="topic in GettingStartedKB"
              :key="topic.linkid"
              class="relative"
            >
              <h4>
                <a :href="`#${topic.linkid}`"> {{ topic.title }}</a>
              </h4>
              <ul class="list-disc ml-4 pl-4">
                <li v-if="topic.subtopic1" class="relative">
                  <a :href="`#${topic.subtopic1}`"> {{ topic.subtopic1 }}</a>
                </li>
                <li v-if="topic.subtopic2" class="relative">
                  <a :href="`#${topic.subtopic2}`"> {{ topic.subtopic2 }}</a>
                </li>
                <li v-if="topic.subtopic3" class="relative">
                  <a :href="`#${topic.subtopic3}`"> {{ topic.subtopic3 }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="flex-grow px-10 ml-4 py-5 bg-gray-100">
          <div v-for="topic in GettingStartedKB" :key="topic.linkid">
            <h2
              :id="topic.linkid"
              class="text-3xl font-bold justify-center text-adomate-navy"
            >
              {{ topic.title }}
            </h2>
            <video v-if="topic.video" class="w-full" controls>
              <source :src="topic.video" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3
              v-if="topic.subtopic1"
              :id="topic.subtopic1"
              class="text-xl font-bold justify-center text-adomate-navy py-2"
            >
              {{ topic.subtopic1 }}
            </h3>
            <p v-if="topic.description1" class="text-adomate-navy py-2">
              {{ topic.description1 }}
            </p>
            <div v-if="topic.image" class="flex justify-center">
              <img :src="topic.image" :alt="topic.title" class="w-1/2" />
            </div>
            <h3
              v-if="topic.subtopic2"
              :id="topic.subtopic2"
              class="text-xl font-bold justify-center text-adomate-navy"
            >
              {{ topic.subtopic2 }}
            </h3>
            <p v-if="topic.description2" class="text-adomate-navy py-2">
              {{ topic.description2 }}
            </p>
            <h3
              v-if="topic.subtopic3"
              :id="topic.subtopic3"
              class="text-xl font-bold justify-center text-adomate-navy"
            >
              {{ topic.subtopic3 }}
            </h3>
            <p v-if="topic.description3" class="text-adomate-navy py-2">
              {{ topic.description3 }}
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  </div>
</template>

<script lang="ts" setup>
import FadeIn from "@/components/FadeIn.vue";
import GettingStartedKB from "@/data/knowledge-base/getting-started";
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

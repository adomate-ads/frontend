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
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 py-6">
        <div
          v-for="(cards, idx) in kbcards"
          :key="idx"
          class="bg-white shadow-lg rounded-lg p-6"
        >
          <router-link :to="cards.href">
            <div class="flex items-center justify-center mb-4">
              <i :class="'fas fa-' + cards.icon + ' text-4xl xl:text-5xl'"></i>
            </div>
            <h1
              class="text-2xl xl:text-4xl font-semibold subpixel-antialiased text-center mb-4"
            >
              {{ cards.title }}
            </h1>
            <p class="text-l text-center py-2">
              {{ cards.tagline }}
            </p>

            <p class="text-center">
              {{ cards.description }}
            </p>
          </router-link>
        </div>
      </div>
    </FadeIn>
    <FadeIn>
      <div class="bg-gray-200 py-5 px-5 justify-center">
        <h1
          class="text-4xl xl:text-5xl font-semibold subpixel-antialiased text-center pt-5 px-5 pb-5"
        >
          <strong class="h-full w-full"> Popular Articles </strong>
        </h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
          <div v-for="(article, idx) in PopularArticles" :key="idx">
            <div class="bg-white rounded-lg shadow-lg p-4">
              <h2 class="text-lg font-bold">{{ article.title }}</h2>
              <p class="mt-2">{{ article.description }}</p>
              <a :href="article.link" class="text-blue-500 mt-4">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
    <FadeIn>
      <div class="container mx-auto px-6">
        <h1
          class="text-4xl xl:text-5xl font-semibold subpixel-antialiased text-center pt-5 px-5"
        >
          <strong class="h-full w-full">Quick Tutorials</strong>
        </h1>
        <FadeIn>
          <div class="flex flex-row overflow-x-auto mt-8 custom-scrollbar">
            <div class="flex-shrink-0 flex-grow-0 flex-basis-0 p-2">
              <div class="flex space-x-4">
                <div v-for="(tutorials, idx) in PopularTutorials" :key="idx">
                  <div class="max-w-xs">
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                      <div class="p-4">
                        <div class="flex flex-col items-center">
                          <img
                            :src="tutorials.thumbnail"
                            class="w-50 h-30 object-cover mb-4"
                            alt="tutorials.thumbnail"
                          />
                          <h3 class="text-lg font-semibold text-center">
                            {{ tutorials.title }}
                          </h3>
                          <p class="text-gray-600 text-sm text-center">
                            {{ tutorials.description }}
                          </p>
                          <a :href="tutorials.link" class="text-blue-500 mt-4"
                            >Read More</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </FadeIn>
    <FadeIn>
      <div class="px-5 sm:px-10 p-4">
        <h1
          class="text-4xl xl:text-5xl font-semibold subpixel-antialiased text-center pt-5 pb-5 px-5"
        >
          <strong class="h-full w-full">
            We are here to help you to get the most out of Adomate
          </strong>
        </h1>
        <p class="text-lg lg:text-xl text-gray-500 mb-8">
          Thank you for visiting our knowledge base! We hope that you found the
          information and resources provided here helpful in maximizing your
          experience with Adomate. If you have any further questions or need
          additional assistance, please don't hesitate to reach out to our
          support team. We are committed to providing excellent customer service
          and are here to support you every step of the way. Stay up to date
          with the latest updates and announcements by visiting our website and
          checking out our community forums. We appreciate your feedback and
          suggestions to continuously improve our knowledge base and enhance
          your Adomate journey.
        </p>
      </div>
    </FadeIn>
  </div>
</template>

<script lang="ts" setup>
import FadeIn from "@/components/FadeIn.vue";
import kbcards from "@/data/knowledge-base/kb-cards";
import PopularArticles from "@/data/knowledge-base/popular-articles";
import PopularTutorials from "@/data/knowledge-base/popular-tutorials";
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

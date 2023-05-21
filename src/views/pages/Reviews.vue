<template>
  <div id="reviews">
    <FadeIn>
      <div class="w-full flex place-items-center flex-col">
        <h1
          class="text-4xl xl:text-5xl font-semibold subpixel-antialiased text-center pt-10 px-5"
        >
          We are trusted by over
          <strong class="h-full w-full text-dark-purple">100+</strong>
          businesses to run their ads
        </h1>
        <p class="text-l text-center pt-6 px-5 mx-10 border-b-2 lg:border-b-0">
          The list is growing every day and we are proud to be a part of their
          success. We are here to help you grow your business.
        </p>
      </div>
    </FadeIn>
    <FadeIn>
      <div class="flex justify-center pt-6">
        <p
          class="text-4xl xl:text-5xl font-semibold subpixel-antialiased text-center pt-10 px-5"
        >
          <strong class="h-full w-full text-dark-purple"
            >Our Esteemed Partners</strong
          >
        </p>
      </div>
      <div class="flex justify-center pt-6">
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-center pt-8 pb-4 px-4 rounded-lg"
        >
          <i class="fab fa-github w-32 h-32 my-2 mx-2 text-gray-600"></i>
          <i class="fa-brands fa-google w-32 h-32 my-2 mx-2 text-gray-600"></i>
          <i
            class="fa-brands fa-facebook w-32 h-32 my-2 mx-2 text-gray-600"
          ></i>
          <i class="fa-brands fa-apple w-32 h-32 my-2 mx-2 text-gray-600"></i>
          <i class="fa-brands fa-aws w-32 h-32 my-2 mx-2 text-gray-600"></i>
          <i class="fa-brands fa-spotify w-32 h-32 my-2 mx-2 text-gray-600"></i>
        </div>
      </div>
    </FadeIn>
    <FadeIn>
      <div class="container mx-auto px-6">
        <h1
          class="text-4xl xl:text-5xl font-semibold subpixel-antialiased text-center pt-10 px-5"
        >
          <strong class="h-full w-full text-dark-purple"
            >Client Success Stories</strong
          >
        </h1>
        <div class="flex flex-row overflow-x-auto mt-8 custom-scrollbar">
          <div class="flex-shrink-0 flex-grow-0 flex-basis-0 p-2">
            <div class="flex space-x-4">
              <div v-for="(review, idx) in Reviews" :key="idx">
                <div class="max-w-xs">
                  <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div class="p-4">
                      <div class="flex flex-col items-center">
                        <img
                          :src="review.image"
                          class="w-24 h-24 object-cover rounded-full mb-4"
                          alt="reviewer"
                        />
                        <h3 class="text-lg font-semibold text-center">
                          {{ review.name }}
                        </h3>
                        <p class="text-gray-600 text-sm text-center">
                          {{ review.role }}
                        </p>
                        <p class="text-gray-600 text-sm text-center">
                          {{ review.company }}
                        </p>
                        <p class="italic text-gray-700 text-center mt-4">
                          {{ review.review }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
    <FadeIn>
      <div class="flex justify-center px-6">
        <h1
          class="text-4xl xl:text-5xl font-semibold subpixel-antialiased text-center pt-10 px-5"
        >
          <strong class="h-full w-full text-dark-purple">Testimonials</strong>
        </h1>
      </div>
      <div class="flex justify-center mt-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div v-for="(testimonial, idx) in Testimonials" :key="idx">
            <div class="max-w-md">
              <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <div class="p-4">
                  <div class="flex items-center mb-4">
                    <img
                      class="w-12 h-12 rounded-full mr-4"
                      :src="testimonial.image"
                      :alt="testimonial.company"
                    />
                    <div>
                      <h3 class="text-lg font-semibold">
                        {{ testimonial.name }}
                      </h3>
                      <p class="text-gray-600 text-sm">
                        {{ testimonial.company }}
                      </p>
                    </div>
                  </div>
                  <p class="italic text-gray-700">
                    {{ testimonial.review }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
    <FadeIn>
      <div class="flex justify-center">
        <button
          class="bg-dark-purple hover:bg-light-purple text-white font-bold py-2 px-4 rounded-full mt-10"
        >
          <a href="https://youtu.be/dQw4w9WgXcQ"> See More </a>
        </button>
      </div>
    </FadeIn>
  </div>
</template>

<script lang="ts" setup>
import FadeIn from "@/components/FadeIn.vue";
import Reviews from "@/data/reviews";
import Testimonials from "@/data/testimonials";
</script>

<style>
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
  background-color: #637efe;
  border-radius: 8px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #a3b2ff;
  border-radius: 8px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: #a3b2ff;
}
</style>

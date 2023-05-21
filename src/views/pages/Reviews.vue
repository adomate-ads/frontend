<template>
  <div id="reviews">
    <div class="w-full flex place-items-center flex-col">
      <h1
        class="text-4xl xl:text-5xl font-semibold subpixel-antialiased text-center pt-10 px-5"
      >
        We are trusted by over
        <strong class="h-full w-full text-dark-purple">100+</strong> businesses
        to run their ads
      </h1>
      <p
        class="text-l text-center pt-6 px-5 mx-10 border-b-2 lg:border-b-0 pb-10 hover:border-dark-purple transition ease-in-out delay-50"
      >
        The list is growing every day and we are proud to be a part of their
        success. We are here to help you grow your business.
      </p>
    </div>
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
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-center pt-8 pb-4 px-4 rounded-lg bg-adomate-cream"
        >
          <i class="fab fa-github w-32 h-32 my-2 mx-2"></i>
          <i class="fa-brands fa-google w-32 h-32 my-2 mx-2"></i>
          <i class="fa-brands fa-facebook w-32 h-32 my-2 mx-2"></i>
          <i class="fa-brands fa-apple w-32 h-32 my-2 mx-2"></i>
          <i class="fa-brands fa-aws w-32 h-32 my-2 mx-2"></i>
          <i class="fa-brands fa-spotify w-32 h-32 my-2 mx-2"></i>
        </div>
      </div>
    </FadeIn>
    <FadeIn>
      <div class="flex flex-wrap justify-center pt-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div
            v-for="(review, idx) in Reviews"
            :key="idx"
            class="justify-center"
          >
            <div class="flex flex-col justify-center items-center">
              <img
                :src="review.image"
                class="rounded-full w-32 h-32"
                alt="reviewer"
              />
              <h1 class="text-xl font-semibold pt-4">{{ review.name }}</h1>
              <h2 class="text-sm font-semibold">{{ review.role }}</h2>
              <h3 class="text-sm font-semibold">{{ review.company }}</h3>
              <p class="text-center px-4">{{ review.review }}</p>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
    <FadeIn>
      <div class="flex justify-center">
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

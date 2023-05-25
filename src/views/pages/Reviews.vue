<template>
  <div id="reviews">
    <FadeIn>
      <div class="w-full flex place-items-center flex-col">
        <h1
          class="text-4xl xl:text-5xl font-semibold subpixel-antialiased text-center pt-10 px-5"
        >
          We are trusted by over
          <strong>100+</strong>
          businesses to run their ads
        </h1>
        <p class="text-l text-center pt-6 px-5 mx-10">
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
          <strong class="h-full w-full">Our Esteemed Partners</strong>
        </p>
      </div>
      <div class="flex justify-center pt-6">
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-center pt-8 pb-4 px-4 rounded-lg"
        >
          <img
            v-for="(icon, index) in icons"
            :key="index"
            :src="icon"
            class="w-32 h-32 my-2 mx-2 object-contain"
          />
        </div>
      </div>
    </FadeIn>
    <FadeIn>
      <div class="max-w-7xl mx-auto px-5 sm:px-10 p-4">
        <h2
          class="text-gray-900 text-xl lg:text-3xl font-bold max-w-2xl lg:leading-tight mb-5 mt-10"
        >
          Driving Unprecedented Success
        </h2>
        <p class="text-lg lg:text-xl text-gray-500 mb-8">
          Whether you're a dynamic startup seeking rapid expansion or a seasoned
          industry titan aiming to maintain a competitive edge in a cutthroat
          market, Adomate is equipped with a comprehensive range of services
          meticulously tailored to meet your unique needs. Our strategies are
          born from an innate understanding of the evolving digital realm,
          ensuring that your brand will not only stand out but also flourish in
          the face of adversity.
        </p>
      </div>
    </FadeIn>
    <FadeIn>
      <div class="container mx-auto px-6">
        <h1
          class="text-4xl xl:text-5xl font-semibold subpixel-antialiased text-center pt-10 px-5"
        >
          <strong class="h-full w-full">Client Success Stories</strong>
        </h1>
        <FadeIn>
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
        </FadeIn>
      </div>
    </FadeIn>
    <FadeIn>
      <div class="max-w-7xl mx-auto px-5 sm:px-10 p-4">
        <h2
          class="text-gray-900 text-xl lg:text-3xl font-bold max-w-2xl lg:leading-tight mb-5 mt-10"
        >
          Revolutionizing Online Advertising
        </h2>
        <p class="text-lg lg:text-xl text-gray-500 mb-8">
          As Adomate expands its reach and serves a growing number of
          businesses, we are resolute in our conviction to revolutionize the
          online advertising landscape. With our innovative strategies,
          cutting-edge technology, and a team of dedicated experts, we are
          poised to reshape how businesses advertise online. Whether you're a
          startup seeking rapid expansion or an established company aiming to
          stay ahead in a competitive market, our comprehensive range of
          services is designed to meet your unique needs. Trust us to deliver
          exceptional results, propelling your business to new heights of
          success and growth.
        </p>
      </div>
    </FadeIn>
    <FadeIn>
      <div class="flex justify-center px-6 py-4">
        <h1
          class="text-4xl xl:text-5xl font-semibold subpixel-antialiased text-center pt-10 px-5"
        >
          <strong class="h-full w-full">Testimonials</strong>
        </h1>
      </div>
      <div class="flex justify-center mt-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5">
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
          class="arrow-button border-2 border-[#637EFE] shadow mt-10 mb-10 lg:mb-0"
        >
          <a href="https://youtu.be/dQw4w9WgXcQ">
            See More <i class="fas fa-arrow-right"></i>
          </a>
        </button>
      </div>
    </FadeIn>
    <FadeIn>
      <div class="max-w-7xl mx-auto px-5 sm:px-10 p-4">
        <h2
          class="text-gray-900 text-xl lg:text-3xl font-bold max-w-2xl lg:leading-tight mb-5 mt-10"
        >
          Empowering Business Goals
        </h2>
        <p class="text-lg lg:text-xl text-gray-500 mb-8">
          As we forge ahead, our unwavering commitment to delivering
          unparalleled results remains steadfast. We are driven by the pursuit
          of exponential growth and providing businesses with a distinct
          competitive edge in the ever-evolving digital marketplace. The
          testimonials from our satisfied clients stand as a testament to our
          ability to deliver on our promises and make a lasting impact on their
          bottom line.
        </p>
        <h2
          class="text-gray-900 text-xl lg:text-3xl font-bold max-w-2xl lg:leading-tight mb-5 mt-10"
        >
          Join the Adomate Community Today
        </h2>
        <p class="text-lg lg:text-xl text-gray-500 mb-8">
          Unleash the potential of online advertising, join us in redefining
          possibilities and seizing remarkable opportunities for your brand.
          Contact us today to learn more about our services or create an account
          and embark on your journey towards success.
        </p>
      </div>
    </FadeIn>
  </div>
</template>

<script lang="ts" setup>
import FadeIn from "@/components/FadeIn.vue";
import Reviews from "@/data/reviews";
import Testimonials from "@/data/testimonials";

const icons: string[] = [
  "https://adomate.ai/logo.png",
  "https://adomate.ai/logo.png",
  "https://adomate.ai/logo.png",
  "https://adomate.ai/logo.png",
  "https://adomate.ai/logo.png",
  "https://adomate.ai/logo.png",
  "https://adomate.ai/logo.png",
  "https://adomate.ai/logo.png",
  "https://adomate.ai/logo.png",
  "https://adomate.ai/logo.png",
  "https://adomate.ai/logo.png",
  "https://adomate.ai/logo.png",
];
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

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
          class="text-4xl xl:text-5xl font-semibold subpixel-antialiased text-center pt-10 px-5 pb-5"
        >
          <strong class="h-full w-full">Our Esteemed Partners</strong>
        </p>
      </div>
      <div class="flex justify-center pt-6 bg-gray-100">
        <div class="flex flex-col items-center sm:flex-row justify-center">
          <div class="sm:w-1/2 p-4 flex items-center">
            <div>
              <p class="text-l text-center pt-2 px-5 mx-10 text-gray-500">
                We are proud to collaborate with some of the most innovative and
                industry-leading brands globally. Our partners place their trust
                in us to deliver exceptional results, and we are dedicated to
                ensuring their continued success.
              </p>
              <p class="text-l text-center pt-2 px-5 mx-10 text-gray-500">
                As a Responsible Advertising Agency, we prioritize brand safety
                and protection. We implement robust measures to ensure that our
                partners' brands are shielded and their advertisements are
                displayed within a secure environment, fostering trust and
                confidence among their target audience. We are committed to
                providing our partners with the highest level of service, and we
                are constantly striving to improve our offerings to meet their
                evolving needs.
              </p>
              <div class="flex justify-center mt-5 mb-5">
                <button
                  class="arrow-button border-2 border-[#637EFE] shadow lg:mb-0"
                >
                  Learn More About How We Work With Our Partners
                </button>
              </div>
            </div>
          </div>
          <div
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center pt-8 pb-4 px-4 rounded-lg"
          >
            <img
              v-for="(icon, index) in icons"
              :key="index"
              :src="icon"
              class="w-32 h-32 my-2 mx-2 object-contain"
            />
          </div>
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
          Whether you're a dynamic startup on the path to rapid expansion or a
          seasoned industry titan aiming to maintain your competitive edge,
          Adomate is here to empower your success. Our comprehensive range of
          services is meticulously tailored to meet your unique needs, providing
          you with everything you need to excel in the digital realm. With
          Adomate by your side, your brand will not only stand out but also
          flourish, as we leverage our deep understanding of the digital
          landscape to propel your growth. Trust us to deliver unparalleled
          results and elevate your brand to new heights of success.
        </p>
      </div>
    </FadeIn>
    <FadeIn>
      <div class="container mx-auto px-6">
        <h1
          class="text-4xl xl:text-5xl font-semibold subpixel-antialiased text-center pt-5 px-5"
        >
          <strong class="h-full w-full">Client Reviews </strong>
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
      <div class="flex justify-center pt-6">
        <p
          class="text-4xl xl:text-5xl font-semibold subpixel-antialiased text-center pt-10 px-5 pb-5"
        >
          <strong class="h-full w-full">
            Revolutionizing Online Advertising
          </strong>
        </p>
      </div>
      <div class="flex justify-center pt-6 bg-gray-100">
        <div class="flex flex-col items-center sm:flex-row justify-center">
          <div class="sm:w-1/2 p-4 flex items-center">
            <div>
              <p class="text-l text-center pt-2 px-5 mx-10 text-gray-500">
                As Adomate expands its reach and serves a growing number of
                businesses, we are resolute in our conviction to revolutionize
                the online advertising landscape. With our innovative
                strategies, cutting-edge technology, and a team of dedicated
                experts, we are poised to reshape how businesses advertise
                online. Whether you're a startup seeking rapid expansion or an
                established company aiming to stay ahead in a competitive
                market, our comprehensive range of services is designed to meet
                your unique needs. Trust us to deliver exceptional results,
                propelling your business to new heights of success and growth.
              </p>
              <p class="text-l text-center pt-2 px-5 mx-10 text-gray-500">
                Watch the video from our team to learn more about how Adomate is
                poised to revolutionize the online advertising landscape.
              </p>
            </div>
          </div>
          <div class="sm:w-1/2 p-5 flex items-center justify-center">
            <video
              class="w-50 h-40 md:w-full md:h-auto"
              controls
              loop
              :src="'src/assets/videos/RevolutionizingOnlineAdvertising.mp4'"
              type="video/mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </FadeIn>
    <FadeIn>
      <div class="flex justify-center px-6 py-4">
        <h1
          class="text-4xl xl:text-5xl font-semibold subpixel-antialiased text-center pt-5 px-5"
        >
          <strong class="h-full w-full">Featured Stories</strong>
        </h1>
      </div>
      <div class="flex justify-center mt-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5">
          <div v-for="(testimonial, idx) in Testimonials" :key="idx">
            <div class="max-w-md">
              <button class="cursor-pointer" @click="open = true">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div class="p-4">
                    <div class="flex items-center mb-4">
                      <img
                        class="w-12 h-12 rounded-full mr-4"
                        :src="testimonial.logo"
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
                    <p class="italic text-gray-700">{{ testimonial.review }}</p>
                  </div>
                </div>
              </button>
              <teleport to="body">
                <div
                  v-if="open"
                  class="fixed inset-0 flex items-center justify-center z-50 px-4 py-6 sm:px-0 sm:py-0"
                >
                  <div
                    class="bg-gray-200 bg-opacity-100 rounded-lg w-3/4 max-w-4xl h-3/4 max-h-3/4 sm:w-2/3 sm:max-w-md md:w-1/2 md:max-w-lg lg:w-1/3 lg:max-w-xl xl:w-2/5 xl:max-w-3xl px-4 py-6"
                  >
                    <div class="p-4 flex flex-col items-center h-full">
                      <h2 class="text-xl font-semibold text-dark-purple">
                        {{ testimonial.company }}
                      </h2>
                      <img
                        :src="testimonial.image"
                        class="w-24 h-24 object-cover rounded-full"
                      />
                      <div
                        class="flex-grow overflow-y-auto mt-8 custom-scrollbar"
                      >
                        <p class="text-black">{{ testimonial.testimonial }}</p>
                      </div>
                      <div class="mt-auto">
                        <button
                          class="arrow-button border-[#637EFE] mt-6 lg:mt-8 justify-center"
                          @click="open = false"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </teleport>
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
import { ref } from "vue";
import Reviews from "@/data/reviews";
import Testimonials from "@/data/testimonials";

const open = ref(false);

const icons: string[] = [
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

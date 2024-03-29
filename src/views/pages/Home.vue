<template>
  <!-- Landing Section -->
  <fade-in :threshold="0.1">
    <div
      id="landing-page"
      ref="viewableTarget"
      class="bg-extra-light-purple pb-0 md:pb-20 lg:pb-0 pt-1"
    >
      <div class="container mx-auto px-4 md:px-12 mt-10 md:mt-10 pb-10">
        <div
          class="flex flex-col lg:flex-row md:items-center md:justify-between h-auto md:h-[600px]"
        >
          <div class="lg:w-1/2 lg:pr-20">
            <h1
              class="text-4xl pb-5 lg:text-6xl text-center font-bold tracking-wide mb-4 subpixel-antialiased md:text-left"
            >
              Automated Ad Campaigns
            </h1>
            <div class="xl:flex flex-row space-x-2 justify-start hidden">
              <!-- desktop animated header -->
              <h2
                class="text-lg lg:text-xl text-gray-700 mb-4 md:mb-10 fade-in"
              >
                Built on fundamentals.
              </h2>
              <h2
                class="text-lg lg:text-xl text-gray-700 mb-4 md:mb-10 fade-in delayed"
              >
                Fueled by data.
              </h2>
              <h2
                class="text-lg lg:text-xl text-gray-700 mb-4 md:mb-10 fade-in delayed2"
              >
                Driven by machines.
              </h2>
            </div>
            <h2
              class="text-lg flex justify-center text-start xl:text-center xl:hidden text-gray-700 mb-4 xl:mb-10"
            >
              Built on fundamentals. Fueled by data. Driven by machines.
            </h2>
            <div class="flex flex-col lg:flex-row mb-4 lg:mb-10 items-center">
              <router-link
                class="shadow bg-dark-purple text-white font-semibold tracking-wide px-4 py-4 rounded mb-4 lg:mr-5 lg:mb-0 hover:bg-white hover:text-dark-purple transition hover:-translate-y-1"
                to="/get-started"
              >
                Get Started
                <i class="fa-solid fa-arrow-right ml-2"></i>
              </router-link>
              <router-link
                to="/services"
                class="bg-transparent text-black px-8 rounded-lg"
              >
                <i class="fa-solid fa-play mx-1 text-dark-purple"></i>
                Learn More
              </router-link>
            </div>
            <div class="hidden lg:flex flex-col lg:flex-row">
              <div class="flex items-center mr-10">
                <i
                  class="shadow fa-solid fa-money-bill text-dark-purple mr-2 p-3 bg-white rounded-full h-6 w-6"
                ></i>
                <div>
                  <h4
                    class="text-lg md:text-3xl font-bold text-dark-purple -mb-2"
                  >
                    +13k
                  </h4>
                  <span class="text-gray-700 text-sm">Dollars Spent</span>
                </div>
              </div>
              <div class="flex items-center">
                <i
                  class="shadow fa-solid fa-building text-dark-purple mr-2 p-3 bg-white rounded-full h-6 w-6"
                ></i>
                <div>
                  <h4
                    class="text-lg md:text-3xl font-bold text-dark-purple -mb-2"
                  >
                    +1,500
                  </h4>
                  <span class="text-gray-700 text-sm">Companies</span>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-3/4 lg:w-1/2 pt-10 pb-10 px-5">
            <fade-in :delay="0.2">
              <div
                class="ring-2 ring-dark-purple ring-offset-4 ring-offset-transparent rounded-3xl z-0"
              >
                <img
                  rel="prefetch"
                  src="@/assets/home/dashboard.png"
                  class="rounded-3xl relative left-5 bottom-5 z-20 drop-shadow-xl"
                />
              </div>
            </fade-in>
          </div>
          <div class="flex flex-row justify-center lg:hidden">
            <div class="flex items-center mr-10">
              <i
                class="fa-solid fa-money-bill text-dark-purple mr-2 p-3 bg-white rounded-full h-6 w-6"
              ></i>
              <div>
                <h4
                  class="text-lg md:text-3xl font-bold text-dark-purple -mb-2"
                >
                  +13k
                </h4>
                <span class="text-gray-700 text-sm">Dollars Spent</span>
              </div>
            </div>
            <div class="flex items-center">
              <i
                class="fa-solid fa-building text-dark-purple mr-2 p-3 bg-white rounded-full h-6 w-6"
              ></i>
              <div>
                <h4
                  class="text-lg md:text-3xl font-bold text-dark-purple -mb-2"
                >
                  +1,500
                </h4>
                <span class="text-gray-700 text-sm">Companies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </fade-in>

  <!-- How it works section -->
  <fade-in>
    <div id="built-exclusively-for-you">
      <div class="container flex mx-auto px-12 my-32">
        <div class="md:flex md:flex-row">
          <div class="md:w-1/2">
            <div class="col-span-3">
              <div class="flex justify-start md:justify-start">
                <div
                  class="shadow bg-extra-light-purple text-dark-purple rounded-full"
                >
                  <p class="py-3 px-6">Build Exclusively For You</p>
                </div>
              </div>
              <h2 class="mt-3 text-4xl font-bold mb-4">
                From start to finish, we have you covered.
              </h2>
              <p
                class="text-slate-700 text-lg pb-10 border-dashed border-b-2 border-light-purple"
              >
                From start to finish, we've got your campaigns covered.
                Utilizing techniques like web scraping and keyword prediction,
                we gather your website data, optimize our bidding process in
                real-time, target high-performing keywords, and boost conversion
                rates through analytics tools.
              </p>
              <div class="grid grid-cols-2 gap-x-2 px-1 my-10 gap-y-10">
                <div>
                  <h4>
                    <i class="fa-solid fa-file mr-2 text-dark-purple"></i>
                    <span class="font-semibold text-lg mt-1">Tailored Ads</span>
                  </h4>
                  <p class="text-slate-700 m-1 text-md">
                    Our platform generates unique and engaging ad designs
                    tailored to your business.
                  </p>
                </div>
                <div>
                  <h4>
                    <i
                      class="fa-solid fa-chart-simple mr-2 text-dark-purple"
                    ></i>
                    <span class="font-semibold text-lg mt-1"
                      >Monthly Reports</span
                    >
                  </h4>
                  <p class="text-slate-700 m-1 text-md">
                    Monitor key metrics, track progress, and stay current with
                    real-time analytics.
                  </p>
                </div>
                <div>
                  <h4>
                    <i class="fa-solid fa-plus mr-2 text-dark-purple"></i>
                    <span class="font-semibold text-lg mt-1"
                      >Automatic Optimization</span
                    >
                  </h4>
                  <p class="text-slate-700 m-1 text-md">
                    Hassle-free campaign optimization with our advanced
                    algorithms.
                  </p>
                </div>
                <div>
                  <h4>
                    <i class="fa-solid fa-arrow-up mr-2 text-dark-purple"></i>
                    <span class="font-semibold text-lg mt-1">Bot Blocking</span>
                  </h4>
                  <p class="text-slate-700 m-1 text-md">
                    Safeguard your ad spend by preventing bots from clicking on
                    your ads and wasting valuable resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="md:w-1/2 md:flex md:justify-center md:items-center my-10 md:my-20"
          >
            <lottie-player
              src="https://raw.githubusercontent.com/adomate-ads/frontend/master/src/assets/lottie/AdomateGetStarted.json"
              style="max-width: 100%; height: auto; max-height: 80vh"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </div>
  </fade-in>

  <!--Plans Section-->
  <fade-in>
    <div id="plans">
      <div
        class="container mx-auto px-8 lg:px-20 my-32 flex flex-col items-center"
      >
        <h3 class="text-4xl md:text-6xl font-bold text-center">
          Choose The Best Plan For You
        </h3>
        <div>
          <div class="flex justify-center mt-10">
            <div class="flex items-center">
              <div class="mr-2 text-gray-700">Billed Monthly</div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input v-model="monthly" type="checkbox" class="sr-only peer" />
                <span
                  class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-light-purple"
                ></span>
              </label>
              <div class="ml-2 text-gray-700">
                Billed Annually <span class="text-gray-900">(-10%)</span>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-10 flex flex-col lg:flex-row gap-x-6 justify-center">
          <div
            v-for="(plan, idx) in Plans"
            :key="idx"
            class="w-full sm:w-auto py-5 transition ease-in-out delay-100 hover:scale-105 duration-200"
          >
            <fade-in :delay="(idx + 1) / 5">
              <LargePlans :plan="plan" :monthly="monthly" />
            </fade-in>
          </div>
        </div>
      </div>
    </div>
  </fade-in>

  <!--  Call to Action  -->
  <fade-in>
    <div id="try-it-out">
      <div class="container mx-auto my-32">
        <div
          class="shadow bg-extra-light-purple rounded-lg w-full md:w-4/5 xl:w-2/3 mx-auto py-10 px-10"
        >
          <div class="flex flex-col md:flex-row">
            <div>
              <h3 class="text-4xl font-bold py-3">Try it out</h3>
              <p class="text-gray-500">
                Enter your URL below to see how an ad would look for your
                website.
              </p>
              <form class="mt-3 py-3">
                <label
                  for="url"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >URL</label
                >
                <div class="relative">
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                  >
                    <i class="fa-solid fa-tv"></i>
                  </div>
                  <input
                    id="url"
                    v-model="url"
                    type="url"
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-light-purple focus:outline-2 focus:outline-offset-0 focus:outline-light-purple outline-none"
                    placeholder="adomate.ai"
                    required
                  />
                  <button
                    v-if="url.length === 0"
                    class="text-white absolute right-2.5 bottom-2.5 bg-light-purple focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                    disabled
                  >
                    <i class="fa-solid fa-arrow-right"></i>
                  </button>
                  <router-link
                    v-else
                    :to="`/get-started?URL=${url}`"
                    class="text-white absolute right-2.5 bottom-2.5 bg-dark-purple focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                  >
                    <i class="fa-solid fa-arrow-right"></i>
                  </router-link>
                </div>
              </form>
            </div>
            <div
              class="flex justify-center items-center mt-5 md:mt-0 md:ml-10 lg:ml-20"
            >
              <div class="flex flex-col gap-4">
                <img
                  src="@/assets/adomate_search_ad.png"
                  alt="Your Search Ad Preview"
                  class="rounded-xl shadow-xl"
                />
                <!-- <img
                  src="@/assets/adomate_shopping_ad.png"
                  alt="Your Shopping Ad Preview"
                  class="rounded-xl shadow-xl"
                /> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </fade-in>
</template>

<script lang="ts" setup>
import FadeIn from "@/components/FadeIn.vue";
import LargePlans from "@/components/plans/LargePlans.vue";
import Plans from "@/data/plans";
import { ref } from "vue";

const url = ref<string>("");
const monthly = ref<boolean>(true);
</script>
<style scoped>
#landing-page {
  background-image: url("@/assets/home/bg-pill.svg");
  background-repeat: no-repeat;
  background-size: 900px;
  background-position: 80% -25%;
}
</style>

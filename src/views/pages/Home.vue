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
          <div class="lg:w-7/12 lg:pr-20">
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
            <div class="flex flex-col lg:flex-row mb-4 lg:mb-10">
              <button
                class="shadow bg-dark-purple text-white font-semibold tracking-wide px-4 py-4 rounded mb-4 lg:mr-5 lg:mb-0 hover:bg-white hover:text-dark-purple transition hover:-translate-y-1"
              >
                Get Started
                <i class="fa-solid fa-arrow-right ml-2"></i>
              </button>
              <button class="bg-transparent text-black px-8 rounded-lg">
                <i class="fa-solid fa-play mx-1 text-dark-purple"></i>
                Learn More
              </button>
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
          <div class="w-full md:w-3/4 lg:w-5/12 pt-10 pb-10 px-5">
            <fade-in :delay="0.2">
              <div
                class="ring-2 ring-dark-purple ring-offset-4 ring-offset-transparent rounded-3xl z-0"
              >
                <img
                  rel="prefetch"
                  src="@/assets/home/banner.png"
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
  <fade-in :threshold="0.4">
    <div id="how-it-works">
      <div class="container mx-auto px-12 my-32">
        <div class="flex flex-col justify-center md:flex-row">
          <div class="px-5">
            <h2
              class="text-4xl text-center md:text-6xl md:text-left font-bold mb-10"
            >
              How It Works
            </h2>
            <p class="text-gray-700 mb-10">
              Do your thing 21, do you thing. Do your thing 21 do you thing. I
              like girls who are boys - Raaj
            </p>
          </div>
          <div class="m-5 border-b-2">
            <i
              class="shadow fa-solid fa-database text-black mt-2 mb-2 p-6 bg-gray-200 rounded-full h-8 w-8"
            ></i>
            <h2 class="text-2xl font-bold mb-2">1. Data Parser</h2>
            <p class="text-gray-700 mb-10 text-justify">
              We start by collecting your website info... scraping, scanning,
              keyword prediction whatever.
            </p>
          </div>
          <div class="m-5 border-b-2">
            <i
              class="shadow fa-solid fa-chart-line text-black mt-2 mb-2 p-6 bg-gray-200 rounded-full h-8 w-8"
            ></i>
            <h2 class="text-2xl font-bold mb-2">2. Optimized Bidding</h2>
            <p class="text-gray-700 mb-10 text-justify">
              We optimizing our bidding process... We optimizing our bidding
              process... We optimizing our bidding process...
            </p>
          </div>
          <div class="m-5 border-b-2">
            <i
              class="shadow fa-solid fa-chart-simple text-black mt-2 mb-2 p-6 bg-gray-200 rounded-full h-8 w-8"
            ></i>
            <h2 class="text-2xl font-bold mb-2">3. Analytics</h2>
            <p class="text-gray-700 mb-10 text-justify">
              We check to see which keywords are converting the most and target
              those, or something like that...
            </p>
          </div>
        </div>
      </div>
    </div>
  </fade-in>

  <!--  Build Exclusively For You  -->
  <fade-in>
    <div id="built-exclusively-for-you">
      <div class="container mx-auto px-12 my-32">
        <div class="flex flex-col justify-center w-full md:flex-row md:w-1/2">
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
              class="text-slate-700 text-lg pb-16 border-dashed border-b-2 border-light-purple"
            >
              We start by collecting your website info... scraping, scanning,
              keyword prediction whatever. We optimizing our bidding process...
              We optimizing our bidding process... We optimizing our bidding
              process... We check to see which keywords are converting the most
              and target those, or something like that...
            </p>
            <div class="grid grid-cols-2 gap-x-2 px-1 my-10 gap-y-10">
              <div>
                <h4>
                  <i class="fa-solid fa-file mr-2 text-dark-purple"></i>
                  <span class="font-semibold text-lg mt-1"
                    >Monthly Reports</span
                  >
                </h4>
                <p class="text-slate-700 m-1 text-md">
                  Fully featured, monthly reports allow you to blah blah blah...
                </p>
              </div>
              <div>
                <h4>
                  <i class="fa-solid fa-chart-simple mr-2 text-dark-purple"></i>
                  <span class="font-semibold text-lg mt-1">Real Analytics</span>
                </h4>
                <p class="text-slate-700 m-1 text-md">
                  Live Analytics allow you to stay updated on the latest trends,
                  events and more...
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
                  Using our algorithm, we automatically optimize your campaigns,
                  increasing performance by upto XX%.
                </p>
              </div>
              <div>
                <h4>
                  <i class="fa-solid fa-arrow-up mr-2 text-dark-purple"></i>
                  <span class="font-semibold text-lg mt-1"
                    >SEO Optimizations</span
                  >
                </h4>
                <p class="text-slate-700 m-1 text-md">
                  We stay up to date on the latest recommendations by google and
                  parse your website daily allowing for you to stay focused on
                  your customers while we focus on your website.
                </p>
              </div>
            </div>
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
              <div class="ml-2 text-gray-700">Billed Annually</div>
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
      <div class="container mx-auto px-12 my-32">
        <div
          class="shadow bg-extra-light-purple rounded-lg w-full md:w-2/3 mx-auto py-10 px-14"
        >
          <div class="flex flex-col md:flex-row">
            <div>
              <h3 class="text-4xl font-bold py-3">Try it out</h3>
              <p class="text-gray-500">
                By clicking the button you agree to our TOS.
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
                    type="url"
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-light-purple focus:outline-2 focus:outline-offset-0 focus:outline-light-purple outline-none"
                    placeholder="example.com"
                    required
                  />
                  <button
                    type="submit"
                    class="text-white absolute right-2.5 bottom-2.5 bg-dark-purple focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                  >
                    <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </form>
            </div>
            <div>Image will go here of how a search ad might appear</div>
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

const monthly = ref(true);
</script>
<style scoped>
#landing-page {
  background-image: url("@/assets/home/bg-pill.svg");
  background-repeat: no-repeat;
  background-size: 900px;
  background-position: 80% -25%;
}
</style>

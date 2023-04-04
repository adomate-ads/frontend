<template>
  <div class="bg-adomate-off-white">
    <div
      class="text-center mx-auto bg-light-purple h-[550px] px-2"
      style="
        clip-path: polygon(0 0, 5760px 0, 5760px calc(100% - 352px), 0 100%);
      "
    >
      <div class="pt-20">
        <h1
          class="text-5xl lg:text-6xl font-bold tracking-wide mb-4 subpixel-antialiased text-adomate-off-black"
        >
          Find the right plan for<br />
          your business
        </h1>
      </div>
      <div>
        <div class="flex justify-center mt-10">
          <div class="flex items-center">
            <div class="mr-2 text-gray-700">Billed Monthly</div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input v-model="monthly" type="checkbox" class="sr-only peer" />
              <span
                class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-dark-purple"
              ></span>
            </label>
            <div class="ml-2 text-gray-700">
              Billed Annually <span class="text-gray-900">(-8%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Plans-->
    <div class="-mt-64 mb-5 justify-center">
      <div
        class="flex lg:flex-row flex-col lg:gap-x-6 px-5 md:justify-center place-items-center"
      >
        <div
          v-for="plan in Plans"
          :key="plan.name"
          class="w-auto drop-shadow-xl py-5 transition ease-in-out delay-50 hover:scale-105 duration-200 z-10"
        >
          <LargePlans :plan="plan" :monthly="monthly" />
        </div>
      </div>
    </div>
    <div
      class="w-2/3 bg-adomate-off-white mx-auto drop-shadow-xl p-8 lg:flex justify-between hidden"
    >
      <div class="">
        <p class="text-xs font-bold text-extra-dark-purple">Custom Solution</p>
        <h4 class="text-adomate-off-black font-semibold text-2xl">
          Launched a business that doesn't fit the plans above?
        </h4>
      </div>
      <button
        class="shadow bg-dark-purple text-white font-semibold tracking-wide px-4 py-4 rounded mb-4 lg:mr-5 lg:mb-0 hover:bg-white hover:text-dark-purple transition hover:-translate-y-1"
      >
        Contact Us
        <i class="fa-solid fa-arrow-right ml-2"></i>
      </button>
    </div>
    <div
      class="w-3/4 bg-adomate-off-white mx-auto drop-shadow-xl p-8 flex justify-between lg:hidden"
    >
      <div class="">
        <p class="text-xs font-bold text-extra-dark-purple">Custom Solution</p>
        <h4 class="text-adomate-off-black font-semibold text-2xl">
          Launched a business that doesn't fit the plans above?
        </h4>
      </div>
      <button
        class="shadow bg-dark-purple text-white font-semibold text-center tracking-wide px-5 my-auto py-5 rounded hover:bg-white hover:text-dark-purple transition hover:-translate-y-1"
      >
        Contact Us
        <i class="fa-solid fa-arrow-right ml-2"></i>
      </button>
    </div>

    <div class="bg-gray-100 text-center justify-center -mt-14 pt-32 pb-20">
      <h3 class="text-4xl lg:text-4xl font-bold text-adomate-off-blac px-20">
        It's easy to add extra benefits to all of our plans.
      </h3>
      <div
        class="flex lg:flex-row flex-col lg:gap-x-10 gap-y-10 justify-center place-items-center align-items-center items-center mt-16"
      >
        <div
          v-for="x in 3"
          :key="x"
          class="justify-center text-center lg:justify-left lg:text-left max-w-[380px]"
        >
          <div
            class="rounded-full h-12 w-12 bg-adomate-navy text-adomate-off-white lg:mx-0 mx-auto text-center align-middle my-2"
          >
            <i class="fa-regular fa-star pt-4"></i>
          </div>
          <h5 class="text-adomate-off-black text-2xl font-semibold">
            Smart Bidding
          </h5>
          <p class="text-gray-600">
            We'll help you set up and optimize your campaigns for the best
            results.
          </p>
          <p class="font-semibold mt-2">
            From $5/mo per campaign. No setup fee
          </p>
        </div>
      </div>
    </div>

    <div class="text-center py-10 lg:py-20 justify-center px-10">
      <h3
        class="text-4xl lg:text-5xl font-bold text-adomate-off-black py-6 md:py-12 px-5"
      >
        Compare Plans by Features
      </h3>
      <div class="flex flex-col max-w-4xl mx-auto divide-y divide-gray-300">
        <div
          class="flex flex-row justify-between border-b-2 border-gray-300 pb-2"
        >
          <h4 class="text-lg md:text-2xl font-bold text-adomate-off-black">
            Adomate Features
          </h4>
          <div class="flex gap-x-4 md:gap-x-16">
            <div class="w-24 md:w-32">
              <h5
                class="text-base md:text-xl text-adomate-off-black font-semibold"
              >
                Starter
              </h5>
            </div>
            <div class="w-24 md:w-32">
              <h5
                class="text-base md:text-xl text-adomate-off-black font-semibold"
              >
                Business
              </h5>
            </div>
            <div class="w-24 md:w-32">
              <h5
                class="text-base md:text-xl text-adomate-off-black font-semibold"
              >
                Enterprise
              </h5>
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-between py-2">
          <h4 class="font-semibold text-adomate-off-black">Monthly Fee</h4>
          <div class="flex gap-x-4 md:gap-x-16">
            <div class="w-24 md:w-32 text-center">
              <h5 class="text-base md:text-lg text-adomate-off-black">
                $20/mo
              </h5>
            </div>
            <div class="w-24 md:w-32 text-center">
              <h5 class="text-base md:text-lg text-adomate-off-black">
                $50/mo
              </h5>
            </div>
            <div class="w-24 md:w-32 text-center">
              <h5 class="text-base md:text-lg text-adomate-off-black">
                $250/mo
              </h5>
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-between py-2">
          <h4 class="font-semibold text-adomate-off-black">
            Search Ad Generation
          </h4>
          <div class="flex gap-x-4 md:gap-x-16">
            <div class="w-24 md:w-32 text-center">
              <i class="fa-solid fa-check text-green-500"></i>
            </div>
            <div class="w-24 md:w-32 text-center">
              <i class="fa-solid fa-check text-green-500"></i>
            </div>
            <div class="w-24 md:w-32 text-center">
              <i class="fa-solid fa-check text-green-500"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="text-center py-10 lg:py-20 mx-auto justify-center max-w-[1000px] px-10"
    >
      <h3 class="text-4xl lg:text-5xl font-bold text-adomate-off-black py-12">
        Frequently Asked Questions
      </h3>
      <div>
        <div v-for="(faq, idx) in faqs" :key="idx">
          <h2 id="accordion-flush-heading-1">
            <button
              type="button"
              class="flex items-center justify-between w-full py-5 font-medium text-lg text-left text-gray-500 border-b border-gray-200"
              @click="faq.selected = !faq.selected"
            >
              <span class="text-adomate-off-black text-lg">
                {{ faq.question }}
              </span>
              <div v-if="faq.selected" class="text-dark-purple">
                <i class="fa-solid fa-chevron-up"></i>
              </div>
              <div v-else>
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </button>
          </h2>
          <div :class="[faq.selected ? '' : 'hidden']">
            <div class="py-5 border-b border-gray-200 text-left">
              <p class="mb-2 text-gray-500">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import FAQs from "@/faqs";
import LargePlans from "@/components/plans/LargePlans.vue";
import Plans from "@/plans";

import { reactive, ref } from "vue";

const monthly = ref(false);

const faqs = reactive(FAQs);
</script>

<style scoped></style>

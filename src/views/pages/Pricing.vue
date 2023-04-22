<template>
  <div class="bg-adomate-off-white">
    <fade-in>
      <div
        class="text-center mx-auto bg-light-purple h-[550px]"
        style="
          clip-path: polygon(0 0, 5760px 0, 5760px calc(100% - 352px), 0 100%);
        "
      >
        <div class="pt-20">
          <h1
            class="text-6xl font-bold tracking-wide mb-4 subpixel-antialiased text-adomate-off-black"
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
                Billed Annually <span class="text-gray-900">(-10%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </fade-in>

    <fade-in :delay="0.1">
      <div class="-mt-40 lg:-mt-64 mb-5 justify-center">
        <div class="flex flex-col lg:flex-row gap-x-6 justify-center">
          <div
            v-for="(plan, idx) in Plans"
            :key="idx"
            class="w-full drop-shadow-xl sm:w-auto py-5 transition ease-in-out delay-100 hover:scale-105 duration-200 z-10"
          >
            <fade-in :delay="(idx + 1) / 5 + 0.1">
              <LargePlans :plan="plan" :monthly="monthly" />
            </fade-in>
          </div>
        </div>
      </div>
    </fade-in>
    <fade-in>
      <div
        class="w-4/5 lg:w-2/3 bg-adomate-off-white mx-auto drop-shadow-xl p-8 flex justify-between overflow-auto"
      >
        <div>
          <p class="text-xs font-bold text-extra-dark-purple">
            Custom Solution
          </p>
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
    </fade-in>

    <div class="bg-gray-100 text-center justify-center -mt-14 pt-32 pb-20">
      <fade-in>
        <h3 class="text-5xl font-bold text-adomate-off-black px-5">
          It's easy to add extra benefits to all of our plans
        </h3>
        <div class="flex flex-row gap-x-5 justify-center mt-16 px-5">
          <div
            v-for="x in 3"
            :key="x"
            class="justify-center text-center lg:text-left max-w-[380px]"
          >
            <div
              class="rounded-full h-12 w-12 bg-adomate-navy text-adomate-off-white text-center align-middle mx-auto lg:mx-0 my-2"
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
      </fade-in>
    </div>

    <fade-in>
      <div class="text-center py-20 justify-center px-5">
        <h3 class="text-5xl font-bold text-adomate-off-black py-12">
          Compare plans by features
        </h3>
        <div
          class="flex flex-col max-w-[1000px] mx-auto divide-y divide-gray-300"
        >
          <div
            class="flex flex-row items-end justify-between border-b-2 border-gray-300 pb-2"
          >
            <h4 class="text-xl md:text-2xl font-bold text-adomate-off-black">
              Features
            </h4>
            <div class="flex items-center gap-x-12 md:gap-x-20">
              <div class="text-right">
                <h5
                  class="text-l md:text-xl text-adomate-off-black font-semibold"
                >
                  Starter
                </h5>
              </div>
              <div class="text-right">
                <h5
                  class="text-l md:text-xl text-adomate-off-black font-semibold"
                >
                  Business
                </h5>
              </div>
              <div class="text-right">
                <h5
                  class="text-l md:text-xl text-adomate-off-black font-semibold xs:pr-0 sm:pr-4 md:pr-8"
                >
                  Enterprise
                </h5>
              </div>
            </div>
          </div>
          <div
            v-for="(feature, idx) in Features"
            :key="idx"
            class="flex flex-row justify-between items-center py-2"
          >
            <fade-in :delay="(idx + 1) / 5">
              <h4 class="font-semibold text-adomate-off-black text-left">
                {{ feature.title }}
              </h4>
            </fade-in>
            <fade-in :delay="(idx + 1) / 5">
              <div class="flex justify-evenly items-center gap-x-16">
                <div class="text-center flex items-center">
                  <i
                    v-if="feature.starter.checked"
                    class="fa-solid fa-check text-green-500"
                  ></i>
                  <h5 v-else class="text-adomate-off-black">
                    {{ feature.starter.description }}
                  </h5>
                </div>
                <div class="text-center flex items-center">
                  <i
                    v-if="feature.business.checked"
                    class="fa-solid fa-check text-green-500"
                  ></i>
                  <h5 v-else class="text-adomate-off-black">
                    {{ feature.business.description }}
                  </h5>
                </div>
                <div class="text-center flex items-center">
                  <i
                    v-if="feature.enterprise.checked"
                    class="fa-solid fa-check text-green-500"
                  ></i>
                  <h5 v-else class="text-adomate-off-black">
                    {{ feature.enterprise.description }}
                  </h5>
                </div>
              </div>
            </fade-in>
          </div>
        </div>
      </div>
    </fade-in>

    <fade-in>
      <div class="text-center py-20 mx-auto justify-center max-w-[1000px] px-8">
        <h3 class="text-5xl font-bold text-adomate-off-black py-12">
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
    </fade-in>
  </div>
</template>

<script lang="ts" setup>
import FAQs from "@/data/faqs";
import Features from "@/data/features";
import LargePlans from "@/components/plans/LargePlans.vue";
import Plans from "@/data/plans";

import { reactive, ref } from "vue";
import FadeIn from "@/components/FadeIn.vue";

const monthly = ref(true);

const faqs = reactive(FAQs);
</script>

<style scoped></style>

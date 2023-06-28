<template>
  <fade-in :threshold="0">
    <div class="container mx-auto px-4 sm:px-12 mt-10">
      <div
        id="cta"
        class="flex justify-between mb-6 pb-4 place-items-center border-b-2"
      >
        <img
          src="@/assets/adomate.svg"
          class="h-[40px] md:h-[50px] py-2"
          alt="Footer-Logo"
        />
        <div class="flex items-baseline flex-col md:flex-row md:items-center">
          <h3 class="text-l font-semibold pb-3 align-middle md:pb-0">
            Ready to get started?
          </h3>
          <RouterLink to="/signup">
            <button
              class="shadow bg-dark-purple text-white font-semibold tracking-wide px-3 py-3 rounded ml-5 hover:bg-white hover:text-dark-purple border border-dark-purple border-2 transition"
            >
              Create an Account
            </button>
          </RouterLink>
        </div>
      </div>
      <div class="flex items-start flex-col py-5 md:hidden">
        <h1 class="text-2xl font-bold mb-4">Contact</h1>
        <a
          class="text-gray-800 mb-2 hover:underline underline-offset-2"
          href="http://maps.google.com/?q=17350 State Highway 249 STE 220. Houston, Texas 77064"
        >
          17350 State Highway 249 STE 220. Houston, Texas 77064
        </a>
        <p class="text-gray-800 mb-2">(124) 456-7890</p>
        <a
          class="text-gray-800 mb-4 hover:underline underline-offset-2"
          href="mailto:support@adomate.ai"
          >support@adomate.ai</a
        >
      </div>
      <div
        class="grid grid-cols-2 justify-evenly md:flex md:flex-row mb-6 pb-4 border-b-2 md:place-items-stretch"
      >
        <div class="hidden md:block max-w-[300px]">
          <h1 class="text-2xl font-bold mb-4">Contact</h1>
          <fade-in :delay="0.1">
            <a
              class="text-gray-800 mb-4 hover:underline underline-offset-2 break-all"
              href="http://maps.google.com/?q=17350 State Highway 249 STE 220. Houston, Texas 77064"
            >
              17350 State Highway 249 STE 220.<br />
              Houston, Texas 77064
            </a>
          </fade-in>
          <fade-in :delay="0.2">
            <p class="text-gray-800 mb-4">(124) 456-7890</p>
          </fade-in>
          <fade-in :delay="0.3">
            <a
              class="text-gray-800 mb-4 hover:underline underline-offset-2"
              href="mailto:support@adomate.ai"
            >
              support@adomate.ai
            </a>
          </fade-in>
        </div>
        <div v-for="(section, index) in footerLinks" :key="index">
          <h1 class="text-2xl font-bold mb-4">{{ section.title }}</h1>
          <div class="flex flex-col space-y-3 text-gray-700 my-5">
            <span
              v-for="(sublink, subIndex) in section.sublinks"
              :key="subIndex"
            >
              <fade-in :delay="subIndex * 0.1">
                <RouterLink
                  v-if="sublink.to !== undefined"
                  class="pb-1"
                  :to="sublink.to"
                >
                  {{ sublink.title }}
                </RouterLink>
                <a v-else :href="sublink.href" target="_blank">
                  {{ sublink.title }}
                </a>
              </fade-in>
            </span>
          </div>
        </div>
      </div>
      <div
        class="mt-2 text-gray-500 md:flex items-center justify-between pb-10"
      >
        <div class="flex flex-row items-center space-x-4">
          <p class="font-bold text-sm md:text-l px-2">
            © {{ new Date().getFullYear() }}
            <a
              class="hover:underline underline-offset-2"
              href="https://adomate.ai/"
              >Adomate LLC</a
            >
          </p>
          <p class="text-sm color-gray-500">Privacy Policy</p>
          <p class="text-sm color-gray-500">Cookies</p>
          <p class="text-sm color-gray-500">Terms of Service</p>
        </div>
        <div
          class="flex items-center place-content-start flex-row gap-x-4 py-4"
        >
          <div class="shadow bg-dark-purple rounded-full px-2 py-1">
            <a href="https://instagram.com/adomate.ai">
              <i class="fa-brands fa-instagram text-white"></i>
            </a>
          </div>
          <div class="shadow bg-dark-purple rounded-full px-2 py-1">
            <a href="#">
              <i class="fa-brands fa-youtube text-white"></i>
            </a>
          </div>
          <div class="shadow bg-dark-purple rounded-full px-2 py-1">
            <a href="#">
              <i class="fa-brands fa-twitter text-white"></i>
            </a>
          </div>
          <div class="shadow bg-dark-purple rounded-full px-2 py-1">
            <i class="fa-brands fa-linkedin text-white"></i>
          </div>
        </div>
      </div>
    </div>
  </fade-in>
</template>

<script setup lang="ts">
import FadeIn from "@/components/FadeIn.vue";
import { FooterLinks as footerLinks } from "@/data/links";
</script>

<style scoped></style>

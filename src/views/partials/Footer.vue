<template>
  <div class="container mx-auto px-12 mt-10">
    <div
      id="cta"
      class="flex justify-between mb-6 pb-4 items-center border-b-2"
    >
      <img src="@/assets/adomate.png" class="h-[70px]" alt="Footer-Logo" />
      <div class="flex items-center">
        <h3 class="text-xl font-semibold">Ready to get started?</h3>
        <button
          class="bg-dark-purple text-white font-semibold tracking-wide px-4 py-4 rounded ml-5 hover:bg-white hover:text-dark-purple border border-dark-purple border-2 transition"
        >
          Create an Account
        </button>
      </div>
    </div>
    <div class="grid grid-cols-5 space-x-4 mb-6 pb-4 border-b-2">
      <div>
        <h1 class="text-2xl font-bold mb-4">Contact</h1>
        <p class="text-gray-800 mb-4">
          17350 State Highway 249 STE 220. Houston, Texas 77064
        </p>
        <p class="text-gray-800">(124) 123-1234</p>
        <p class="text-gray-800">support@adomate.tech</p>
      </div>
      <div v-for="(section, index) in footerLinks" :key="index">
        <h1 class="text-2xl font-bold mb-4">{{ section.title }}</h1>
        <div class="flex flex-col space-y-3 text-gray-700">
          <span v-for="(sublink, subIndex) in section.sublinks" :key="subIndex">
            <RouterLink v-if="sublink.to !== undefined" :to="sublink.to">
              {{ sublink.title }}
            </RouterLink>
            <p v-else :href="sublink.href">
              {{ sublink.title }}
            </p>
          </span>
        </div>
      </div>
    </div>
    <div class="mt-2 text-gray-500 flex justify-between mb-10">
      <div class="flex flex-row space-x-8">
        <p class="font-semibold">
          © Adomate LLC - {{ new Date().getFullYear() }}
        </p>
        <p>Privacy Policy</p>
        <p>Cookies</p>
        <p>Terms of Service</p>
      </div>
      <div class="flex flex-row space-x-2">
        <div class="bg-dark-purple rounded-full px-2 py-1">
          <i class="fa-brands fa-instagram text-white"></i>
        </div>
        <div class="bg-dark-purple rounded-full px-2 py-1">
          <i class="fa-brands fa-facebook text-white"></i>
        </div>
        <div class="bg-dark-purple rounded-full px-2 py-1">
          <i class="fa-brands fa-twitter text-white"></i>
        </div>
        <div class="bg-dark-purple rounded-full px-2 py-1">
          <i class="fa-brands fa-linkedin text-white"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FooterLinks as footerLinks } from "@/links";
</script>

<style scoped></style>

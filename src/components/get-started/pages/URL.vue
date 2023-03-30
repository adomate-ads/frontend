<template>
  <div class="h-full">
    <h2 class="text-2xl font-bold pb-3">Website URL</h2>
    <p class="py-3 text-gray-500">
      Enter the link to your website below to begin the process. Adomate will
      start by scraping your website to gain an in-depth understanding of the
      services your business provides and the locations that you serve. By
      scraping your website, Adomate will be able to provide your business with
      better suited ads tailored to your exact business.
    </p>
    <h3 class="py-3 text-extra-dark-purple pl-10">Website Link</h3>
    <form class="w-full px-10">
      <div class="relative mb-6">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-dark-purple"
        >
          <i class="fa-solid fa-paperclip"></i>
        </div>
        <input
          id="input-group-1"
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ring-transparent focus:border-light-purple block w-full pl-10 p-2.5"
          placeholder="adomate.ai"
        />
      </div>
    </form>
    <div class="w-full text-center mx-auto space-x-10 text-lg bottom-0">
      <button
        class="bg-transparent text-gray-500 rounded-lg"
        @click="$emit('previous-step')"
      >
        <i class="fa-solid fa-caret-left"></i>
        Return Home
      </button>
      <button
        class="shadow bg-dark-purple text-white font-semibold tracking-wide px-8 py-4 rounded mb-4 md:mr-5 md:mb-0 hover:bg-white hover:text-dark-purple transition hover:-translate-y-1"
        @click="$emit('next-step')"
      >
        Get Started
        <i class="fa-solid fa-arrow-right ml-2"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>

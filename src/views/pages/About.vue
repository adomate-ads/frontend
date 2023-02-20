<template>
  <div id="about">
    <div class="mt-20 pb-10">
      <div class="grid grid-cols-12 gap-x-20 max-h-[600px]">
        <div class="col-span-5 col-start-2">
          <h1 class="text-6xl font-bold">Our Story</h1>
          <div class="mx-auto my-4">
            <p class="text-2xl font-semibold text-gray-600">
              We supply businesses of all sizes with modern Ad automation tools
              allowing you to focus on your customers or something like that. We
              believe that with our talented team, smart technology and engaged
              users we can solve some of the biggest problems for small
              businesses.
            </p>
          </div>
          <button
            class="bg-dark-purple text-white font-semibold tracking-wide px-4 py-4 rounded hover:bg-white hover:text-dark-purple border border-dark-purple border-2 transition hover:-translate-y-1"
          >
            Open Positions
            <i class="fa-solid fa-user ml-2"></i>
          </button>
        </div>
        <div class="col-span-6 relative w-full">
          <div class="w-2/3">
            <img src="@/assets/about/our-team.svg" />
          </div>
          <div class="bg-light-purple">
            <h3>Our Team</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="testimonials" class="bg-extra-light-purple pt-10">
    <div class="container mx-auto px-12 mt-20 pb-10">
      <div class="grid grid-cols-12 gap-x-20 max-h-[600px]"></div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>

<template>
  <div id="about">
    <div class="mt-20 pb-10">
      <div
        class="flex flex-col text-center md:text-left md:flex-row items-center max-h-[600px] px-[5em]"
      >
        <div>
          <h1 class="text-6xl font-bold">Our Story</h1>
          <div class="mx-auto my-10">
            <p class="text-2xl font-semibold text-gray-600">
              We are committed to supplying businesses with modern advertisement
              automation tools to allow them to focus on their customers.
            </p>
          </div>
          <button
            class="shadow bg-dark-purple text-white font-semibold tracking-wide px-4 py-4 rounded hover:bg-white hover:text-dark-purple border border-dark-purple border-2 transition hover:-translate-y-1"
          >
            Open Positions
            <i class="fa-solid fa-user ml-2"></i>
          </button>
        </div>

        <div class="flex justify-center w-full">
          <div class="">
            <img src="@/assets/about/our-team.svg" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--Why Us Section-->
  <div id="why-us">
    <div class="container mx-auto px-5 my-20 text-center">
      <h3 class="text-4xl md:text-6xl font-bold">Why Us</h3>
      <div
        class="flex flex-col justify-center mt-6 px-[0em] md:flex-row md:items-center"
      >
        <div
          class="bg-emerald-100 rounded-xl px-10 py-10 mx-2 my-2 md:px-5 md:my-5 md:w-1/3"
        >
          <i class="fa-solid fa-users h-20 text-emerald-400"></i>
          <h4 class="text-3xl font-semibold mt-2 mb-2">Staff that Cares</h4>
          <p>
            We are a small team of passionate individuals who care about your
            business and want to see you succeed.
          </p>
        </div>
        <div
          class="bg-cyan-100 rounded-xl px-10 py-10 mx-2 my-2 md:px-5 md:my-5 md:w-1/3"
        >
          <i class="fa-solid fa-map h-20 text-cyan-400"></i>
          <h4 class="text-3xl font-semibold mt-2 mb-2">Local Optimization</h4>
          <p>
            Find undercompetitive keywords in your area and win something idk
            blah blah blah we will get some traffic to your website.
          </p>
        </div>
        <div
          class="bg-orange-100 rounded-xl px-10 py-10 mx-2 my-2 md:px-5 md:my-5 md:w-1/3"
        >
          <i class="fa-solid fa-users h-20 text-orange-400"></i>
          <h4 class="text-3xl font-semibold mt-2 mb-2">Staff that Cares</h4>
          <p>
            We are a small team of passionate individuals who care about your
            business and want to see you succeed.
          </p>
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

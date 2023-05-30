<template>
  <div id="knowledgebase">
    <FadeIn>
      <div class="w-full flex place-items-center flex-col">
        <h1
          class="text-4xl xl:text-5xl font-semibold subpixel-antialiased text-center pt-10 px-5"
        >
          Knowledge Base
        </h1>
        <p class="text-l text-center pt-6 px-5 mx-10">
          Welcome to the Adomate Knowledge Base. Here you will find all the
          information you need to get started with Adomate. To begin, select a
          category from the list below.
        </p>
      </div>
    </FadeIn>
  </div>
</template>

<script lang="ts" setup>
import FadeIn from "@/components/FadeIn.vue";
</script>

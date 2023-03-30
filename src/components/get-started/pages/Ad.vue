<template>
  <div class="h-full">
    <h2 class="text-2xl font-bold">Ad Preview</h2>
    <p class="py-3 text-gray-500">
      Here are a few sample ads that we've created for you. Once you've finished
      the sign up process, we'll create your ads and start running them.
      Additionally you can edit these ads, create your own ads or have our
      software regenerate ads for you.
    </p>

    <div class="flex flex-col place-items-end justify-center">
      <div class="flex text-center space-x-10 text-lg">
        <button
          class="bg-transparent text-gray-500 rounded-lg"
          @click="emit('previous-step')"
        >
          <i class="fa-solid fa-caret-left"></i>
          Previous
        </button>
        <button
          class="shadow bg-dark-purple text-white font-semibold tracking-wide px-8 py-4 rounded mb-4 md:mr-5 md:mb-0 hover:bg-white hover:text-dark-purple transition hover:-translate-y-1"
          @click="emit('next-step')"
        >
          Continue
          <i class="fa-solid fa-arrow-right ml-2"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
  (e: "next-step"): void;
  (e: "previous-step"): void;
}>();
</script>
<style scoped></style>

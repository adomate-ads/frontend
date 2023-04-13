<template>
  <div class="h-full flex flex-col justify-between">
    <div class="max-h-[400px] overflow-y-auto w-fit">
      <SearchAdDemo></SearchAdDemo>
    </div>

    <div class="flex justify-center space-x-10 text-lg">
      <button
        class="bg-transparent text-gray-500 rounded-lg w-44"
        @click="emit('previous-step')"
      >
        <i class="fa-solid fa-caret-left"></i>
        Previous
      </button>
      <button
        class="shadow bg-dark-purple text-white font-semibold tracking-wide w-44 py-4 rounded mb-4 md:mr-5 md:mb-0 hover:bg-white hover:text-dark-purple transition hover:-translate-y-1"
        @click="emit('next-step')"
      >
        Continue
        <i class="fa-solid fa-arrow-right ml-2"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SearchAdDemo from "@/components/SearchAdDemo.vue";

const emit = defineEmits<{
  (e: "next-step"): void;
  (e: "previous-step"): void;
}>();
</script>
<style scoped></style>

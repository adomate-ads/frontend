<template>
  <div
    v-if="getStartedStore.getFetching"
    key="element1"
    class="h-full flex flex-col justify-between"
    :class="[
      'transition-opacity duration-500 ease-in',
      getStartedStore.getFetching ? 'opacity-100' : 'opacity-0',
    ]"
  >
    <div class="mx-auto my-auto">
      <loader class="mx-auto" />
      <p class="text-gray-400">Please wait as we generate your ads.</p>
      <p class="text-center text-gray-400 text-xs">
        (This may take up to 30 seconds)
      </p>
    </div>
  </div>
  <div v-else class="h-full flex flex-col justify-between">
    <div class="max-h-[300px] overflow-y-auto">
      <h2 class="text-2xl font-bold pb-1">Ad Preview</h2>
      <p class="py-3 text-gray-500">
        Here an example of one of the many ads we have created for your
        business. You may modify this ad at any time from the dashboard.
      </p>
      <transition name="fade" mode="out-in">
        <SearchAdDemo
          :key="index"
          :favicon-url="`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${getStartedStore.getStarted.domain}/&size=256`"
          :company-name="getStartedStore.getStarted.domain"
          :company-url="`https://${getStartedStore.getStarted.domain}`"
          :headline="getStartedStore.getStarted.headlines[index]"
          :description="getStartedStore.getStarted.descriptions[index]"
        ></SearchAdDemo>
      </transition>
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
import { computed, ref } from "vue";
import Loader from "@/components/Loader.vue";
import SearchAdDemo from "@/components/SearchAdDemo.vue";
import useGetStartedStore from "@/stores/get-started";

const getStartedStore = useGetStartedStore();

const emit = defineEmits<{
  (e: "next-step"): void;
  (e: "previous-step"): void;
}>();

const index = ref<number>(0);
const maxIndex = computed(
  () => getStartedStore.getStarted.headlines.length - 1,
);
setInterval(() => {
  if (index.value < maxIndex.value) {
    index.value += 1;
  } else {
    index.value = 0;
  }
}, 5 * 1000);
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>

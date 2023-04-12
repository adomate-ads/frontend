<template>
  <div class="h-full flex flex-col justify-between">
    <div class="max-h-[400px] overflow-y-auto">
      <h2 class="text-2xl font-bold pb-3">Website URL</h2>
      <p class="py-3 text-gray-500">
        Enter the link to your website below to begin the process. Adomate will
        start by scraping your website to gain an in-depth understanding of the
        services your business provides and the locations that you serve. By
        scraping your website, Adomate will be able to provide your business
        with better suited ads tailored to your exact business.
      </p>
      <h3 class="py-3 text-extra-dark-purple pl-10">Website Link</h3>
      <form class="w-full px-10" @submit.prevent>
        <div class="relative mb-6">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-dark-purple"
          >
            <i class="fa-solid fa-paperclip"></i>
          </div>
          <input
            id="input-group-1"
            v-model="url"
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
            placeholder="https://adomate.ai"
            :class="[
              isValidURL() ? 'focus:border-light-purple' : 'border-red-500',
            ]"
          />
        </div>
      </form>
    </div>
    <div class="flex justify-center space-x-10 text-lg">
      <router-link
        to="/"
        class="bg-transparent text-gray-500 rounded-lg w-44 text-center my-auto"
      >
        <i class="fa-solid fa-caret-left"></i>
        Return Home
      </router-link>
      <button
        class="shadow bg-dark-purple text-white font-semibold tracking-wide w-44 py-4 rounded mb-4 md:mr-5 md:mb-0 hover:bg-white hover:text-dark-purple transition hover:-translate-y-1"
        :disabled="!isValidURL()"
        @click="
          emit('next-step');
          updateURLParam();
        "
      >
        Continue
        <i class="fa-solid fa-arrow-right ml-2"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const emit = defineEmits<{
  (e: "next-step"): void;
  (e: "previous-step"): void;
}>();

const url = ref("");

const isValidURL = (): boolean => {
  const urlRegex = /^(http|https):\/\/[^ "]+$/;
  return urlRegex.test(url.value);
};

const updateURLParam = (): void => {
  const page = new URL(window.location.href);
  page.searchParams.set("URL", url.value);
  window.history.pushState({}, "", page);
};

onMounted(() => {
  const queryParams = new URLSearchParams(window.location.search);
  const urlParam = queryParams.get("URL");
  if (urlParam != null) {
    url.value = urlParam;
  }
});
</script>

<style scoped></style>

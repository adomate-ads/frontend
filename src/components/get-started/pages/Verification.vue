<template>
  <div class="h-full">
    <div v-if="page == 0">
      <img
        src="https://cdn.discordapp.com/attachments/681679949681131520/1089680746672820226/image.png"
      />
      <h2 class="text-2xl font-bold pb-3">Location & Services Verification</h2>
      <p class="py-3 text-gray-500">
        Please verify that the following information is correct. If any of the
        information is incorrect, please correct it before continuing.
      </p>
    </div>
    <div v-if="page == 1">
      <h2 class="text-2xl font-bold pb-3">Locations</h2>
      <div class="py-3 text-gray-500">
        <ul>
          <li>- Location 1</li>
          <li>- Location 2</li>
          <li>- Location 3</li>
          <li>- Location 4</li>
          <li>- Location 5</li>
          <li>- Location 6</li>
          <li>- Location 7</li>
          <li>- Add Location</li>
        </ul>
      </div>
    </div>
    <div v-if="page == 2">
      <h2 class="text-2xl font-bold pb-3">Services</h2>
      <div class="py-3 text-gray-500">
        <ul>
          <li>- Google Ads Optimization</li>
          <li>- Automated Ads</li>
          <li>- Service 3</li>
          <li>- Service 4</li>
          <li>- Service 5</li>
          <li>- Service 6</li>
          <li>- Service 7</li>
          <li>- Add Service</li>
        </ul>
      </div>
    </div>

    <!--  Pages  -->
    <div class="flex flex-col place-items-end justify-center">
      <div class="flex space-x-2 mx-auto my-3">
        <button
          type="button"
          class="w-2.5 h-2.5 rounded-full"
          :class="page >= 0 ? 'bg-dark-purple' : 'bg-gray-300'"
        ></button>
        <button
          type="button"
          class="w-2.5 h-2.5 rounded-full"
          :class="page >= 1 ? 'bg-dark-purple' : 'bg-gray-300'"
        ></button>
        <button
          type="button"
          class="w-2.5 h-2.5 rounded-full"
          :class="page >= 2 ? 'bg-dark-purple' : 'bg-gray-300'"
        ></button>
      </div>
      <div class="flex text-center space-x-10 text-lg">
        <button
          class="bg-transparent text-gray-500 rounded-lg"
          @click="previousPage()"
        >
          <i class="fa-solid fa-caret-left"></i>
          Previous
        </button>
        <button
          class="shadow bg-dark-purple text-white font-semibold tracking-wide px-8 py-4 rounded mb-4 md:mr-5 md:mb-0 hover:bg-white hover:text-dark-purple transition hover:-translate-y-1"
          @click="nextPage()"
        >
          Continue
          <i class="fa-solid fa-arrow-right ml-2"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const emit = defineEmits<{
  (e: "next-step"): void;
  (e: "previous-step"): void;
}>();

const page = ref(0);

const nextPage = (): void => {
  if (page.value === 2) {
    emit("next-step");
    return;
  }

  page.value += 1;
};

const previousPage = (): void => {
  if (page.value === 0) {
    emit("previous-step");
    return;
  }

  page.value -= 1;
};
</script>

<style scoped></style>

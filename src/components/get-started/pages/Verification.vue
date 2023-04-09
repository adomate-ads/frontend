<template>
  <div class="h-full">
    <div v-if="page == 0">
      <img
        src="https://cdn.discordapp.com/attachments/681679949681131520/1089680746672820226/image.png"
        alt="Website Image"
      />
      <h2 class="text-2xl font-bold pb-3">Location & Services Verification</h2>
      <p class="py-3 text-gray-500">
        Please verify that the following information is correct. If any of the
        information is incorrect, please correct it before continuing.
      </p>
    </div>
    <div v-if="page == 1">
      <h2 class="text-2xl font-bold pb-3">Locations</h2>
      <div class="py-3 text-gray-500 max-h-[300px] overflow-y-auto">
        <div v-for="(location, idx) in sampleLocations" :key="idx">
          <div
            class="flex justify-between border-b-2 border-dashed border-dark-purple"
            :class="[idx % 2 == 0 ? 'bg-gray-100' : '']"
          >
            <div class="flex space-x-2">
              <div class="py-1">
                <p class="text-gray-500">{{ location.name }}</p>
                <!--                <p class="text-xs text-gray-400">{{ location.address }}</p>-->
              </div>
            </div>
            <div class="flex space-x-2 mr-5">
              <button class="bg-transparent text-gray-500 rounded-lg">
                <i class="fa-solid fa-pencil"></i>
              </button>
              <button class="bg-transparent text-gray-500 rounded-lg">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="page == 2">
      <h2 class="text-2xl font-bold pb-3">Services</h2>
      <div class="py-3 text-gray-500 max-h-[300px] overflow-y-auto">
        <div v-for="(service, idx) in sampleServices" :key="idx">
          <div
            class="flex justify-between border-b-2 border-dashed border-dark-purple"
            :class="[idx % 2 == 0 ? 'bg-gray-100' : '']"
          >
            <div class="flex space-x-2">
              <div class="py-1">
                <p class="text-gray-500">{{ service.name }}</p>
              </div>
            </div>
            <div class="flex space-x-2 mr-5">
              <button class="bg-transparent text-gray-500 rounded-lg">
                <i class="fa-solid fa-pencil"></i>
              </button>
              <button class="bg-transparent text-gray-500 rounded-lg">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  Pages  -->
    <div class="flex flex-col justify-center">
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
      <div class="flex justify-center space-x-10 text-lg">
        <button
          class="bg-transparent text-gray-500 rounded-lg w-44"
          @click="previousPage()"
        >
          <i class="fa-solid fa-caret-left"></i>
          Previous
        </button>
        <button
          class="shadow bg-dark-purple text-white font-semibold tracking-wide w-44 py-4 rounded mb-4 md:mr-5 md:mb-0 hover:bg-white hover:text-dark-purple transition hover:-translate-y-1"
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
import { Location, Service } from "@/types";
import { ref } from "vue";

const sampleLocations = ref<Location[]>([
  {
    name: "Location 1",
    address: "Address 1",
  },
  {
    name: "Location 2",
    address: "Address 2",
  },
]);

const sampleServices = ref<Service[]>([
  {
    name: "Service 1",
  },
  {
    name: "Service 2",
  },
]);

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

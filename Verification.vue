<template>
  <div class="h-full flex flex-col justify-between">
    <div v-if="page == 0" class="max-h-[300px] overflow-y-auto">
      <h2 class="text-2xl font-bold pb-3">Locations & Services</h2>
      <p class="py-3 text-gray-500">
        Our AI has detected possible locations and services you offer. Please click continue and carefully verify that the information is correct.
      </p>
    </div>
    <div v-if="page == 1" class="max-h-[300px] overflow-y-auto">
      <h2 class="text-2xl font-bold pb-3">Locations</h2>
      <p class="text-gray-500">
        These are the locations where you would like your ads displayed. To make edits, please click the pencil icon below:      </p>
      <div class="py-3 text-gray-500 max-h-[250px] overflow-y-auto">
        <div v-for="(location, idx) in sampleLocations" :key="idx">
          <div
            class="flex justify-between border-b-2 border-dashed border-dark-purple"
            :class="[idx % 2 == 0 ? 'bg-gray-100' : '']"
          >
            <div
              v-if="editStatesLocation[location.name]"
              class="flex w-full justify-between"
            >
              <div class="flex space-x-2">
                <div class="py-1">
                  <input
                    :ref="(el) => (inputRefsLocation[location.name] = el)"
                    v-model="location.name"
                    class="bg-transparent focus:outline-none caret-dark-purple"
                    type="text"
                  />
                </div>
              </div>
              <div class="flex space-x-4 mr-5">
                <button
                  class="bg-transparent text-gray-500 rounded-lg"
                  @click="toggleEditLocation(location.name)"
                >
                  <i class="fa-solid fa-times"></i>
                </button>
                <button class="bg-transparent text-gray-500 rounded-lg">
                  <i class="fa-solid fa-check"></i>
                </button>
              </div>
            </div>
            <div v-else class="flex w-full justify-between">
              <div class="flex space-x-2">
                <div class="py-1">
                  <p class="text-gray-500">{{ location.name }}</p>
                  <!--                <p class="text-xs text-gray-400">{{ location.address }}</p>-->
                </div>
              </div>
              <div class="flex space-x-4 mr-5">
                <button
                  class="bg-transparent text-gray-500 rounded-lg"
                  @click="toggleEditLocation(location.name)"
                >
                  <i class="fa-solid fa-pencil"></i>
                </button>
                <button
                  class="bg-transparent text-gray-500 rounded-lg"
                  @click="deleteLocation(location.name)"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex justify-between border-b-2 border-dashed border-dark-purple"
          :class="[sampleLocations.length % 2 == 0 ? 'bg-gray-100' : '']"
        >
          <div class="flex w-full justify-between">
            <div class="flex space-x-2">
              <div class="py-1">
                <input
                  v-model="newLocation"
                  class="bg-transparent focus:outline-none caret-dark-purple"
                  type="text"
                  placeholder="Add Location Here"
                />
              </div>
            </div>
            <div class="flex space-x-4 mr-5">
              <button
                class="bg-transparent text-gray-500 rounded-lg"
                @click="addLocation(newLocation, '')"
              >
                <i class="fa-solid fa-check"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="page == 2" class="max-h-[300px] overflow-y-auto">
      <h2 class="text-2xl font-bold pb-3">Services</h2>
      <p class="text-gray-500">
        These are the services you'd like to advertise. To make edits, please click the pencil icon below:
      </p>
      <div class="py-3 text-gray-500 max-h-[250px] overflow-y-auto">
        <div v-for="(service, idx) in sampleServices" :key="idx">
          <div
            class="flex justify-between border-b-2 border-dashed border-dark-purple"
            :class="[idx % 2 == 0 ? 'bg-gray-100' : '']"
          >
            <div
              v-if="editStatesService[service.name]"
              class="flex w-full justify-between"
            >
              <div class="flex space-x-2">
                <div class="py-1">
                  <input
                    :ref="(el) => (inputRefsService[service.name] = el)"
                    v-model="service.name"
                    class="bg-transparent focus:outline-none caret-dark-purple"
                    type="text"
                  />
                </div>
              </div>
              <div class="flex space-x-4 mr-5">
                <button
                  class="bg-transparent text-gray-500 rounded-lg"
                  @click="toggleEditService(service.name)"
                >
                  <i class="fa-solid fa-times"></i>
                </button>
                <button class="bg-transparent text-gray-500 rounded-lg">
                  <i class="fa-solid fa-check"></i>
                </button>
              </div>
            </div>
            <div v-else class="flex w-full justify-between">
              <div class="flex space-x-2">
                <div class="py-1">
                  <p class="text-gray-500">{{ service.name }}</p>
                  <!--                <p class="text-xs text-gray-400">{{ location.address }}</p>-->
                </div>
              </div>
              <div class="flex space-x-4 mr-5">
                <button
                  class="bg-transparent text-gray-500 rounded-lg"
                  @click="toggleEditService(service.name)"
                >
                  <i class="fa-solid fa-pencil"></i>
                </button>
                <button
                  class="bg-transparent text-gray-500 rounded-lg"
                  @click="deleteService(service.name)"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex justify-between border-b-2 border-dashed border-dark-purple"
          :class="[sampleServices.length % 2 == 0 ? 'bg-gray-100' : '']"
        >
          <div class="flex w-full justify-between">
            <div class="flex space-x-2">
              <div class="py-1">
                <input
                  v-model="newService"
                  class="bg-transparent focus:outline-none caret-dark-purple"
                  type="text"
                  placeholder="Add Service Here"
                />
              </div>
            </div>
            <div class="flex space-x-4 mr-5">
              <button
                class="bg-transparent text-gray-500 rounded-lg"
                @click="addService(newService)"
              >
                <i class="fa-solid fa-check"></i>
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
import { nextTick, reactive, ref } from "vue";

const sampleLocations = ref<Location[]>([
  {
    name: "Austin, TX",
    address: "Address 1",
  },
  {
    name: "Dallas, TX",
    address: "Address 2",
  },
]);

const sampleServices = ref<Service[]>([
  {
    name: "Google Ads Automation",
  },
  {
    name: "Search Ads Automation",
  },
]);
const newLocation = ref<string>("");
const newService = ref<string>("");

const emit = defineEmits<{
  (e: "next-step"): void;
  (e: "previous-step"): void;
}>();

const page = ref(0);
const editStatesLocation = reactive<{ [key: string]: boolean }>({});
const inputRefsLocation = reactive<{ [key: string]: HTMLInputElement | null }>(
  {}
);

const editStatesService = reactive<{ [key: string]: boolean }>({});
const inputRefsService = reactive<{ [key: string]: HTMLInputElement | null }>(
  {}
);

const toggleEditLocation = async (locationName: string): Promise<void> => {
  const wasEditing = editStatesLocation[locationName];
  editStatesLocation[locationName] = !editStatesLocation[locationName];

  if (!wasEditing) {
    await nextTick();
    if (inputRefsLocation[locationName]) {
      inputRefsLocation[locationName]?.focus();
    }
  }
};

const deleteLocation = (locationName: string): void => {
  sampleLocations.value = sampleLocations.value.filter(
    (location) => location.name !== locationName
  );
};

const addLocation = (name: string, address: string): void => {
  if (sampleLocations.value.some((location) => location.name === name)) {
    newLocation.value = "";
    return;
  }
  sampleLocations.value.push({
    name,
    address,
  });
  newLocation.value = "";
};

const toggleEditService = async (serviceName: string): Promise<void> => {
  const wasEditing = editStatesService[serviceName];
  editStatesService[serviceName] = !editStatesService[serviceName];

  if (!wasEditing) {
    await nextTick();
    if (inputRefsService[serviceName]) {
      inputRefsService[serviceName]?.focus();
    }
  }
};

const deleteService = (serviceName: string): void => {
  sampleServices.value = sampleServices.value.filter(
    (service) => service.name !== serviceName
  );
};

const addService = (name: string): void => {
  if (sampleServices.value.some((service) => service.name === name)) {
    newService.value = "";
    return;
  }
  sampleServices.value.push({
    name,
  });
  newService.value = "";
};

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

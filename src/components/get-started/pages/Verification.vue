<template>
  <div class="h-full flex flex-col justify-between">
    <div v-if="page == 0" class="max-h-[300px] overflow-y-auto">
      <h2 class="text-2xl font-bold pb-3">Location & Services Verification</h2>
      <p v-if="getStartedStore.getError" class="py-3 text-gray-500">
        There was an error parsing your website. Please manually enter your
        locations and services on the next pages or try again at a later time.
      </p>
      <p v-else class="py-3 text-gray-500">
        Our software has parsed your website (similar to google) and has
        detected all the possibly locations and services you offer. Please
        verify that the following information is correct. If any of the
        information is incorrect, please correct it before continuing.
      </p>
    </div>
    <div v-if="page == 1" class="max-h-[300px] overflow-y-auto">
      <h2 class="text-2xl font-bold pb-3">Locations</h2>
      <p class="text-gray-500">
        These are the locations where you would like your ads displayed.
      </p>
      <div class="py-3 text-gray-500 max-h-[250px] overflow-y-auto">
        <div v-for="(location, idx) in getStartedStore.getLocations" :key="idx">
          <div
            class="flex justify-between border-b-2 border-dashed border-dark-purple"
            :class="[idx % 2 == 0 ? 'bg-gray-100' : '']"
          >
            <div
              v-if="editStatesLocation[location]"
              class="flex w-full justify-between"
            >
              <div class="flex space-x-2">
                <div class="py-1">
                  <input
                    :ref="(el) => (inputRefsLocation[location] = el)"
                    v-model="temp"
                    class="bg-transparent focus:outline-none caret-dark-purple"
                    type="text"
                    @keyup.enter="saveLocation(location)"
                  />
                </div>
              </div>
              <div class="flex space-x-4 mr-5">
                <button
                  class="bg-transparent text-gray-500 rounded-lg"
                  @click="toggleEditLocation(location)"
                >
                  <i class="fa-solid fa-times"></i>
                </button>
                <button
                  class="bg-transparent text-gray-500 rounded-lg"
                  @click="saveLocation(location)"
                >
                  <i class="fa-solid fa-check"></i>
                </button>
              </div>
            </div>
            <div v-else class="flex w-full justify-between">
              <div class="flex space-x-2">
                <div class="py-1">
                  <p class="text-gray-500">{{ location }}</p>
                  <!--                <p class="text-xs text-gray-400">{{ location.address }}</p>-->
                </div>
              </div>
              <div class="flex space-x-4 mr-5">
                <button
                  class="bg-transparent text-gray-500 rounded-lg"
                  @click="toggleEditLocation(location)"
                >
                  <i class="fa-solid fa-pencil"></i>
                </button>
                <button
                  class="bg-transparent text-gray-500 rounded-lg"
                  @click="deleteLocation(location)"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex justify-between border-b-2 border-dashed border-dark-purple"
          :class="[
            getStartedStore.getLocations.length % 2 == 0 ? 'bg-gray-100' : '',
          ]"
        >
          <div class="flex w-full justify-between">
            <div class="flex space-x-2">
              <div class="py-1">
                <input
                  v-model="newLocation"
                  class="bg-transparent focus:outline-none caret-dark-purple"
                  type="text"
                  placeholder="Add Location Here"
                  @keyup.enter="addLocation(newLocation)"
                />
              </div>
            </div>
            <div class="flex space-x-4 mr-5">
              <button
                class="bg-transparent text-gray-500 rounded-lg"
                @click="addLocation(newLocation)"
              >
                <i class="fa-solid fa-check"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FadeOut v-if="page == 2">
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
          <p class="text-gray-400">
            Please wait as we finish parsing your website.
          </p>
          <p class="text-center text-gray-400 text-xs">
            (This may take up to 45 seconds)
          </p>
        </div>
      </div>

      <div v-else class="max-h-[300px] overflow-y-auto">
        <h2 class="text-2xl font-bold pb-3">Services</h2>
        <p class="text-gray-500">
          These are the services we will create ads for. If you would like to
          add more services, please click the button below.
        </p>
        <div class="py-3 text-gray-500 max-h-[250px] overflow-y-auto">
          <div v-for="(service, idx) in getStartedStore.getServices" :key="idx">
            <div
              class="flex justify-between border-b-2 border-dashed border-dark-purple"
              :class="[idx % 2 == 0 ? 'bg-gray-100' : '']"
            >
              <div
                v-if="editStatesService[service]"
                class="flex w-full justify-between"
              >
                <div class="flex space-x-2">
                  <div class="py-1">
                    <input
                      :ref="(el) => (inputRefsService[service] = el)"
                      v-model="temp"
                      class="bg-transparent focus:outline-none caret-dark-purple"
                      type="text"
                      @keyup.enter="saveService(service)"
                    />
                  </div>
                </div>
                <div class="flex space-x-4 mr-5">
                  <button
                    class="bg-transparent text-gray-500 rounded-lg"
                    @click="toggleEditService(service)"
                  >
                    <i class="fa-solid fa-times"></i>
                  </button>
                  <button
                    class="bg-transparent text-gray-500 rounded-lg"
                    @click="saveService(service)"
                  >
                    <i class="fa-solid fa-check"></i>
                  </button>
                </div>
              </div>
              <div v-else class="flex w-full justify-between">
                <div class="flex space-x-2">
                  <div class="py-1">
                    <p class="text-gray-500">{{ service }}</p>
                    <!--                <p class="text-xs text-gray-400">{{ location.address }}</p>-->
                  </div>
                </div>
                <div class="flex space-x-4 mr-5">
                  <button
                    class="bg-transparent text-gray-500 rounded-lg"
                    @click="toggleEditService(service)"
                  >
                    <i class="fa-solid fa-pencil"></i>
                  </button>
                  <button
                    class="bg-transparent text-gray-500 rounded-lg"
                    @click="deleteService(service)"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex justify-between border-b-2 border-dashed border-dark-purple"
            :class="[
              getStartedStore.getServices.length % 2 == 0 ? 'bg-gray-100' : '',
            ]"
          >
            <div class="flex w-full justify-between">
              <div class="flex space-x-2">
                <div class="py-1">
                  <input
                    v-model="newService"
                    class="bg-transparent focus:outline-none caret-dark-purple"
                    type="text"
                    placeholder="Add Service Here"
                    @keyup.enter="addService(newService)"
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
    </FadeOut>

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
import FadeOut from "@/components/FadeOut.vue";
import Loader from "@/components/Loader.vue";

import { nextTick, reactive, ref } from "vue";
import useGetStartedStore from "@/stores/get-started";

const getStartedStore = useGetStartedStore();

const temp = ref<string>("");
const newLocation = ref<string>("");
const newService = ref<string>("");

const emit = defineEmits<{
  (e: "next-step"): void;
  (e: "previous-step"): void;
}>();

const page = ref(0);
const editStatesLocation = reactive<{ [key: string]: boolean }>({});
const inputRefsLocation = reactive<{ [key: string]: HTMLInputElement | null }>(
  {},
);

const editStatesService = reactive<{ [key: string]: boolean }>({});
const inputRefsService = reactive<{ [key: string]: HTMLInputElement | null }>(
  {},
);

const toggleEditLocation = async (locationName: string): Promise<void> => {
  temp.value = locationName;
  const wasEditing = editStatesLocation[locationName];

  Object.keys(editStatesLocation).forEach((key) => {
    if (key !== locationName) {
      editStatesLocation[key] = false;
    }
  });

  editStatesLocation[locationName] = !editStatesLocation[locationName];

  if (!wasEditing) {
    await nextTick();
    if (inputRefsLocation[locationName]) {
      inputRefsLocation[locationName]?.focus();
    }
  }
};

const saveLocation = (locationName: string): void => {
  getStartedStore.updateLocation(locationName, temp.value);

  editStatesLocation[locationName] = !editStatesLocation[locationName];
  temp.value = "";
};

const deleteLocation = (locationName: string): void => {
  getStartedStore.deleteLocation(locationName);
};

const addLocation = (name: string): void => {
  getStartedStore.addLocation(name);
  newLocation.value = "";
};

const toggleEditService = async (serviceName: string): Promise<void> => {
  temp.value = serviceName;
  const wasEditing = editStatesService[serviceName];

  Object.keys(editStatesLocation).forEach((key) => {
    if (key !== serviceName) {
      editStatesLocation[key] = false;
    }
  });

  editStatesService[serviceName] = !editStatesService[serviceName];

  if (!wasEditing) {
    await nextTick();
    if (inputRefsService[serviceName]) {
      inputRefsService[serviceName]?.focus();
    }
  }
};

const saveService = (serviceName: string): void => {
  getStartedStore.updateService(serviceName, temp.value);

  editStatesService[serviceName] = !editStatesService[serviceName];
  temp.value = "";
};

const deleteService = (serviceName: string): void => {
  getStartedStore.deleteService(serviceName);
};

const addService = (name: string): void => {
  getStartedStore.addService(name);
  newService.value = "";
};

const nextPage = (): void => {
  if (page.value === 2) {
    getStartedStore.getAdContent();
    getStartedStore.error = null; // Clear the error if there was one
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

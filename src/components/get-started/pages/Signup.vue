<template>
  <div class="h-full">
    <h2 class="text-2xl font-bold">Create your Account</h2>
    <div class="flex flex-row flex-wrap gap-x-6 gap-y-5">
      <div>
        <Input
          id="first-name"
          v-model="firstName"
          type="text"
          label="First Name"
        />
      </div>
      <div>
        <Input
          id="last-name"
          v-model="lastName"
          type="text"
          label="Last Name"
        />
      </div>
      <div>
        <Input id="email" v-model="email" type="email" label="Email" />
      </div>
      <div>
        <Input
          id="password"
          v-model="password"
          type="password"
          label="Password"
        />
      </div>
      <div class="w-2/3">
        <Input id="domain" v-model="domain" type="text" label="Domain" />
      </div>
      <div class="w-2/3">
        <Input
          id="company"
          v-model="company"
          type="text"
          label="Company Name"
        />
      </div>
    </div>

    <div class="w-full text-center mx-auto space-x-10 text-lg mt-3">
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
        Create Account
        <i class="fa-solid fa-arrow-right ml-2"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Input from "@/components/forms/Input.vue";

import { ref } from "vue";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
// const industry = ref("");
const domain = ref("");
const company = ref("");
const password = ref("");

const emit = defineEmits<{
  (e: "next-step"): void;
  (e: "previous-step"): void;
}>();
</script>
<style scoped></style>

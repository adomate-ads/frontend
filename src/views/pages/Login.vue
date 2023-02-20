<template>
  <div class="bg-extra-light-purple">
    <div class="grid grid-cols-12">
      <div id="bg-side-img" class="col-span-7"></div>
      <div class="col-span-5 text-center my-28 mr-20">
        <h2 class="text-4xl font-bold mb-10">Welcome Back!</h2>
        <div class="rounded-lg bg-white p-8 w-2/3 mx-auto space-y-6">
          <Input
            id="email"
            v-model="email"
            type="email"
            label=""
            placeholder="Your email *"
          />
          {{ email }} 1
          <Input
            id="password"
            v-model="password"
            type="password"
            label=""
            placeholder="Your password *"
          />
          <p class="text-left text-dark-purple">Forgot Password?</p>
          <button
            class="bg-dark-purple text-white font-semibold tracking-wide w-2/3 py-3 rounded ml-5 hover:bg-white hover:text-dark-purple border border-dark-purple border-2 transition"
          >
            Continue
          </button>
          <p class="text-left">
            Not a member yet? <span class="text-dark-purple">Sign up</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Input from "@/components/forms/Input.vue";
import { ref } from "vue";

const email = ref("");
const password = ref("");
</script>

<style scoped>
#bg-side-img {
  background-image: url("@/assets/login/sample-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

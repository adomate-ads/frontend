<template>
  <div
    class="flex items-center justify-center p-5 sm:p-10 min-h-screen bg-gray-100"
  >
    <div
      class="bg-white rounded-lg shadow-lg max-w-5xl w-full md:p-6 min-h-[550px] h-full"
    >
      <div class="flex h-full">
        <div
          class="w-1/2 hidden md:flex px-5 sm:px-10 bg-gradient-to-br from-dark-purple to-extra-dark-purple rounded-l flex-col justify-center"
        >
          <div class="mb-9 max-w-xs">
            <span
              class="text-white w-7 h-7 inline-flex items-center justify-center rounded-full bg-gray-300/40"
            >
              <i class="fa-solid fa-check"></i>
            </span>
            <div class="text-gray-100 text-base font-semibold mb-1 mt-2">
              Get Started Quickly
            </div>
            <div class="text-gray-200 text-sm">
              Fully Automated from the start
            </div>
          </div>
          <div class="mb-9 max-w-xs">
            <span
              class="text-white w-7 h-7 inline-flex items-center justify-center rounded-full bg-gray-300/40"
            >
              <i class="fa-solid fa-check"></i>
            </span>
            <div class="text-gray-100 text-base font-semibold mb-1 mt-2">
              Support any business model
            </div>
            <div class="text-gray-200 text-sm">
              E-commerce, subscriptions, SaaS platforms, marketplaces, brick and
              mortar, and more—all within a unified platform.
            </div>
          </div>
          <div class="mb-9 max-w-xs">
            <span
              class="text-white w-7 h-7 inline-flex items-center justify-center rounded-full bg-gray-300/40"
            >
              <i class="fa-solid fa-check"></i>
            </span>
            <div class="text-gray-100 text-base font-semibold mb-1 mt-2">
              Get Started Quickly
            </div>
            <div class="text-gray-200 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
              expedita.
            </div>
          </div>
        </div>
        <form action="#" class="w-full md:w-1/2 px-5 sm:px-10 py-12">
          <h3 class="text-gray-800 text-xl sm:text-2xl font-bold mb-6">
            Sign up to
            <router-link to="/" class="text-gray-700">Adomate</router-link>
          </h3>

          <div class="mb-6">
            <Input
              id="fullName"
              v-model="fullName"
              type="text"
              label="Full Name"
            />
          </div>

          <div class="mb-6">
            <Input id="email" v-model="email" type="email" label="Email" />
          </div>
          <div class="mb-6">
            <Input
              id="password"
              v-model="password"
              type="password"
              label="Password"
            />
          </div>
          <div class="mb-6">
            <Input
              id="confirmPassword"
              v-model="ConfirmPassword"
              type="password"
              label="Confirm Password"
            />
          </div>
          <div class="mb-6">
            <label
              for="privacyPolicy"
              class="flex items-center space-x-2 cursor-pointer text-xs"
            >
              <input
                id="privacyPolicy"
                type="checkbox"
                class="rounded focus:ring focus:ring-opacity-20 focus:ring-extra-dark-purple focus:ring-offset-0"
                name="privacyPolicy"
              />
              <span class="text-gray-700"
                >Get updated and notification about our product</span
              >
            </label>
          </div>
          <div class="mb-6">
            <button
              class="bg-dark-purple text-white font-bold text-sm block w-full py-3 px-5 text-center rounded-lg focus:ring focus:ring-opacity-25 focus:ring-extra-dark-purple transition duration-200"
            >
              Sign Up
            </button>
          </div>
          <div class="text-gray-600 text-sm text-center">
            Already have and account?
            <router-link to="/login" class="text-extra-dark-purple"
              >Login</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Input from "@/components/forms/Input.vue";
import { ref } from "vue";

const email = ref("");
const fullName = ref("");
const password = ref("");
const ConfirmPassword = ref("");
</script>

<style scoped></style>

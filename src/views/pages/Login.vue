<template>
  <div
    class="flex items-center flex-col justify-center p-5 sm:p-10 min-h-screen bg-gray-100"
  >
    <div class="text-align-center mb-5">
      <router-link to="/" class="text-xl text-dark-purple font-bold sm:text-xl">
        Adomate
      </router-link>
    </div>
    <div
      class="bg-white rounded-lg shadow-lg max-w-lg w-full md:p-6 min-h-[550px] h-full"
    >
      <form action="#" class="w-full px-5 sm:px-10 py-12">
        <h3 class="text-gray-800 text-xl sm:text-2xl font-bold mb-6">
          Welcome Back!
        </h3>

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
          <div class="mt-3">
            <a href="#" class="font-semibold text-xs text-extra-dark-purple"
              >Forgot Password</a
            >
          </div>
        </div>

        <div class="mb-6">
          <button
            class="bg-dark-purple text-white font-bold text-sm block w-full py-3 px-5 text-center rounded-lg focus:ring focus:ring-opacity-25 focus:ring-extra-dark-purple transition duration-200"
          >
            Sign In
          </button>
        </div>
        <div class="text-gray-600 text-sm text-center">
          Don't have an account
          <router-link :to="{ name: 'Signup' }" class="text-dark-purple">
            Sign up
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Input from "@/components/forms/Input.vue";
import { ref } from "vue";

const email = ref("");
const password = ref("");
</script>

<style scoped></style>

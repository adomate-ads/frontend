<template>
  <nav class="navigation-menu py-5">
    <ul class="flex place-items-center">
      <HeaderNavItem
        v-for="(link, index) in links"
        :key="index"
        class="hover-underline-animation"
        :class="[
          link.to.name === currentRouteName
            ? 'underline underline-offset-[6px] decoration-2 decoration-dark-purple'
            : '',
        ]"
        :title="link.title"
        :to="link.to"
        :sublinks="link.sublinks"
      >
        <span
          class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-dark-purple"
        ></span>
      </HeaderNavItem>
      <button
        v-if="!userStore.isLoggedIn"
        title="Login"
        :to="{ name: 'Login' }"
        class="arrow-button border-2 border-[#637EFE] shadow"
      >
        Sign in
        <span class="arrow"></span>
      </button>
      <HeaderNavItem
        v-else
        :title="getName()"
        :sublinks="profilelinks"
        to="#"
      ></HeaderNavItem>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import links, { ProfileLinks as profilelinks } from "@/links";
import { computed } from "vue";
import { useRoute } from "vue-router";
import useUserStore from "@/stores/user";

import HeaderNavItem from "./HeaderNavItem.vue";

const userStore = useUserStore();
const getName = (): string => {
  return `${userStore.user?.first_name} ${userStore.user?.last_name}`;
};

const route = useRoute();
const currentRouteName = computed(() => route.name);
console.log(currentRouteName.value);
</script>

<style scoped></style>

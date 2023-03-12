<template>
  <nav class="navigation-menu py-7">
    <ul class="flex place-items-center">
      <HeaderNavItem
        v-for="(link, index) in links"
        :key="index"
        class="hover-underline-animation"
        :title="link.title"
        :to="link.to"
        :sublinks="link.sublinks"
      >
      </HeaderNavItem>
      <button
        v-if="!userStore.isLoggedIn"
        title="Login"
        :to="{ name: 'Login' }"
        class="arrow-button border-2 border-[#637EFE]"
      >
        Sign in
        <span class="arrow"></span>
      </button>
      <button
        v-else
        :title="getName()"
        :sublinks="profilelinks"
        to="#"
      ></button>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import links, { ProfileLinks as profilelinks } from "@/links";
import useUserStore from "@/stores/user";

import HeaderNavItem from "./HeaderNavItem.vue";

const userStore = useUserStore();
const getName = (): string => {
  return `${userStore.user?.first_name} ${userStore.user?.last_name}`;
};
</script>

<style scoped></style>

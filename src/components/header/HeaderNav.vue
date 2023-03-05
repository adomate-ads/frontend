<template>
  <nav class="navigation-menu">
    <ul class="flex">
      <HeaderNavItem
        v-for="(link, index) in links"
        :key="index"
        :title="link.title"
        :to="link.to"
        :sublinks="link.sublinks"
      >
      </HeaderNavItem>
      <HeaderNavItem
        v-if="!userStore.isLoggedIn"
        title="Login"
        :to="{ name: 'Login' }"
      />
      <HeaderNavItem
        v-else
        :title="getName()"
        :sublinks="profilelinks"
        to="#"
      />
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

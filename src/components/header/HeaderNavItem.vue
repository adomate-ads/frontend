<template>
  <li class="relative mr-12 group">
    <AuthLink
      v-if="props.to"
      :to="props.to"
      :auth="props.auth"
      :roles="props.roles"
      :hide-unauthed="props.auth === true"
      class="block text-[16px] font-semibold group-hover:text-colorado-yellow py-2 text-black group-hover:cursor-pointer"
      @click="checkClick()"
    >
      {{ props.title }}
      <i
        v-if="props.sublinks.length > 0"
        class="fa-solid fa-chevron-down ml-2"
      ></i>
      <slot></slot>
    </AuthLink>

    <a
      v-else
      :href="props.href"
      :target="props.sameWindow ? '' : '_blank'"
      class="block text-[16px] font-semibold group-hover:text-colorado-yellow py-7 text-white group-hover:cursor-pointer"
      @click="checkClick()"
    >
      {{ props.title }}
      <i
        v-if="props.sublinks.length > 0"
        class="fa-solid fa-chevron-down ml-2"
      ></i>
      <slot></slot>
    </a>

    <ul
      v-if="props.sublinks.length > 0"
      class="top-full left-0 absolute w-[200px] bg-white dark:bg-black-deep border-b-[3px] border-primary py-4 shadow-md shadow-black/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-[20px] group-hover:translate-y-0 z-30"
    >
      <li v-for="(link, index) in props.sublinks" :key="index">
        <AuthLink
          v-if="link.to"
          :to="link.to"
          :auth="link.auth"
          :roles="link.roles"
          :hide-unauthed="link.auth === true"
          class="block text-heading-light dark:text-white-deep font-semibold py-1 px-4 hover:text-primary dark:hover:text-colorado-yellow hover:bg-gray-light dark:hover:bg-body"
        >
          {{ link.title }}
        </AuthLink>
        <a
          v-else
          :href="link.href"
          :target="link.sameWindow ? '' : '_blank'"
          class="block text-heading-light dark:text-white-deep font-semibold py-1 px-4 hover:text-primary dark:hover:text-colorado-yellow hover:bg-gray-light dark:hover:bg-body"
        >
          {{ link.title }}
        </a>
      </li>
    </ul>
  </li>
</template>

<script setup lang="ts">
import AuthLink from "@/components/AuthLink.vue";
import { Link } from "@/types";

const props = withDefaults(defineProps<Link>(), {
  title: "",
  to: "#",
  sublinks: () => [],
});
// @TODO Replace by extending RouteLink
const checkClick = (): boolean => {
  if (props.href) {
    window.location.href = props.href;
    return false;
  }
  return true;
};
</script>

<style scoped></style>

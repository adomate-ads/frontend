<template>
  <li class="mb-1.5 relative group border-b border-gray-200 pb-2">
    <AuthLink
      v-if="props.to"
      :to="props.to"
      :auth="props.auth"
      :roles="props.roles"
      :hide-unauthed="props.auth === true"
      class="font-semibold leading-9 capitalize text-black group-hover:text-dark-purple"
      @click="
        checkClick();
        $emit('toggle');
      "
    >
      {{ props.title }}
    </AuthLink>
    <a
      v-else
      :href="props.href"
      :target="props.sameWindow ? '' : '_blank'"
      class="font-semibold leading-9 capitalize text-black group-hover:text-dark-purple"
      @click="
        checkClick();
        $emit('toggle');
      "
    >
      {{ props.title }}
    </a>
    <span
      v-if="props.sublinks.length > 0"
      class="submenu-toggle text-lg w-9 h-9 leading-9 top-0 right-0 absolute text-center cursor-pointer inline-block text-black"
    >
      <i
        v-if="props.sublinks.length > 0"
        class="fa-solid fa-chevron-down ml-2"
      ></i>
    </span>
    <ul v-if="props.sublinks.length > 0" class="submenu pt-2 pl-4">
      <li
        v-for="(sl, index) in props.sublinks"
        :key="index"
        class="mb-1.5 font-medium hover:text-dark-purple text-black"
      >
        <AuthLink
          v-if="sl.to"
          :to="sl.to"
          :auth="sl.auth"
          :roles="sl.roles"
          :hide-unauthed="sl.auth === true"
        >
          {{ sl.title }}
        </AuthLink>
        <a v-else :href="sl.href" :target="sl.sameWindow ? '' : '_blank'">
          {{ sl.title }}
        </a>
      </li>
    </ul>
  </li>
</template>

<script setup lang="ts">
import AuthLink from "@/components/AuthLink.vue";
import type { Link } from "@/types";

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
defineEmits(["toggle"]);
</script>

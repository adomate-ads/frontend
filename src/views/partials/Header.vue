<template>
  <div v-if="isSticky">
    <div class="h-[98px]"></div>
  </div>
  <div
    class="header-main shadow-md bg-adomate-off-white text-black"
    :class="[
      isSticky
        ? 'fixed top-0 left-0 w-full z-50 transition-all shadow-md animate-fadeInDown'
        : '',
    ]"
  >
    <div class="py-4 lg:py-1">
      <div class="container mx-auto">
        <div class="grid grid-cols-4 items-center justify-between">
          <div class="col-span-3 lg:col-span-1 logo">
            <router-link to="/">
              <img
                src="/src/assets/adomate.svg"
                class="h-[60px] py-4 px-4"
                alt="logo"
              />
            </router-link>
          </div>
          <div class="col-span-2 lg:col-span-3 hidden lg:block ml-auto">
            <HeaderNav />
          </div>
          <div class="col-span-1 text-right block lg:hidden">
            <button
              class="text-black text-xl w-11 h-11 leading-10 rounded-md border-[1px] border-white hover:bg-primary hover:text-black hover:border-white transition-all"
              @click="toggleNav()"
            >
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <MobileMenu
      :class="{ 'show-mobile-menu': navOpen }"
      @toggle="toggleNav()"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import HeaderNav from "@/components/header/HeaderNav.vue";
import MobileMenu from "@/components/header/MobileMenu.vue";

const isSticky = ref(false);
const navOpen = ref(false);
const toggleNav = (): void => {
  navOpen.value = !navOpen.value;
};
onMounted(() => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 88) {
      isSticky.value = true;
    }
    if (window.scrollY === 0) {
      isSticky.value = false;
    }
  });
});
</script>

<style scoped lang="postcss">
.show-mobile-menu {
  @apply opacity-100 visible;
}
</style>
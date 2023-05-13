<template>
  <div
    v-if="loading"
    key="element1"
    class="flex items-center justify-center h-screen bg-adomate-off-white"
  >
    <FadeOut>
      <Loader />
    </FadeOut>
  </div>
  <div v-else key="element2" class="bg-adomate-off-white">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import FadeOut from "@/components/FadeOut.vue";
import Footer from "@/views/partials/Footer.vue";
import Header from "@/views/partials/Header.vue";
import Loader from "@/components/Loader.vue";
import { ref } from "vue";

const loading = ref(true);

// eslint-disable-next-line func-names
const interval = setInterval(function () {
  loading.value = false;
  clearInterval(interval);
}, 1500);
</script>

<style scoped></style>

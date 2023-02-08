<template>
  <Header />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Footer from "@/views/partials/Footer.vue";
import Header from "@/views/partials/Header.vue";
</script>

<style scoped></style>

<template>
  <Header />
  <main>
    <div class="container mx-auto">
      <router-view />
    </div>
  </main>
  <!--  <Footer />-->
</template>

<script setup lang="ts">
import Header from "@/views/partials/Header.vue";
// import Footer from "@/components/footer/Footer.vue";
</script>

<style scoped></style>

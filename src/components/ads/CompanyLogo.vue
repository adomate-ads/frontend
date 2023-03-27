<template>
  <div class="w-4 h-4 bg-gray-300 rounded-full">
    <img :src="props.icon" alt="icon" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: string;
}>();
</script>

<style scoped></style>

<template>
  <div class="my-3 flex">
    <i class="fa-solid fa-check-circle text-light-purple w-6 h-6"></i>
    <p class="ml-2 text-md text-gray-600">{{ props.feature }}</p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ feature: string }>();
</script>

<style scoped></style>

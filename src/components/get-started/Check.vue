<template>
  <div class="flex align-middle gap-x-2">
    <div
      class="bg-dark-purple rounded-full w-8 h-8 text-center pt-1 transition duration-100"
      :class="[
        {
          'bg-gray-300': !props.completed && !props.in_progress,
          'bg-adomate-off-white border-2 border-dashed border-dark-purple':
            props.in_progress,
        },
        props.in_progress ? 'text-dark-purple' : 'text-adomate-off-white',
      ]"
    >
      <i class="fa-solid fa-check"></i>
    </div>
    <p
      class="pt-1"
      :class="{
        'text-gray-300': !props.completed && !props.in_progress,
        'text-gray-400': props.in_progress,
      }"
    >
      <slot></slot>
    </p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  in_progress: boolean;
  completed: boolean;
}>();
</script>

<style scoped></style>

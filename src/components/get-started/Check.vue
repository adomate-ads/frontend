<template>
  <div class="flex align-middle gap-x-2">
    <div
      v-if="!final"
      class="rounded-full w-8 h-8 text-center pt-1 transition duration-100"
      :class="[
        {
          'bg-gray-300': !props.completed && !props.inProgress,
          'bg-adomate-off-white border-2 border-dashed border-dark-purple':
            props.inProgress,
          'bg-dark-purple': props.completed,
        },
        props.inProgress ? 'text-dark-purple' : 'text-adomate-off-white',
      ]"
    >
      <i class="fa-solid fa-check"></i>
    </div>
    <div
      v-else
      class="rounded-full w-8 h-8 text-center pt-0.5 transition duration-100"
      :class="[
        {
          'bg-gray-300': !props.completed && !props.inProgress,
          'bg-adomate-off-white border-2 border-dashed border-dark-purple':
            props.inProgress,
          'bg-dark-purple': props.completed,
        },
        props.inProgress ? 'text-dark-purple' : 'text-adomate-off-white',
      ]"
    >
      <i class="fa-solid fa-star"></i>
    </div>
    <p
      class="pt-1"
      :class="{
        'text-gray-300': !props.completed && !props.inProgress,
        'text-gray-400': props.inProgress,
      }"
    >
      <slot></slot>
    </p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  final: boolean;
  inProgress: boolean;
  completed: boolean;
}>();
</script>

<style scoped></style>

<template>
  <label :for="props.id" class="block text-sm font-medium text-gray-700">
    {{ props.label }}
  </label>
  <div class="mt-1">
    <input
      :id="props.id"
      v-model="input"
      :type="props.type"
      :placeholder="props.placeholder"
      :class="
        'shadow-sm border-2 p-3 transition border-light-purple placeholder-shown:border-gray-300 ' +
        'focus:border-dark-purple invalid:border-red-500 block w-full sm:text-sm rounded-md outline-none ' +
        props.additionalClasses
      "
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  additionalClasses: {
    type: String,
    default: "",
  },
});

const input = ref("");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const emits = defineEmits(["update:modelValue"]);
</script>

<style scoped></style>

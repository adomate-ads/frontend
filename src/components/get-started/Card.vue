<template>
  <div class="w-1/2 bg-adomate-off-white drop-shadow-lg rounded-2xl">
    <div class="grid grid-cols-5 divide-x-2">
      <div class="col-span-3 p-6">
        <slot name="left"> </slot>
      </div>
      <div class="col-span-2 p-6">
        <slot name="right"> </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

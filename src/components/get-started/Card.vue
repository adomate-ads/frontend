<template>
  <div
    class="w-full xl:w-3/5 md:w-5/6 bg-adomate-off-white md:border-dark lg:border-2 rounded-2xl"
  >
    <div class="grid grid-cols-1 lg:grid-cols-5 divide-x-2">
      <div class="col-span-3 p-6">
        <slot name="left"> </slot>
      </div>
      <div class="col-span-2 p-6">
        <slot name="right"> </slot>
      </div>
    </div>
  </div>
</template>

<template>
  <lottie-player
    src="https://raw.githubusercontent.com/adomate-ads/frontend/master/src/assets/lottie/logo.json"
    :background="props.background"
    speed="1"
    :style="`width: ${props.width}px; height: ${props.height}px`"
    loop
    autoplay
  ></lottie-player>
</template>

<script lang="ts" setup>
interface Props {
  width?: number;
  height?: number;
  background?: string;
}

const props = withDefaults(defineProps<Props>(), {
  width: 200,
  height: 200,
  background: "#FAF9F6",
});
</script>

<style scoped></style>

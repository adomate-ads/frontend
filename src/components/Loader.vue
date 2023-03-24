<template>
  <div class="fade-in-out-container">
    <lottie-player
      src="https://raw.githubusercontent.com/adomate-ads/frontend/master/src/assets/lottie/logo.json"
      background="transparent"
      speed="1"
      style="width: 200px; height: 200px"
      loop
      autoplay
    ></lottie-player>
    <!-- Other content of the page goes here -->
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.fade-in-out-container {
  opacity: 0;
  background-color: white;
  animation: fade-in-out 2s ease-in-out forwards;
}

@keyframes fade-in-out {
  0% {
    opacity: 1;
    background-color: white;
  }
  50% {
    opacity: 1;
    background-color: white;
  }
  100% {
    opacity: 0;
    background-color: transparent;
  }
}

.fade-in-out-container .fade-out {
  opacity: 1;
  animation: fade-out 1s ease-in-out forwards;
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>

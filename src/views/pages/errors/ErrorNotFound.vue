<template>
  <div class="w-full">
    <div class="w-full h-full items-center text-center">
      <img src="@/assets/404.png" class="w-1/3 h-full mx-auto" />
      <h1 class="text-center text-6xl font-bold">
        Whoops! That page doesn't exist.
      </h1>
      <h2 class="mt-4 text-2xl">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </h2>
      <RouterLink to="/">
        <button
          class="bg-dark-purple text-white font-semibold tracking-wide px-4 py-4 rounded ml-5 mt-10"
        >
          <i class="fa-solid fa-arrow-left mr-2"></i>
          Back to Homepage
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<template>
  <div class="bg-dark-purple py-20 px-5">
    <div class="flex flex-col items-center pt-10">
      <h1 class="text-5xl font-bold text-white">Resources</h1>
      <p class="text-white text-center mt-4">
        We've compiled a list of resources to help you get started with Adomate.
      </p>
    </div>
    <div id="resources" class="flex flex-row gap-x-4 justify-center mt-4 pb-10">
      <a
        href="mailto:support@adomate.ai"
        class="rounded-3xl text-white text-center text-sm border-2 p-3"
      >
        Contact us
      </a>
      <a
        href="#blog"
        class="rounded-3xl text-white text-center text-sm border-2 p-3"
        >Read our blog</a
      >
    </div>
  </div>

  <div
    id="blog"
    class="flex flex-row justify-between items-center mx-[1em] md:mx-[20em]"
  >
    <h1
      class="text-2xl xl:text-3xl font-semibold text-dark-purple subpixel-antialiased text-left py-10"
    >
      Blog
    </h1>
    <a href="https://twitter.com/adomate" class="rounded-md text-dark-purple">
      Adomate on Twitter
      <i class="fas fa-angle-right"></i>
    </a>
  </div>
  <div class="grid xl:grid-cols-2 items-stretch mx-[1em] md:mx-[20em] pb-10">
    <div
      v-for="(blog, index) in blogs"
      id="card"
      :key="index"
      class="bg-adomate-off-white border-2 rounded-lg p-4 m-2"
    >
      <img
        :src="blog.img_src"
        alt="Card Image"
        class="w-full h-32 object-cover mb-4 rounded-lg"
      />
      <h3 class="text-lg font-bold text-gray-800 mb-2">
        {{ blog.headline }}
      </h3>
      <h1 class="text-gray-800 mb-2 font-semibold">{{ blog.sub }}</h1>
      <p class="text-gray-800 mb-2">{{ blog.description }}</p>
      <a :href="blog.link" class="rounded-md text-dark-purple">
        Read More
        <i class="fas fa-angle-right"></i>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Blog } from "@/types";
import Blogs from "@/data/blogs.js";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      blogs: Blogs as Blog[],
    };
  },
});
</script>
<style scoped></style>

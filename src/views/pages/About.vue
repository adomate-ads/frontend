<template>
  <div id="about">
    <fade-in :threshold="0.1">
      <section class="container mx-auto px-5 sm:px-10 py-10 lg:py-5">
        <div class="grid lg:grid-cols-12 gap-12">
          <div class="lg:col-span-6">
            <div class="w-full h-full flex flex-col justify-center">
              <div class="mb-8">
                <span
                  class="text-sm text-extra-dark-purple font-bold inline-block"
                >
                  About Us
                </span>
              </div>
              <h1
                class="mb-8 text-3xl font-extrabold sm:text-4xl xl:text-5xl text-gray-900"
              >
                A small team passionate about helping small businesses grow
              </h1>
              <p class="text-base text-gray-500 max-w-3xl mb-8">
                We supply businesses of all sizes with modern Ad automation
                tools allowing you to focus on your customers or something like
                that. We believe that with our talented team, smart technology
                and engaged users we can solve some of the biggest problems for
                small businesses.
              </p>
              <div class="flex items-center space-x-4">
                <button class="arrow-button border-2 border-[#637EFE] shadow">
                  Get Started
                  <span class="arrow"></span>
                </button>
                <a
                  href="#"
                  class="text-gray-900 inline-flex items-center space-x-2 p-2 hover:text-dark-purple font-semibold transition"
                >
                  <span>Contact us</span>
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="lg:col-span-6 relative w-full hidden lg:block">
            <div class="w-full">
              <img src="@/assets/about/team.svg" />
            </div>
          </div>
        </div>
      </section>
    </fade-in>

    <fade-in>
      <section class="py-10">
        <div class="container max-w-7xl mx-auto px-5 sm:px-10">
          <div
            class="border-b border-gray-200 pb-6 grid place-items-center grid-cols-2 lg:grid-cols-4 gap-8 justify-center"
          >
            <div>
              <h3
                class="text-dark-purple text-2xl lg:text-3xl xl:text-5xl font-bold text-center lg:text-start"
              >
                +2000
              </h3>
              <div class="mt-3 text-gray-500 text-base font-medium">
                Businesses running Ads
              </div>
            </div>
            <div>
              <h3
                class="text-dark-purple text-2xl lg:text-3xl xl:text-5xl font-bold text-center lg:text-start"
              >
                $10,000
              </h3>
              <div class="mt-3 text-gray-500 text-base font-medium">
                Spent Daily
              </div>
            </div>
            <div>
              <h3
                class="text-dark-purple text-2xl lg:text-3xl xl:text-5xl font-bold text-center lg:text-start"
              >
                100k
              </h3>
              <div class="mt-3 text-gray-500 text-base font-medium">
                Targeted Keywords
              </div>
            </div>
            <div>
              <h3
                class="text-dark-purple text-2xl lg:text-3xl xl:text-5xl font-bold text-center lg:text-start"
              >
                100M
              </h3>
              <div class="mt-3 text-gray-500 text-base font-medium">
                Daily Click
              </div>
            </div>
          </div>
        </div>
      </section>
    </fade-in>

    <!-- What we do -->
    <fade-in>
      <section class="py-10 mt-5">
        <div class="container max-w-7xl mx-auto px-5 sm:px-10">
          <div class="lg:flex items-center lg:space-x-8">
            <div>
              <div class="mb-6 flex justify-center lg:justify-start">
                <span
                  class="text-sm text-extra-dark-purple font-bold inline-block"
                  >What makes Adomate different?</span
                >
              </div>
              <h2 class="text-gray-900 text-xl md:text-2xl font-bold mb-3">
                Adomate offers a unique approach to advertising with advanced
                automation and optimization algorithms that set us apart. Check
                out our video to see how we can transform your advertising
                campaigns.
              </h2>
            </div>
            <div
              class="w-full aspect-video rounded-2xl overflow-hidden relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                class="w-full h-full object-cover object-center"
                alt=""
              />
              <div
                class="w-full h-full absolute inset-0 bg-black/40 z-10"
              ></div>
              <div
                class="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <button
                  class="text-adomate-off-white bg-dark-purple w-28 h-28 inline-flex items-center justify-center rounded-full hover:scale-110 transition duration-200"
                >
                  <i class="fa-solid fa-play"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </fade-in>

    <fade-in>
      <section class="py-10 lg:mt-8">
        <div class="max-w-7xl mx-auto px-5 sm:px-10">
          <h2
            class="text-center text-gray-900 text-2xl lg:text-5xl font-bold max-w-4xl mx-auto lg:leading-tight mb-5"
          >
            Get started with Adomate
          </h2>
          <p
            class="text-center max-w-2xl mx-auto text-base sm:text-lg text-gray-500 mb-8 lg:mb-12 xl:mb-16"
          >
            Three Stage Pipeline
          </p>

          <div
            class="lg:flex items-center space-y-6 lg:space-y-0 lg:space-x-5 xl:space-x-10"
          >
            <div
              class="flex flex-col justify-center items-center border-b border-gray-200 lg:border-none py-4 pb-8"
            >
              <div class="flex-shrink-0 mb-4 bg-light-purple p-2 rounded-3xl">
                <i class="fa-solid fa-1 w-16 h-16 text-adomate-off-white"></i>
              </div>
              <div>
                <h3
                  class="text-gray-900 text-xl md:text-2xl text-center font-bold mb-3"
                >
                  Run Ads
                </h3>
                <p class="text-gray-600 text-center text-base font-light">
                  Get started with our automated ads platform. To get ads
                  running within 5 minutes.
                </p>
              </div>
            </div>
            <div
              class="flex flex-col justify-center items-center border-b border-gray-200 lg:border-none py-4 pb-8"
            >
              <div class="flex-shrink-0 mb-4 bg-light-purple p-2 rounded-3xl">
                <i class="fa-solid fa-2 w-16 h-16 text-adomate-off-white"></i>
              </div>
              <div>
                <h3
                  class="text-gray-900 text-xl md:text-2xl text-center font-bold mb-3"
                >
                  Optimization
                </h3>
                <p class="text-gray-600 text-center text-base font-light">
                  Our smart optimization engine will automatically optimize your
                  google ads to get the greatest return on investment.
                </p>
              </div>
            </div>
            <div
              class="flex flex-col justify-center items-center border-b border-gray-200 lg:border-none py-4 pb-8"
            >
              <div class="flex-shrink-0 mb-4 bg-light-purple p-2 rounded-3xl">
                <i class="fa-solid fa-3 w-16 h-16 text-adomate-off-white"></i>
              </div>
              <div>
                <h3
                  class="text-gray-900 text-xl md:text-2xl text-center font-bold mb-3"
                >
                  Analytics
                </h3>
                <p class="text-gray-600 text-center text-base font-light">
                  See how we've optimized your ads and how much money you've
                  saved, and how much additional traffic you've generated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </fade-in>

    <fade-in>
      <section class="py-10 mt-5 lg:mt-10">
        <div class="max-w-7xl mx-auto px-5 sm:px-10">
          <div class="mb-6 flex justify-start">
            <span class="text-sm text-extra-dark-purple font-bold inline-block">
              How we're different
            </span>
          </div>
          <h2
            class="text-gray-900 text-2xl lg:text-5xl font-bold max-w-xl lg:leading-tight mb-5"
          >
            AI that runs the world's best ads
          </h2>
          <p class="text-lg lg:text-xl text-gray-500 mb-8 max-w-3xl">
            As data continues to drive the forefront of innovation, we're giving
            your small business the tools to compete with the big guys.
          </p>

          <div
            class="lg:flex space-y-6 lg:space-y-0 lg:space-x-8 xl:space-x-12 mt-10"
          >
            <div
              v-for="(caseStudy, index) in caseStudies"
              :key="index"
              class="py-4 sm:py-6 w-full"
            >
              <div
                class="w-12 h-12 bg-dark-purple rounded-lg flex items-center justify-center text-adomate-off-white"
              >
                <i :class="`fa-solid fa-${caseStudy.icon} w-7 h-7`"></i>
              </div>
              <h3 class="text-gray-800 font-bold my-5 text-xl xl:text-2xl">
                {{ caseStudy.title }}
              </h3>
              <p class="text-gray-600 mb-5">
                {{ caseStudy.description }}
              </p>
              <a
                :href="caseStudy.link"
                class="rounded-3xl font-bold text-dark-purple inline-flex items-center space-x-1 py-3 transition duration-300 group"
              >
                <span>Learn more</span>
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </fade-in>

    <!-- Team -->
    <fade-in>
      <section class="py-10 mt-5 lg:mt-10">
        <div class="max-w-7xl mx-auto px-5 sm:px-10">
          <h2
            class="text-gray-900 text-2xl lg:text-5xl font-bold lg:leading-tight mb-4"
          >
            Our Team
          </h2>
          <p class="text-base sm:text-lg text-gray-500 mb-8 lg:mb-12">
            Our talented team of professionals provides innovative solutions and
            exceptional service to our clients. With diverse expertise and
            experience, we work collaboratively to deliver the best possible
            results.
          </p>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="(member, idx) in Members" :key="idx">
              <div class="h-40 sm:h-64 w-full overflow-hidden rounded-lg">
                <img
                  :src="member.image"
                  class="w-full h-full object-cover object-center"
                  alt=""
                />
              </div>
              <div class="mt-5 text-gray-400 text-sm">{{ member.role }}</div>
              <div class="mt-1 text-black text-xl font-bold">
                {{ member.name }}
              </div>
              <div
                class="text-gray-400 hover:underline hover:decoration-dark-purple text-sm"
              >
                <a :href="`mailto:${member.email}`">{{ member.email }}</a>
              </div>

              <div class="flex items-center space-x-3 mt-3">
                <a
                  v-if="member.facebook"
                  :href="member.facebook"
                  target="_blank"
                  class="w-7 h-7 text-sm inline-flex items-center justify-center text-white bg-gray-300 hover:bg-dark-purple transition duration-300 hover:-translate-y-0.5 rounded-full"
                >
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  v-if="member.twitter"
                  :href="member.twitter"
                  target="_blank"
                  class="w-7 h-7 text-sm inline-flex items-center justify-center text-white bg-gray-300 hover:bg-dark-purple transition duration-300 hover:-translate-y-0.5 rounded-full"
                >
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a
                  v-if="member.instagram"
                  :href="member.instagram"
                  target="_blank"
                  class="w-7 h-7 text-sm inline-flex items-center justify-center text-white bg-gray-300 hover:bg-dark-purple transition duration-300 hover:-translate-y-0.5 rounded-full"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a
                  v-if="member.linkedin"
                  :href="member.linkedin"
                  target="_blank"
                  class="w-7 h-7 text-sm inline-flex items-center justify-center text-white bg-gray-300 hover:bg-dark-purple transition duration-300 hover:-translate-y-0.5 rounded-full"
                >
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a
                  v-if="member.github"
                  :href="member.github"
                  target="_blank"
                  class="w-7 h-7 text-sm inline-flex items-center justify-center text-white bg-gray-300 hover:bg-dark-purple transition duration-300 hover:-translate-y-0.5 rounded-full"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </fade-in>
  </div>
</template>

<script lang="ts" setup>
import FadeIn from "@/components/FadeIn.vue";
import Members from "@/data/team";

const caseStudies = [
  {
    title: "Some Business -1",
    icon: "business-time",
    description: "Case Study summarized here, what were our findings.",
    link: "#",
  },
  {
    title: "Some Business -2",
    icon: "briefcase",
    description: "Case Study summarized here, what were our findings.",
    link: "#",
  },
  {
    title: "Some Business -2",
    icon: "fax",
    description: "Case Study summarized here, what were our findings.",
    link: "#",
  },
];
</script>

<style scoped></style>

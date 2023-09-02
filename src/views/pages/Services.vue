<template>
  <fade-in>
    <div id="services-landing" class="py-10">
      <div class="w-full flex place-items-center flex-col">
        <h1
          class="text-4xl xl:text-5xl font-semibold subpixel-antialiased text-center pt-10 px-5"
        >
          Tools built to help scale
          <strong class="h-full w-full text-dark-purple">your</strong>
          business
        </h1>
        <p
          class="text-l text-center pt-6 px-5 mx-10 border-b-2 lg:border-b-0 pb-10 hover:border-dark-purple transition ease-in-out delay-50"
        >
          Efficiently grow your business with our automated advertising
          services. Advanced algorithms optimize campaigns for increased traffic
          and higher conversion rates.
        </p>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row my-0 lg:my-20">
      <div
        class="w-full lg:w-1/2 flex justify-center flex-col items-center lg:items-start px-10 lg:px-20"
      >
        <h1
          class="text-3xl xl:text-4xl font-semibold subpixel-antialiased text-center lg:text-left"
        >
          Monitor your analytics using our 24/7 dashboard
        </h1>
        <p class="text-center lg:text-left pt-6">
          Manage your campaigns, track your performance, get insights, and more
          using our dashboard tool.
        </p>
        <a href="https://app.adomate.ai">
          <button
            class="arrow-button border-2 border-[#637EFE] shadow mt-4 mb-20 lg:mb-0"
          >
            Go to dashboard
            <span class="arrow"></span>
          </button>
        </a>
      </div>
      <div class="w-full lg:w-1/2 flex justify-center items-center relative">
        <div class="absolute w-4/5 h-full">
          <div
            class="bg-dark-purple rounded-full blur-2xl w-full h-full opacity-25"
          ></div>
        </div>
        <img
          src="@/assets/home/banner_macbookpro15_front.png"
          class="w-4/5 max-w-full relative z-10"
        />
      </div>
    </div>
  </fade-in>

  <fade-in>
    <div class="flex flex-col-reverse lg:flex-row pt-20 my-0 lg:my-20">
      <div class="w-full lg:w-1/2 flex justify-center items-center relative">
        <div class="absolute w-4/5 h-full">
          <div
            class="bg-dark-purple rounded-full blur-2xl w-full h-full opacity-25"
          ></div>
        </div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/010/925/603/original/marketing-campaign-business-strategy-digital-product-advertising-target-audience-in-social-media-brand-communication-company-website-flat-design-modern-illustration-vector.jpg"
          class="w-3/4 max-w-4/5 relative z-10 rounded-md"
        />
      </div>
      <div
        class="w-full lg:w-1/2 flex justify-center flex-col items-center lg:items-start px-10 lg:px-20"
      >
        <h1
          class="text-3xl xl:text-4xl font-semibold subpixel-antialiased text-center lg:text-left"
        >
          Custom target locations and ad spending limit
        </h1>
        <p class="text-center lg:text-left pt-6">
          You are in complete control of your campaign location targets and
          budgeting. We have a variety of plans to suit the needs of your
          business.
        </p>
        <router-link to="/pricing">
          <button
            class="arrow-button border-2 border-[#637EFE] shadow mt-4 mb-20 lg:mb-0"
          >
            See plans
            <span class="arrow"></span>
          </button>
        </router-link>
      </div>
    </div>
  </fade-in>

  <!-- FAQ Section -->
  <div id="faq" class="w-full">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 250">
      <path
        fill="#637EFE"
        fill-opacity="1"
        d="M0,128L26.7,133.3C53.3,139,107,149,160,165.3C213.3,181,267,203,320,218.7C373.3,235,427,245,480,224C533.3,203,587,149,640,138.7C693.3,128,747,160,800,176C853.3,192,907,192,960,181.3C1013.3,171,1067,149,1120,149.3C1173.3,149,1227,171,1280,176C1333.3,181,1387,171,1413,165.3L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
      ></path>
    </svg>
    <div
      class="bg-[#637EFE] py-8 px-8 md:px-28 flex flex-col lg:flex-row gap-8 align-top pt-20"
    >
      <div class="text-gray-200 flex justify-start items-start mb-8 pr-20">
        <div class="sticky top-32">
          <div class="lg:flex w-20 h-20 bg-white rounded-full mb-5">
            <i
              class="m-auto fa-solid fa-question text-dark-purple w-14 h-14"
            ></i>
          </div>
          <p class="text-4xl font-semibold text-white">
            Frequently Asked Questions
          </p>
          <p class="text-xl pt-2">Commonly asked questions about Adomate.</p>
          <p class="text-xl pt-2">Need more support?</p>
          <a
            class="underline text-xl pt-2 hover:text-white"
            href="mailto:support@adomate.ai"
            >Contact our team.</a
          >
        </div>
      </div>
      <div class="flex flex-col lg:w-2/3">
        <div
          v-for="faq in faqs"
          :key="faq.title"
          class="pb-8 mb-8 border-b-2 border-gray-200 border-opacity-10 transition-all hover:border-opacity-80"
        >
          <p class="text-xl md:text-xl font-semibold text-white">
            {{ faq.title }}
          </p>
          <p class="mt-3 text-lg md:text-lg text-white">
            {{ faq.desc }}
          </p>
        </div>
      </div>
    </div>
    <svg
      class="w-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 200"
    >
      <path
        fill="#637EFE"
        fill-opacity="1"
        d="M0,96L40,101.3C80,107,160,117,240,106.7C320,96,400,64,480,53.3C560,43,640,53,720,80C800,107,880,149,960,149.3C1040,149,1120,107,1200,80C1280,53,1360,43,1400,37.3L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
      ></path>
    </svg>
  </div>
</template>

<script lang="ts" setup>
import FadeIn from "@/components/FadeIn.vue";

const faqs = [
  {
    title: "Does Adomate work with my website?",
    desc: "Our tools work with any online business platform. All we need is a link to your business's website to get started.",
  },
  {
    title: "How much does it cost?",
    desc: "Our pricing varies with the size of your business. We offer a variety of services to fit your needs. go to our pricing page to learn more.",
  },
  {
    title: "Why not use an Ad Agency/Manager?",
    desc: "We use a combination of advanced AI tools to provide you with the best results. We provide that at a fraction of the price",
  },
  {
    title: "How does billing work",
    desc: "You will be billed monthly or yearly. You can cancel at any time.",
  },
  {
    title:
      "What is the difference between Adomate and other Ad Agencies/Managers?",
    desc: "Adomate has a team of experts that will work with you to create the best ads for your business. We also use advanced AI tools to provide you with the best results.",
  },
  {
    title: "How can we monitor the performance of our ads?",
    desc: "We will have a dashboard that will allow you to monitor the performance of your ads. We will also provide you with a monthly report.",
  },
];
</script>
<style scoped></style>

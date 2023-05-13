<template>
  <fade-in>
    <div id="services-landing" class="py-10">
      <div class="w-full flex place-items-center flex-col">
        <h1
          class="text-4xl xl:text-5xl font-semibold subpixel-antialiased text-center pt-10 px-5"
        >
          Services built to help scale
          <strong
            class="h-full w-full transition hover:text-transparent ease-in-out bg-clip-text bg-gradient-to-br from-dark-purple via-light-purple to-dark-purple"
          >
            your
          </strong>
          business
        </h1>
        <p
          class="text-l text-center pt-6 px-5 mx-10 border-b-2 lg:border-b-0 pb-10"
        >
          Efficiently grow your business with our automated advertising
          services. Advanced algorithms optimize campaigns for increased traffic
          and higher conversion rates.
        </p>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row my-0 lg:my-20">
      <div
        class="w-full lg:w-1/2 flex justify-center flex-col items-center lg:items-start px-10 lg:px-40"
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
        <button
          class="arrow-button border-2 border-[#637EFE] shadow mt-4 mb-20 lg:mb-0"
        >
          Get Started
          <span class="arrow"></span>
        </button>
      </div>
      <div class="w-full lg:w-1/2 flex justify-center items-center relative">
        <div class="absolute w-4/5 h-full">
          <div
            class="bg-dark-purple rounded-full blur-2xl w-full h-full opacity-40"
          ></div>
        </div>
        <img
          src="@/assets/home/banner_macbookpro15_front.png"
          class="w-4/5 max-w-full relative z-10"
        />
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
          <svg
            class="hidden lg:flex w-20 fill-white mb-5"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0 M 501 191C 626 191 690 275 690 375C 690 475 639 483 595 513C 573 525 558 553 559 575C 559 591 554 602 541 601C 541 601 460 601 460 601C 446 601 436 581 436 570C 436 503 441 488 476 454C 512 421 566 408 567 373C 566 344 549 308 495 306C 463 303 445 314 411 361C 400 373 384 382 372 373C 372 373 318 333 318 333C 309 323 303 307 312 293C 362 218 401 191 501 191C 501 191 501 191 501 191M 500 625C 541 625 575 659 575 700C 576 742 540 776 500 775C 457 775 426 739 425 700C 425 659 459 625 500 625C 500 625 500 625 500 625"
            />
          </svg>
          <p class="text-4xl font-semibold text-white">
            Frequently Asked Questions
          </p>
          <p class="text-xl pt-2">Everything you need to know about Adomate.</p>
          <p class="text-xl pt-2">Can't find what you're looking for?</p>
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
    desc: "Our pricing varies with the size of your business. We offer a variety of services to fit your needs. But buy enterprise even if you're a small business. It's worth it.",
  },
  {
    title: "Why not use an Ad Agency/Manager?",
    desc: "We use a combination of advanced AI tools to provide you with the best results. We provide that at a fraction of the price",
  },
  {
    title: "How does billing work",
    desc: "You pay us money. We give you services. It's that simple.",
  },
  {
    title: "She like the way that I dance, she like the way that I move",
    desc: "She like the way that I rock, she like the way that I woo",
  },
  {
    title: "Another question",
    desc: "Another answer",
  },
  {
    title: "How can we monitor the performance of our ads?",
    desc: "We will have a dashboard that will allow you to monitor the performance of your ads. We will also provide you with a monthly report.",
  },
];
</script>
<style scoped></style>

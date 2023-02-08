<template>
  <div id="landing-page" class="bg-extra-light-purple py-10">
    <div class="container mx-auto px-12 my-20">
      <div class="grid grid-cols-12 gap-x-20">
        <div class="col-span-7">
          <h1
            class="text-6xl font-bold tracking-wide mb-10 subpixel-antialiased"
          >
            Automated Ads Campaigns
          </h1>
          <h2 class="text-2xl text-gray-700 mb-10">
            Built on fundamentals, fueled by data and driven by machines.
          </h2>
          <div class="flex mb-10">
            <button
              class="bg-dark-purple text-white font-semibold tracking-wide px-4 py-4 rounded mr-5"
            >
              Get Started
              <i class="fa-solid fa-arrow-right ml-2"></i>
            </button>
            <button class="bg-transparent text-black px-8 py-y rounded-lg">
              <i class="fa-solid fa-play mx-1 text-dark-purple"></i>
              Learn More
            </button>
          </div>
          <div class="flex mb-10">
            <div class="flex items-center mr-10">
              <i
                class="fa-solid fa-money-bill text-dark-purple mr-2 p-3 bg-white rounded-full h-6 w-6"
              ></i>
              <div>
                <h4 class="text-3xl font-bold text-dark-purple -mb-2">+13k</h4>
                <span class="text-gray-700 text-sm">Dollars Spent</span>
              </div>
            </div>
            <div class="flex items-center mr-10">
              <i
                class="fa-solid fa-building text-dark-purple mr-2 p-3 bg-white rounded-full h-6 w-6"
              ></i>
              <div>
                <h4 class="text-3xl font-bold text-dark-purple -mb-2">
                  +1,500
                </h4>
                <span class="text-gray-700 text-sm">Companies</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-5 p-10">
          <div
            class="outline outline-4 outline-dark-purple outline-offset-8 rounded-3xl"
          >
            <img
              src="@/assets/home/banner.png"
              class="rounded-3xl relative left-5 bottom-5"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="how-it-works">
    <div class="container mx-auto px-12 my-32">
      <div class="grid grid-cols-4 gap-x-10">
        <div class="col-span-1">
          <h2 class="text-6xl font-bold mb-10">How It Works</h2>
          <p class="text-gray-700 mb-10">
            Do your thing 21, do you thing. Do your thing 21 do you thing. I
            like girls who are boys - Drake
          </p>
        </div>
        <div class="col-span-1 border-b-2">
          <i
            class="fa-solid fa-database text-black mt-2 mb-2 p-6 bg-gray-200 rounded-full h-8 w-8"
          ></i>
          <h2 class="text-2xl font-bold mb-2">1. Data Parser</h2>
          <p class="text-gray-700 mb-10 text-justify">
            We start by collecting your website info... scraping, scanning,
            keyword prediction whatever.
          </p>
        </div>
        <div class="col-span-1 border-b-2">
          <i
            class="fa-solid fa-chart-line text-black mt-2 mb-2 p-6 bg-gray-200 rounded-full h-8 w-8"
          ></i>
          <h2 class="text-2xl font-bold mb-2">2. Optimized Bidding</h2>
          <p class="text-gray-700 mb-10 text-justify">
            We optimizing our bidding process... We optimizing our bidding
            process... We optimizing our bidding process...
          </p>
        </div>
        <div class="col-span-1 border-b-2">
          <i
            class="fa-solid fa-chart-simple text-black mt-2 mb-2 p-6 bg-gray-200 rounded-full h-8 w-8"
          ></i>
          <h2 class="text-2xl font-bold mb-2">3. Analytics</h2>
          <p class="text-gray-700 mb-10 text-justify">
            We check to see which keywords are converting the most and target
            those, or something like that...
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#landing-page {
  background-image: url("@/assets/home/bg-pill.svg");
  background-repeat: no-repeat;
  background-size: 900px;
  background-position: 80% -25%;
}
</style>

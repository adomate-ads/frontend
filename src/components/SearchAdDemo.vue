<template>
  <div class="demo">
    <p class="sponsored">Sponsored</p>
    <div class="demo-header">
      <div class="demo-favicon">
        <img :src="props.faviconUrl" alt="" />
      </div>
      <div class="demo-title">
        <p class="demo-company-name">{{ props.companyName }}</p>
        <p class="demo-company-url">{{ props.companyUrl }}</p>
      </div>
    </div>
    <div class="demo-headline">{{ props.headline }}</div>
    <div class="demo-description">
      {{
        props.description.length > 150
          ? props.description.slice(0, 150) + "..."
          : props.description
      }}
    </div>
  </div>
</template>
<script lang="ts" setup>
interface AdProps {
  faviconUrl: string;
  companyName: string;
  companyUrl: string;
  headline: string;
  description: string;
}
const props = withDefaults(defineProps<AdProps>(), {
  faviconUrl: "https://adomate.ai/logo.png",
  companyName: "adomate.ai",
  companyUrl: "https://adomate.ai",
  headline: "The easiest way to run digital ads for small businesses",
  description:
    "Say goodbye to the headache of digital advertising! Adomate makes it easy to create and manage your Google Ads, all in one place. Plus, our analytics tools help you track your campaigns and make informed decisions.",
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
.ad {
  font-family: "Roboto", sans-serif;
}
.sponsored {
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 6px;
}

.demo-header {
  display: flex;
  align-items: center;
}
.demo-company-name {
  font-size: 14px;
}
.demo-company-url {
  font-size: 12px;
}
.demo-headline {
  font-size: 20px;
  font-weight: 400;
  color: rgb(26, 13, 171);
  margin-bottom: 2px;
  margin-top: 5px;
}
.demo-description {
  font-size: 14px;
  line-height: 22.12px;
  color: rgb(77, 81, 86);
}

.demo-favicon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgb(241, 243, 244);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
}
.demo-favicon img {
  width: 18px;
  height: 18px;
}
</style>

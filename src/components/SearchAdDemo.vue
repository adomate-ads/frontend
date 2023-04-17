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
  faviconUrl: "https://www.amazon.com/favicon.ico",
  companyName: "Amazon.com",
  companyUrl: "https://www.amazon.com",
  headline: "Protein Powder",
  description:
    "Dymatize ISO100 Hydrolyzed Protein Powder, 100% Whey Isolate , 25g of Protein, 5.5g BCAAs, Gluten Free, Fast Absorbing, Easy Digesting, Gourmet Vanilla",
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
.demo {
  width: 600px;
  font-family: "Roboto", sans-serif;

  margin-left: 30px;
  margin-top: 30px;
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

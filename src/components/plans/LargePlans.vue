<template>
  <div
    class="border rounded-2xl p-5 text-left bg-adomate-off-white min-w-[330px] max-w-[380px] mx-auto"
  >
    <h3 class="text-lg font-bold text-adomate-off-black">
      {{ props.plan.name }}
    </h3>
    <div class="flex">
      <h4 class="text-4xl font-bold text-adomate-off-black">
        <span class="text-gray-600">$</span>
        {{ props.monthly ? props.plan.annualPrice : props.plan.monthlyPrice }}
      </h4>
      <span class="mt-3 text-gray-600 text-xl"> /Month </span>
      <span class="mt-4 text-gray-500 ml-2"
        >{{ props.monthly ? "Billed Annually" : "" }}
      </span>
    </div>
    <p class="text-gray-600 mt-4 pb-6 border-b-2">
      {{ props.plan.description }}
    </p>
    <div class="mt-2 h-60">
      <h5 class="text-adomate-off-black font-semibold">
        {{ props.plan.featureTitle }}
      </h5>
      <div v-for="(feature, id) in props.plan.features" :key="id">
        <PlanFeature :feature="feature" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Plan } from "@/types";
import PlanFeature from "@/components/plans/PlanFeature.vue";

const props = defineProps<{
  plan: Plan;
  monthly: boolean; // True is annual, false is monthly
}>();
</script>

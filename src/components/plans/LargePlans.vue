<template>
  <div class="border rounded-2xl p-7">
    <div class="flex">
      <h4 class="text-4xl font-bold">
        ${{
          props.monthly ? props.plan.annual_price : props.plan.monthly_price
        }}
      </h4>
      <span class="mt-4 text-gray-600">
        {{ props.monthly ? "/Month" : "/Year" }}
      </span>
    </div>
    <h3 class="text-2xl font-bold mt-4">{{ props.plan.name }}</h3>
    <p class="text-gray-600 mt-4 pb-6 border-b-2">
      {{ props.plan.description }}
    </p>
    <div class="mt-4">
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

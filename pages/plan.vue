<template>
  <div
    class="mt-12 px-12 pb-12 mx-auto space-y-4 mb-28 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-2xl lg:mx-auto xl:max-w-4xl xl:mx-auto xl:grid-cols-3"
  >
    <div
      class="border border-gray-200 bg-white rounded-lg shadow-sm divide-y divide-gray-200"
      v-for="plan in planStore.plans"
    >
      <div class="p-6">
        <h2 class="text-2xl font-bold leading-6 font-medium text-gray-900">
          {{ planStore.userPlan?.id === plan.id ? " You current plan" : "" }}
          {{ plan.name }}
        </h2>
        <p class="mt-8">
          <span class="text-4xl leading-10 font-extrabold text-gray-900"
            >{{ plan.price }} ₽</span
          >
          <span class="text-base leading-6 font-medium text-gray-500">/mo</span>
        </p>
        <p class="mt-3">
          <span class="text-sm leading-5 text-gray-500"
            >Include {{ plan.device_count }} device
          </span>
        </p>
        <button
          type="button"
          @click="buyPlan(plan.id)"
          class="mt-4 w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm leading-5 font-semibold text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray transition duration-150 ease-in-out"
        >
          Buy {{ plan.name }}
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { usePlan } from "~~/composables/plan/usePlan";
import { usePlanStore } from "~~/composables/plan/usePlanStore";

const { loadPlans, buyPlan, loadUserPlan } = usePlan();
loadPlans();
loadUserPlan();
const planStore = usePlanStore();
</script>

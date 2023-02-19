<template>
  <div
    v-for="config in configStore.configs"
    class="mt-12 px-12 pb-12 mx-auto space-y-4 mb-28 max-w-xl"
  >
    <img :src="config.qr_code" class="w-full m-auto" />
  </div>
</template>
<script setup>
import { useConfig } from "~~/composables/config/useConfig";
import { useConfigStore } from "~~/composables/config/useConfigStore";

const { loadConfigs } = useConfig();
loadConfigs();

const configStore = useConfigStore();
</script>

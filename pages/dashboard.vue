<template>
  <div
    class="flex flex-col justify-end mx-auto px-9 pt-9 max-w-lg bg-center bg-no-repeat bg-contain main-screen"
    :style="{
      backgroundImage: 'url(/img/background-main.png)',
    }"
  >
    <button
      @click="createConfig()"
      type="button"
      class="w-full text-center items-center px-10 mb-20 py-6 border border-transparent text-xl center leading-4 font-medium rounded-2xl text-white bg-[#185BFF70] hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-indigo active:bg-blue-700 transition ease-in-out duration-150"
    >
      Make config
    </button>
  </div>
</template>
<script setup>
import { useConfig } from "~~/composables/config/useConfig";

definePageMeta({
  middleware: process.client ? "auth" : undefined,
  transition: {
    name: "page",
  },
  keepalive: {
    exclude: ["modal"],
  },
});
const auth = useAuthUser();

const { makeConfig } = useConfig();

const createConfig = async () => {
  const { data } = await makeConfig(1);
  navigateTo("/config");
};
</script>
<style>
.main-screen {
  min-height: calc(100vh - 20rem);
}
</style>

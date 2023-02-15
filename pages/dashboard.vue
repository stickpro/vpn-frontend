<template>
  <MainHeader />
  <div
    class="flex flex-col mx-auto px-9 pt-9 max-w-lg"
    style="background-image: url(img/background-main.png)"
  >
    <button
      type="button"
      class="w-full text-center items-center px-10 py-6 border border-transparent text-xl center leading-4 font-medium rounded-2xl text-white bg-[#185BFF] hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-indigo active:bg-blue-700 transition ease-in-out duration-150"
    >
      Make config
    </button>
  </div>
</template>
<script lang="ts" setup>
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

onMounted(() => {
  watchEffect(() => {
    if (!auth.value.loggedIn) {
      navigateTo("/auth/login");
    }
  });
});
</script>

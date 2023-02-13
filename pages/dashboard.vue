<template>
  {{ auth }}
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
da

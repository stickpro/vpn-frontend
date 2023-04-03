<template>
  <div id="app-layout">
    <main class="container mx-auto min-h-screen">
      <MainHeader />
      <slot />
      <MainFooter />
    </main>
  </div>
</template>

<script setup lang="ts">
const { userInfo } = useAuth();

userInfo();
</script>

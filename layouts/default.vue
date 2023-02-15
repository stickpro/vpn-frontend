<template>
  <div id="app-layout" class="bg-[#f0f5f5]">
    <main class="container mx-auto">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import type { Auth } from "~~/types/user";
import { useState, computed, onMounted } from "#imports";

const { userInfo } = useAuth();

const auth = computed(() => useState<Auth>("auth").value);

onMounted(async () => {
  await userInfo();
});
</script>

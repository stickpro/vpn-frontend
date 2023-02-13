<template>
  <div id="app-layout">
    <main>
      <slot />
      {{ auth }}
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

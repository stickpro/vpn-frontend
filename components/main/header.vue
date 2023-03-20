<template>
  <div class="flex mx-auto justify-between px-9 pt-9 max-w-lg">
    <h1 class="text-center text-2xl leading-9 font-extrabold text-gray-900">VPNOCHKA</h1>
    <div class="flex items-center justify-between">
      <span class="font-bold text-xl mr-2 capitalize">{{
        status ? auth.user?.name : auth.user?.balance + " ₽"
      }}</span>
      <!-- On: "bg-indigo-600", Off: "bg-gray-200" -->
      <span
        role="checkbox"
        tabindex="0"
        aria-checked="false"
        aria-labelledby="toggleLabel"
        @click="status = !status"
        :class="status ? 'bg-[#185BFF]' : 'bg-gray-200'"
        class="relative inline-flex flex-shrink-0 h-8 w-16 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline"
      >
        <!-- On: "translate-x-5", Off: "translate-x-0" -->
        <span
          aria-hidden="true"
          :class="status ? 'translate-x-8' : ''"
          class="translate-x-0 inline-block h-7 w-7 rounded-full bg-white shadow transform transition ease-in-out duration-200"
        ></span>
      </span>
    </div>
  </div>
</template>
<script setup>
const status = ref(true);

const auth = useAuthUser();
</script>

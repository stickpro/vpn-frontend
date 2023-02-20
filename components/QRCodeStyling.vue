<template>
  <ClientOnly>
    <VueQr3
      :width="512"
      :height="512"
      :data="content"
      :dotsOptions="{ type: 'extra-rounded', color: 'black' }"
      :cornersSquareOptions="{ type: 'extra-rounded' }"
      :cornersDotOptions="{ type: 'dot' }"
      image="/img/wireguard-icon.png"
    ></VueQr3>
  </ClientOnly>
</template>

<script setup>
import VueQr3 from "./vue3-qr-code-styling";

const props = defineProps({
  content: {
    type: String,
    required: true,
  },
});
const { content } = toRefs(props);
</script>

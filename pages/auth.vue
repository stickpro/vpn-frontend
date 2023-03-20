<template>
  <div class="min-h-screen flex flex-col justify-center px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h1 class="text-left text-5xl leading-9 font-extrabold text-gray-900">VPNOCHKA</h1>
      <h2 class="mt-6 text-left text-3xl leading-9 font-extrabold text-gray-900">
        Войти или зарегистрироваться
      </h2>
      {{ errors }}
    </div>
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="space-y-4 md:space-y-6" v-if="!sencodeStatus">
        <div class="relative">
          <input
            type="tel"
            v-maska
            data-maska="+7 ### ###-##-##"
            v-model="phone"
            @maska="onMaska"
            id="floating_outlined"
            class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_outlined"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >Телефон</label
          >
        </div>
        <button
          @click="sendCode"
          class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Получить код
        </button>
      </div>
      <div class="space-y-4 md:space-y-6" v-else>
        <label
          class="text-sm text-gray-500 dark:text-gray-400 duration-300 dark:bg-gray-900"
          >Сейчас на ваш номер поступит звонок. Вам нужно поднять трубку и прослушать код,
          сказанный роботом</label
        >
        <ControlsVOtp :digit-count="4" @update:otp="code = $event" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { vMaska, MaskaDetail } from "maska";

const { login } = useAuth();

definePageMeta({
  layout: "empty",
});

const phone = ref();
const phoneRaw = ref();
const errors = ref();
const code = ref("");

const sencodeStatus = ref(false);

const onMaska = (event: CustomEvent<MaskaDetail>) => {
  if (event.detail.completed) {
    phoneRaw.value = event.detail.masked.replace(/[^0-9]+/g, "");
  }
};

const sendCode = async () => {
  try {
    await login(phoneRaw.value, undefined);
    sencodeStatus.value = true;
  } catch (error: any) {
    errors.value = error.message;
  }
};

const auth = async () => {
  try {
    await login(phoneRaw.value, Number(code.value));
    navigateTo("/dashboard");
  } catch (error: any) {
    errors.value = error.message;
  }
};

watch(code, () => {
  if (code.value.length === 4) auth();
});
</script>

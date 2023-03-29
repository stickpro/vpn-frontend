<template>
  <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="/" class="flex items-center">
          <img src="~/assets/icons/logo.svg" class="mr-3 h-6 sm:h-9" />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            >VPNOCHKA</span
          >
        </a>
        <div class="flex items-center lg:order-2">
          <nuxt-link to="/auth" class="btn-primary"
            >Войти или зарегистрироваться</nuxt-link
          >
          <button
            @click="mobileMenu = !mobileMenu"
            type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          v-if="mobileMenu"
          class="justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <nuxt-link
                to="/"
                class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                aria-current="page"
                >Главная</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/"
                class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                aria-current="page"
                >Главная</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/"
                class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                aria-current="page"
                >Главная</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/"
                class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                aria-current="page"
                >Главная</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <section class="bg-white dark:bg-gray-900">
    <div
      class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
    >
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
        >
          Получите доступ к заблокированным сайтам
        </h1>
        <p
          class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
        >
          А так же защитите себя при помощи сервиса VPNOCHKA
        </p>
        <nuxt-link to="/auth" class="inline-flex items-center justify-center btn-primary">
          Начать использовать
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </nuxt-link>
        <div
          class="inline-flex items-center justify-center text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Тарифные планы
        </div>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img src="~/assets/icons/illustration.svg" alt="mockup" />
      </div>
    </div>
  </section>
  <section class="bg-white dark:bg-gray-900">
    <div class="max-w-screen-xl px-4 py-4 mx-auto text-center lg:py-6 lg:px-4">
      <dl
        class="grid max-w-screen-xl gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white"
      >
        <div class="flex flex-col items-center justify-center">
          <dt class="mb-2 text-md font-extrabold">Откройте доступ ко всем ресурсам</dt>
        </div>
        <div class="flex flex-col items-center justify-center">
          <dt class="mb-2 text-md font-extrabold">Работа до 5 устройств одновременно</dt>
        </div>
        <div class="flex flex-col items-center justify-center">
          <dt class="mb-2 text-md font-extrabold">Оставайтесь анонимны</dt>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "empty",
});

const mobileMenu = ref(false);
</script>

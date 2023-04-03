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
        <nuxt-link
          to="/auth"
          class="inline-flex items-center justify-cen`ter btn-primary mr-2"
        >
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
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="py-16 bg-gray-50 overflow-hidden lg:py-24">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <svg
        class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="784"
          fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
        />
      </svg>

      <div class="relative">
        <h2
          class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          Как пользоваться?
        </h2>
      </div>

      <div
        class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
      >
        <div class="relative">
          <h3 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
            Начать пользоваться очень просто
          </h3>

          <dl class="mt-10 space-y-10">
            <nuxt-link to="/auth">
              <div class="relative">
                <dt>
                  <div
                    class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-700 text-white text-2xl"
                  >
                    1
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Аторизуйтесь на сайте
                  </p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                  Просто авторизуйтесь на нашем сайте по номеру телефона
                </dd>
              </div>
            </nuxt-link>

            <div class="relative">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-700 text-white text-2xl"
                >
                  2
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Выберите тариф
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                Выбирите и оплатите тарифный план
              </dd>
            </div>

            <div class="relative">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-700 text-white text-2xl"
                >
                  3
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Установите приложение Wireguard
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                Установите приложение Wireguard на своё устройство
                <div class="flex gap-4 mt-4">
                  <a href="https://apps.apple.com/ru/app/wireguard/id1441195209">
                    <img
                      class="relative mx-auto"
                      src="~/assets/image/app-store.png"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.wireguard.android"
                  >
                    <img
                      class="relative mx-auto"
                      src="~/assets/image/google-store.png"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://download.wireguard.com/windows-client/wireguard-installer.exe"
                  >
                    <img
                      class="relative mx-auto"
                      src="~/assets/image/win-store.png"
                      alt=""
                    />
                  </a>
                </div>
                или найдите приложение под свою платформу на официальном сайте
                разработчика
                <a
                  href="https://www.wireguard.com/install/"
                  class="font-medium text-primary-600 hover:text-primary-500"
                  >Wireguard</a
                >
              </dd>
            </div>
          </dl>
        </div>

        <div class="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
          <svg
            class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
            width="784"
            height="404"
            fill="none"
            viewBox="0 0 784 404"
          >
            <defs>
              <pattern
                id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="784"
              height="404"
              fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
            />
          </svg>
          <img
            class="relative mx-auto"
            width="490"
            src="~/assets/image/wireguard.png"
            alt=""
          />
        </div>
      </div>

      <svg
        class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="784"
          fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
        />
      </svg>

      <div class="relative mt-12 sm:mt-16 lg:mt-24">
        <div
          class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center"
        >
          <div class="lg:col-start-2">
            <dl class="space-y-10">
              <div class="relative">
                <dt>
                  <div
                    class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-700 text-white text-2xl"
                  >
                    4
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Создайте конфигурацию
                  </p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                  Сгенерируйте конфигурацию и ипортируйте в приложение Wireguard
                </dd>
              </div>

              <div class="relative">
                <dt>
                  <div
                    class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                  >
                    <!-- Heroicon name: outline/mail -->
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Reminder emails
                  </p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                  impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
                  ratione.
                </dd>
              </div>
            </dl>
          </div>

          <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
            <svg
              class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width="784"
              height="404"
              fill="none"
              viewBox="0 0 784 404"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="784"
                height="404"
                fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
              />
            </svg>
            <img
              class="relative mx-auto"
              width="490"
              src="~/assets/image/wireguard-windows.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "empty",
});

const mobileMenu = ref(false);
</script>

<template>
  <div class="px-10" v-if="configStore?.configs?.length <= 0">
    <div
      class="text-center mt-12 px-12 pb-12 mx-auto space-y-4 mb-28 max-w-lg border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <svg
        class="mx-auto h-12 w-12 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          vector-effect="non-scaling-stroke"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
        />
      </svg>
      <h3 class="mt-2 text-sm font-medium text-gray-900">No Configs</h3>
      <p class="mt-1 text-sm text-gray-500">Get started by creating a new config.</p>
      <div class="mt-6">
        <button
          @click="createConfig()"
          type="button"
          class="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-[#185BFF] hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-indigo active:bg-blue-700 transition ease-in-out duration-150"
        >
          <!-- Heroicon name: solid/plus -->
          <svg
            class="-ml-1 mr-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clip-rule="evenodd"
            />
          </svg>
          New Config
        </button>
      </div>
    </div>
  </div>
  <div
    v-for="config in configStore.configs"
    class="mt-12 px-12 pb-12 mx-auto space-y-4 mb-28 max-w-xl text-right"
  >
    <p class="text-sm leading-5 text-lg">Device config #{{ config.id }}</p>
    <img :src="config.qr_code" class="w-full m-auto" />
    <QRCodeStyling :content="config.peer_data" />
    <div class="grid gap-2 grid-cols-2">
      <button
        @click="delele(config.id)"
        type="button"
        class="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-600 focus:outline-none focus:border-red-700 focus:shadow-outline-indigo active:bg-red-700 transition ease-in-out duration-150"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          class="-ml-1 mr-2 h-5 w-5"
          fill="currentColor"
        >
          <path
            d="M25.983,13.342C25.988,13.228,26,13.116,26,13c0-4.418-3.582-8-8-8c-3.11,0-5.8,1.779-7.123,4.371 C10.296,9.136,9.665,9,9,9c-2.53,0-4.599,1.885-4.932,4.324C1.703,14.129,0,16.363,0,19c0,3.314,2.686,6,6,6h18 c3.314,0,6-2.686,6-6C30,16.382,28.321,14.162,25.983,13.342z M18.707,18.707l-3,3C15.512,21.902,15.256,22,15,22 s-0.512-0.098-0.707-0.293l-3-3c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L14,18.586V13c0-0.552,0.447-1,1-1 s1,0.448,1,1v5.586l1.293-1.293c0.391-0.391,1.023-0.391,1.414,0S19.098,18.316,18.707,18.707z"
          />
        </svg>
        Delete Config
      </button>
      <button
        @click="downloadConfig(config.peer_data)"
        type="button"
        class="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-[#185BFF] hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-indigo active:bg-blue-700 transition ease-in-out duration-150"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          class="-ml-1 mr-2 h-5 w-5"
          fill="currentColor"
        >
          <path
            d="M25.983,13.342C25.988,13.228,26,13.116,26,13c0-4.418-3.582-8-8-8c-3.11,0-5.8,1.779-7.123,4.371 C10.296,9.136,9.665,9,9,9c-2.53,0-4.599,1.885-4.932,4.324C1.703,14.129,0,16.363,0,19c0,3.314,2.686,6,6,6h18 c3.314,0,6-2.686,6-6C30,16.382,28.321,14.162,25.983,13.342z M18.707,18.707l-3,3C15.512,21.902,15.256,22,15,22 s-0.512-0.098-0.707-0.293l-3-3c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L14,18.586V13c0-0.552,0.447-1,1-1 s1,0.448,1,1v5.586l1.293-1.293c0.391-0.391,1.023-0.391,1.414,0S19.098,18.316,18.707,18.707z"
          />
        </svg>
        Download Config
      </button>
    </div>
  </div>
</template>
<script setup>
import { useConfig } from "~~/composables/config/useConfig";
import { useConfigStore } from "~~/composables/config/useConfigStore";

const { loadConfigs, deleteConfig, makeConfig } = useConfig();
loadConfigs();

const configStore = useConfigStore();

const delele = async (configId) => {
  const { data } = await deleteConfig(configId);
  await loadConfigs();
};

const createConfig = async () => {
  const { data } = await makeConfig(1);
  await loadConfigs();
};

const downloadConfig = (valueData) => {
  const blob = new Blob([valueData], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "config.conf";
  link.click();
};
</script>

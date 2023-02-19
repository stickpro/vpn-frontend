<template>
  <div
    class="flex items-end max-w-lg mx-auto bg-white justify-between pt-5 px-6 pb-4 fixed inset-x-0 bottom-0 footer__nav"
  >
    <NuxtLink class="flex flex-col items-center" to="/plan">
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.79004 7.77998V17.51C2.79004 19.41 4.14004 20.19 5.78004 19.25L8.13004 17.91C8.64004 17.62 9.49004 17.59 10.02 17.86L15.27 20.49C15.8 20.75 16.65 20.73 17.16 20.44L21.49 17.96C22.04 17.64 22.5 16.86 22.5 16.22V6.48998C22.5 4.58998 21.15 3.80998 19.51 4.74998L17.16 6.08998C16.65 6.37998 15.8 6.40998 15.27 6.13998L10.02 3.51998C9.49004 3.25998 8.64004 3.27998 8.13004 3.56998L3.80004 6.04998C3.24004 6.36998 2.79004 7.14998 2.79004 7.77998Z"
          stroke="#00091F"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.06006 4V17"
          stroke="#00091F"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.23 6.62012V20.0001"
          stroke="#00091F"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      Plans
    </NuxtLink>
    <NuxtLink to="/dashboard" class="flex flex-col items-center">
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 9.11011V14.8801C3 17.0001 3 17.0001 5 18.3501L10.5 21.5301C11.33 22.0101 12.68 22.0101 13.5 21.5301L19 18.3501C21 17.0001 21 17.0001 21 14.8901V9.11011C21 7.00011 21 7.00011 19 5.65011L13.5 2.47011C12.68 1.99011 11.33 1.99011 10.5 2.47011L5 5.65011C3 7.00011 3 7.00011 3 9.11011Z"
          stroke="#00091F"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
          stroke="#00091F"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      Home
    </NuxtLink>
    <NuxtLink to="/config" class="flex flex-col items-center">
      <svg
        width="24"
        height="24"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5667 7.15011V12.8501C17.5667 13.7834 17.0667 14.6501 16.2583 15.1251L11.3083 17.9834C10.5 18.4501 9.49999 18.4501 8.68332 17.9834L3.73332 15.1251C2.92499 14.6584 2.42499 13.7917 2.42499 12.8501V7.15011C2.42499 6.21678 2.92499 5.35008 3.73332 4.87508L8.68332 2.01675C9.49165 1.55008 10.4917 1.55008 11.3083 2.01675L16.2583 4.87508C17.0667 5.35008 17.5667 6.20844 17.5667 7.15011Z"
          stroke="#00091F"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 9.16676C11.0724 9.16676 11.9417 8.29743 11.9417 7.22508C11.9417 6.15272 11.0724 5.28345 10 5.28345C8.92766 5.28345 8.05835 6.15272 8.05835 7.22508C8.05835 8.29743 8.92766 9.16676 10 9.16676Z"
          stroke="#00091F"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.3334 13.8834C13.3334 12.3834 11.8417 11.1667 10 11.1667C8.15835 11.1667 6.66669 12.3834 6.66669 13.8834"
          stroke="#00091F"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      Devices
    </NuxtLink>
  </div>
</template>
<style>
.footer__nav {
  border-radius: 100% 100% 50% 50% / 100% 100% 0% 0%;
}
</style>

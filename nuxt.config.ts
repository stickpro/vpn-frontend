// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        pageTransition: { name: 'slide-right', mode: 'out-in' },
        head: {
            viewport: 'width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover',
        }
      },
    runtimeConfig: {
        public: {
            baseURL: process.env.API_BASE_URL || 'http://localhost/',
        },
    },
})

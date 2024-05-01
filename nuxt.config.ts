// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],

  devtools: {
    enabled: true,
  },

  modules: ['nuxt-icon', '@nuxt/content', '@formkit/nuxt'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    vue: {
      script: {
        propsDestructure: true,
      },
    },
  },
})

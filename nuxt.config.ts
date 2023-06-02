// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: ["~/assets/css/main.css"],
  devtools: {
    enabled: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    tsConfig: {
      vueCompilerOptions: {
        plugins: ["@volar/vue-language-plugin-pug"],
      },
    },
  },
});

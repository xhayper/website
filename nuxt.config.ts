// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/image", "@nuxtjs/tailwindcss"],
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        class: "dark",
      },
      bodyAttrs: {
        class: "mocha",
      },
    },
  },
});

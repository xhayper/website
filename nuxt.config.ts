// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  modules: [
    "@nuxt/image-edge",
    "@vueuse/nuxt",
    "nuxt-windicss"
  ],
  css: ["@/assets/styles/global.scss"],
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true,
  },
});

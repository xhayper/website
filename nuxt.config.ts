// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: true,
    modules: ["@nuxt/image-edge", "@vueuse/nuxt", "@unocss/nuxt"],
    css: ["@/assets/styles/global.scss"],
    build: {
        transpile: ["@headlessui/vue"]
    },
    typescript: {
        shim: false,
        strict: true,
        typeCheck: true
    }
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/sitemap",
    "nuxt-simple-robots",
  ],
  css: ["~/assets/css/main.css"],
  watch: ["tailwind.config.js"],
  site: {
    url: "https://hayper.xyz",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "hayper",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        // Font stuff
        { rel: "preconnect", href: "https://rsms.me/", crossorigin: "" },
        { rel: "dns-prefetch", href: "https://rsms.me/" },
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
        // Placeholder image
        { rel: "preconnect", href: "https://placehold.co/", crossorigin: "" },
        { rel: "dns-prefetch", href: "https://placehold.co/" },
        // Roblox thumbnail image
        { rel: "preconnect", href: "https://tr.rbxcdn.com/", crossorigin: "" },
        { rel: "dns-prefetch", href: "https://tr.rbxcdn.com/" },
      ],
      meta: [
        // Catppuccino Mocha color
        { name: "theme-color", content: "#1E1E2E" },
        // Fursona color
        // { name: "theme-color", content: "#57739A" },
        { name: "description", content: "Furry | Backend developer" },
        // OpenGraph
        { property: "og:type", content: "website" },
        { property: "og:title", content: "hayper" },
        { property: "og:description", content: "Furry | Backend developer" },
        { property: "og:url", content: "https://www.hayper.xyz/" },
        // OpenGraph image
        {
          property: "og:image",
          content: "https://www.hayper.xyz/banner.png",
        },
        {
          property: "og:image:secure_url",
          content: "https://www.hayper.xyz/banner.png",
        },
        { property: "og:image:type", content: "image/png" },
        { property: "og:image:width", content: 5435 },
        { property: "og:image:height", content: 3871 },
        { property: "og:image:alt", content: "My fursona" },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "hayper" },
        { name: "twitter:description", content: "Furry | Backend developer" },
        { name: "twitter:site", content: "@hayper1919" },
        { name: "twitter:creator", content: "@hayper1919" },
        {
          name: "twitter:image",
          content: "https://www.hayper.xyz/banner.png",
        },
      ],
      htmlAttrs: {
        lang: "en",
        class: "dark",
      },
      bodyAttrs: {
        class: "mocha",
      },
    },
  },
});

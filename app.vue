<style lang="scss" src="~/assets/styles/global.scss" />

<template>
  <div>
    <ThemeLoader />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import 'source-map-support/register';

useHead({
  title: "hayper",
  htmlAttrs: {
    dir: "ltr",
    lang: "en-US"
  },
  link: [
    { rel: "icon", type: "image/png", href: "/favicon.png" },
    // Font stuff
    { rel: "preconnect", href: "https://rsms.me", crossorigin: true },
    { rel: "dns-prefetch", href: "https://rsms.me" },
    { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" }],
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, shrink-to-fit=no",
    },
    { name: "theme-color", content: "#57739A" },
    // OpenGraph
    { property: "og:type", content: "website" },
    { property: "og:title", content: "hayper" },
    { property: "og:description", content: "Furry | Backend developer" },
    { property: "og:url", content: "https://website-xhayper.vercel.app" },
    // OpenGraph image
    {
      property: "og:image",
      content: "https://website-xhayper.vercel.app/gallery/hayper/WOOOO.png",
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
      content: "https://website-xhayper.vercel.app/gallery/hayper/WOOOO.png",
    },
  ],
});
</script>
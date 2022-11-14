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
  link: [
    { rel: "icon", type: "image/png", href: "/favicon.png" },
    { rel: "preconnect", href: "https://rsms.me/", crossorigin: true },
    { rel: "dns-prefetch", href: "https://rsms.me/" },
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
    { property: "og:url", content: "https://portfolio-xhayper.vercel.app" },
    {
      property: "og:image",
      content: "https://portfolio-xhayper.vercel.app/gallery/hayper/useruploads_bdd2411b-2ec6-4153-ab40-d7f28a5cf0b7_kofimissions9.png",
    },
    { property: "og:description", content: "Furry | Backend developer" },
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "hayper" },
    { name: "twitter:site", content: "@hayper1919" },
    { name: "twitter:description", content: "Furry | Backend developer" },
    {
      name: "twitter:image",
      content: "https://portfolio-xhayper.vercel.app/gallery/hayper/useruploads_bdd2411b-2ec6-4153-ab40-d7f28a5cf0b7_kofimissions9.png",
    },
  ],
});
</script>
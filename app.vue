<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { initFlowbite } from 'flowbite';

onMounted(() => {
  initFlowbite();
});

useHead({
  title: "hayper",
  htmlAttrs: {
    lang: "en-US"
  },
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
    { rel: "dns-prefetch", href: "https://tr.rbxcdn.com/" }
  ],
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
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});

const route = useRoute();

function updateTitle() {
  const formattedTitle =
    "title" in route.meta && typeof route.meta.title === "string"
      ? route.meta.overrideTitle
        ? route.meta.title
        : `${route.meta.title} - hayper`
      : "hayper";

  const ogTitle =
    "ogTitle" in route.meta && typeof route.meta.ogTitle === "string"
      ? route.meta.ogTitle
      : formattedTitle;

  const twitterTitle =
    "twitterTitle" in route.meta && typeof route.meta.twitterTitle === "string"
      ? route.meta.twitterTitle
      : formattedTitle;

  useHead({
    title: formattedTitle,
    meta: [
      { property: "og:title", content: ogTitle },
      { name: "twitter:title", content: twitterTitle },
    ],
  });
}

watch(() => route.fullPath, updateTitle);

updateTitle();
</script>

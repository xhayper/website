<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: t("name"),
  ogTitle: t("name"),
  ogType: "website",
  description: 'TBD',
  ogDescription: 'TBD',
  ogImage: 'https://website-xhayper.vercel.app/banner.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

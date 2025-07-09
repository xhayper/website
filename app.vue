<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'

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
  <div>
    <Analytics />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

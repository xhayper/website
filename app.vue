<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
import { Analytics } from '@vercel/analytics/nuxt';

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
    <SpeedInsights />
    <Analytics />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

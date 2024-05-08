<template>
  <div>
    <SpeedInsights />
    <header>
      <Navbar />
    </header>
    <main>
      <div class="m-16">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/vue";
</script>

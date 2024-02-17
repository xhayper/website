<template>
    <div>
        <SpeedInsights />
        <Navbar />
        <slot />
    </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';

updateTitle();
</script>
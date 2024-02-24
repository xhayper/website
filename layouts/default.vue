<template>
    <div>
        <SpeedInsights />
        <header>
            <Navbar />
        </header>
        <main>
            <slot />
        </main>
    </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>
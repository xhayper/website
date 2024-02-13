<template>
    <div>
        <Navbar />
        <slot />
    </div>
</template>

<script setup lang="ts">
//TODO: Find better way to handle this

const route = useRoute();

const formattedTitle = route.meta.title ? `${route.meta.title} - hayper` : 'hayper';

useHead({
    title: formattedTitle,
    meta: [
        { property: "og:title", content: formattedTitle },
        { name: "twitter:title", content: formattedTitle },
    ]
});
</script>
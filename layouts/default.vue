<template>
    <div>
        <Navbar />
        <slot />
    </div>
</template>

<script setup lang="ts">
//TODO: Find better way to handle this

const route = useRoute();

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

useHead({
    title: `${capitalize(String(route.name))} - hayper`,
});
</script>
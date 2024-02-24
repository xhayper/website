<template>
    <NuxtLink :to="$props.url" target="_blank" rel="noreferrer noopener"
        class="flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="w-sm h-sm">
            <NuxtImg class="object-cover rounded-t-lg w-full h-full"
                :src="$props.thumbnail ?? generatePlaceholder($props.name)" placeholder />
        </div>
        <div class="flex flex-col p-5 leading-normal flex-grow">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ $props.name }}</h5>
            <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">{{ $props.description }}</p>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
const generatePlaceholder = (text: string) => `https://placehold.co/384x384?text=${encodeURIComponent(text.split(" ").map((text) => text[0]).join(""))}`;

defineProps<{
    name: string,
    description: string,
    thumbnail?: string,
    url?: string
}>();
</script>
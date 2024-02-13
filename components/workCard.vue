<template>
    <div class="w-full">
        <NuxtLink :to="$props.url" target="_blank" rel="noreferrer noopener">
            <div
                class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <NuxtImg class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    :src="$props.thumbnail ?? generatePlaceholder($props.name)" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ $props.name }}</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ $props.description }}</p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Job: {{ $props.job }}</p>
                    <p class="text-gray-600 dark:text-gray-300">
                        {{ $props.startDate?.toLocaleDateString() ?? "Unknown" }} {{ $props.endDate ? `-
                        ${$props.endDate.toLocaleDateString()}` : ''
                        }}
                    </p>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
const generatePlaceholder = (text: string) => `https://placehold.co/512x512?text=${encodeURIComponent(text.split(" ").map((text) => text[0]).join(""))}`;

defineProps<{
    name: string,
    description: string,
    job: string,
    startDate?: Date,
    endDate?: Date,
    thumbnail?: string,
    url?: string
}>();
</script>
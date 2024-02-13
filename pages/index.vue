<template>
    <div class="m-5">
        <ul>
            <li>
                <NuxtLink to="https://github.com/xhayper" target="_blank" rel="me noreferrer noopener"
                    class="text-gray-900 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white">
                    GitHub</NuxtLink>
            </li>
            <li>
                <NuxtLink to="https://twitter.com/hayper1919" target="_blank" rel="me noreferrer noopener"
                    class="text-gray-900 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white">
                    Twitter
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="https://furry.engineer/@hayper" target="_blank" rel="me noreferrer noopener"
                    class="text-gray-900 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white">
                    Mastodon
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="https://bsky.app/profile/hayper.xyz" target="_blank" rel="me noreferrer noopener"
                    class="text-gray-900 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white">
                    Bluesky
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="https://discord.gg/xTAR8nUs2g" target="_blank" rel="noreferrer noopener"
                    class="text-gray-900 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white">
                    Discord Server
                </NuxtLink>
            </li>
        </ul>
        <br>
        <ul>
            <li>Discord: xhayper</li>
            <li>Revolt: hayper#5357</li>
        </ul>
        <br>
        <ul>
            <li>
                <NuxtLink to="https://github.com/xhayper/website/" target="_blank" rel="noreferrer noopener"
                    class="text-gray-900 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white">
                    Source code
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: "hayper",
    meta: [
        { property: "og:title", content: `hayper` },
        { name: "twitter:title", content: `hayper` },
    ]
});
</script>
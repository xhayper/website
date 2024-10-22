<script setup lang="ts">
definePageMeta({
    title: "name"
})

const { t } = useI18n();

const textList = {
    "social": [
        { type: "url", title: "github", value: "https://github.com/xhayper" },
        { type: "url", title: "mastodon", value: "https://furry.engineer/@hayper" },
        { type: "url", title: "bluesky", value: "https://bsky.app/profile/hayper.xyz" },

        { type: "newline" },

        { type: "url", title: "discord.server", value: "https://discord.com/invite/r4rHCM6eut" },
        { type: "url", title: "revolt.server", value: "https://rvlt.gg/Z3CFqAPR" },
        { type: "url", title: "guilded.server", value: "https://www.guilded.gg/i/EvPjmK4k" },

        { type: "newline" },

        { type: "text", title: "discord", value: "hayper1919" },
        { type: "text", title: "revolt", value: "hayper#5357" },
        { type: "url", title: "guilded", value: "https://www.guilded.gg/u/hayper" },
    ],
    chinese: [
        { type: "url", title: "x", value: "https://x.com/suyunwenma" },
        { type: "url", title: "bluesky", value: "https://bsky.app/profile/suyunwen.bsky.app" },
        { type: "url", title: "bilibili", value: "https://space.bilibili.com/3546753949239975" },
        { type: "url", title: "weibo", value: "https://m.weibo.cn/profile/7947696340" },

        { type: "newline" },

        { type: "text", title: "qq", value: "3983420851" },
        { type: "text", title: "wechat", value: "....." }
    ],
    misc: [
        { type: "url", title: "Source code", value: "https://github.com/xhayper/website" },
        { type: "url", title: "Linktree", value: "https://linktr.ee/xhayper" },
        { type: "url", title: "Ko-fi", value: "https://ko-fi.com/xhayper" },
    ]
} as Record<string, ({ type: "url" | "text", title: string, value: string } | { type: "newline" })[]>;
</script>

<template>
    <div>
        <h1 class="mb-2 text-lg">
            {{ t("pages.index.heading") }}
        </h1>
        <h3>
            {{ t("pages.index.description") }}
        </h3>

        <br>

        <div>
            <div v-for="(list, category) in textList">
                <div>
                    <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                        {{ t(category) }}:
                    </h2>
                    <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                        <div v-for="text in list">
                            <li class="flex items-center" v-if="['url', 'text'].includes(text.type)">
                                <NuxtLink v-if="text.type === 'url'" :to="text.value" target="_blank"
                                    rel="me noreferrer noopener"
                                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline">{{
                                        t(text.title)
                                    }}
                                </NuxtLink>
                                <span v-else-if="text.type === 'text'">{{ t(text.title) }}: {{ text.value }}</span>
                            </li>
                            <br v-else-if="text.type === 'newline'">
                        </div>
                    </ul>
                </div>
                <br />
            </div>
        </div>

        <!-- :) -->
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <Nginx />
    </div>
</template>

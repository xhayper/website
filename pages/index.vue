<template>
  <div>
    <div>
      <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Socials:
      </h2>
      <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
        <li v-for="social in socialList" class="flex items-center">
          <NuxtLink v-if="social.url" :to="social.url" target="_blank" rel="me noreferrer noopener"
            class="font-medium text-blue-600 dark:text-blue-500 hover:underline">{{ social.name }}
          </NuxtLink>
          <span v-else>{{ social.name }}: {{ social.text }}</span>
        </li>
      </ul>
    </div>
    <br />
    <div>
      <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Misc:
      </h2>
      <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
        <li v-for="misc in miscList" class="flex items-center">
          <NuxtLink :to="misc.url" target="_blank" rel="me noreferrer noopener"
            class="font-medium text-blue-600 dark:text-blue-500 hover:underline">{{ misc.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
    <br />
    <div>
      <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        PGP: <NuxtLink to="/key/public.key" target="_blank"
          class="font-medium text-blue-600 dark:text-blue-500 hover:underline">here.
        </NuxtLink>
      </h2>
    </div>
  </div>
</template>

<script setup lang="tsx">
definePageMeta({
  title: "hayper",
  ogTitle: "hayper",
  twitterTitle: "hayper",
  overrideTitle: true,
});

const socialList = [
  { name: "GitHub", url: "https://github.com/xhayper" },
  { name: "Twitter", url: "https://twitter.com/hayper1919" },
  { name: "Mastodon", url: "https://furry.engineer/@hayper" },
  { name: "Bluesky", url: "https://bsky.app/profile/hayper.xyz" },
  { name: "Roblox", url: "https://www.roblox.com/users/1921023125/profile" },
  
  { name: "Discord server", url: "https://discord.com/invite/r4rHCM6eut" },
  { name: "Revolt server", url: "https://rvlt.gg/Z3CFqAPR" },
  { name: "Guilded server", url: "https://www.guilded.gg/i/EvPjmK4k" },

  { name: "Discord", text: "hayper1919" },
  { name: "Revolt", text: "hayper#5357" },
  { name: "Guilded", url: "https://www.guilded.gg/u/hayper" },
];

const miscList = [
  { name: "Source code", url: "https://github.com/xhayper/website" },
  { name: "Linktree", url: "https://linktr.ee/xhayper" },
  { name: "Ko-fi", url: "https://ko-fi.com/xhayper" },
];
</script>

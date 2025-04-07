<script setup lang="ts">
definePageMeta({
  title: "name"
})

const colorToggleButton = useTemplateRef('colorToggle');

const textList = {
  "footer": [
    { type: "url", title: "linktree", value: "https://linktr.ee/xhayper" },
    { type: "url", title: "github", value: "https://github.com/xhayper" },
    { type: "url", title: "mastodon", value: "https://furry.engineer/@hayper" },
    { type: "url", title: "bluesky", value: "https://bsky.app/profile/hayper.xyz" },
    { type: "url", title: "guilded", value: "https://www.guilded.gg/u/hayper" },
  ],
  // "footer.chinese": [
  //   { type: "url", title: "bilibili", value: "https://space.bilibili.com/3546753949239975" },
  //   { type: "url", title: "weibo", value: "https://m.weibo.cn/profile/7947696340" },
  // ],
  "contacts": [
    { type: "text", title: "telegram", value: "@xhayper" },
    { type: "text", title: "discord", value: "hayper1919" },
    { type: "text", title: "revolt", value: "hayper#5357" }
  ],
  // "contacts.chinese": [
  //   { type: "text", title: "qq", value: "3983420851" },
  //   { type: "text", title: "wechat", value: "....." }
  // ],
  "servers": [
    { type: "url", title: "discord.server", value: "https://discord.com/invite/r4rHCM6eut" },
    { type: "url", title: "revolt.server", value: "https://rvlt.gg/Z3CFqAPR" },
    { type: "url", title: "guilded.server", value: "https://www.guilded.gg/i/EvPjmK4k" },
  ],
  // "misc": [
  //   { type: "url", title: "Source code", value: "https://github.com/xhayper/website" },
  //   { type: "url", title: "Ko-fi", value: "https://ko-fi.com/xhayper" },
  // ]
} as Record<string, ({ type: "url" | "text", title: string, value: string } | { type: "newline" })[]>;

function toggleColor() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  colorToggleButton.value!.textContent = isDark ? '🌙' : '🌞';
}
</script>

<template>
  <div>
    <div class="main">
      <div class="card">
        <div>
          <!-- TODO: Fix this -->
          <button>
            <NuxtLink to="/en" prefetch>EN</NuxtLink> / <NuxtLink to="/th" prefetch>ไทย</NuxtLink> / <NuxtLink to="/zh" prefetch>中文</NuxtLink>
          </button>
          <button ref="colorToggle" class="colorToggle" v-on:click="toggleColor" title="Toggle Dark Mode">🌞</button>
        </div>
        <div class="flex justify-center">
          <NuxtImg class="profile-pic" src="/profile-picture.png" :alt="$t('name')" />
        </div>
        <h1>{{ $t("name") }}</h1>
        <h2>{{ $t("pages.index.role") }}</h2>
        <p>{{ $t("pages.index.description") }}</p>

        <div class="section">
          <h3>{{ $t("pages.index.title.servers") }}</h3>
          <ul>
            <li v-for="server in textList.servers">
              <NuxtLink v-if="server.type === 'url'" :to="server.value" target="_blank" rel="me noreferrer noopener">{{
                $t(server.title) }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="section">
          <h3>{{ $t("pages.index.title.contacts") }}</h3>
          <ul>
            <li v-for="contact in textList.contacts">
              <template v-if="contact.type === 'text'">
                {{ $t(contact.title) }}: {{ contact.value }}
              </template>
            </li>
          </ul>
        </div>

        <div class="socials">
          <template v-for="social in textList.footer">
            <NuxtLink v-if="social.type === 'url'" :to="social.value" target="_blank" rel="me noreferrer noopener">{{
              $t(social.title) }}</NuxtLink>
          </template>
        </div>
      </div>

      <div class="metadata">
        <p class="metadata-text">{{ $t("pages.index.title.codedBy") }} <NuxtLink to="https://alfyn.page/"
            target="_blank">
            @Alfynodon</NuxtLink>
        </p>
      </div>
    </div>

    <!-- :) -->
    <!-- <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <Nginx /> -->
  </div>
</template>

<style scoped>
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
}

.card {
  position: relative;
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  text-align: center;
  transition: background 0.3s;
}

.profile-pic {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

.section {
  margin-top: 2rem;
}

.section h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--section-heading);
}

.section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.section ul li {
  margin-bottom: 0.5rem;
}

.socials a {
  margin: 0 0.5rem;
  text-decoration: none;
  color: var(--link);
  font-size: 1.2rem;
}

.socials a:hover {
  text-decoration: underline;
}

.section a {
  margin: 0 0.5rem;
  text-decoration: none;
  color: var(--link);
  font-size: 1.2rem;
}

.section a:hover {
  text-decoration: underline;
}

.metadata a {
  text-decoration: none;
  color: var(--link);
}

.metadata a:hover {
  text-decoration: underline;
}

.colorToggle {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text);
  cursor: pointer;
  transition: color 0.3s;
}

.metadata {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.85rem;
  color: var(--section-heading);
  text-align: center;
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.metadata:hover {
  opacity: 1;
}

.metadata-text {
  font-size: 0.75rem;
  line-height: 0.05;
  margin: 0.5rem 0 1.5rem;
}

@media (max-width: 480px) {
  .card {
    margin: 1rem;
  }

  .metadata {
    display: none;
  }
}
</style>

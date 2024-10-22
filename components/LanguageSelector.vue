<script setup lang="tsx">
const { locale, locales, setLocale } = useI18n();

const siteLocale = computed({
    get: () => locale.value,
    set: (locale) => void setLocale(locale)
})
</script>

<template>
    <select v-model="siteLocale">
        <option v-for="(locale) in locales" :key="locale.code" :value="locale.code"
            :selected="siteLocale === locale.code">
            {{ locale.name ?? locale.code }}
        </option>
    </select>
</template>

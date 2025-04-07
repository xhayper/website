// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ["@/assets/scss/index.scss"],
  modules: ['@nuxtjs/i18n', '@nuxt/image', '@nuxt/icon', '@nuxtjs/tailwindcss'],
  i18n: {
    baseUrl: 'https://hayper.xyz',
    detectBrowserLanguage: { alwaysRedirect: false, fallbackLocale: 'en', redirectOn: 'root', useCookie: true, cookieKey: 'i18n_redirected', cookieSecure: true },
    locales: [
      {
        code: 'en',
        language: 'en',
        name: 'English'
      },
      {
        code: 'th',
        language: 'th',
        name: 'ภาษาไทย'
      },
      {
        code: 'zh',
        language: 'zh',
        name: '中文 (简体)'
      }
    ]
  }
})
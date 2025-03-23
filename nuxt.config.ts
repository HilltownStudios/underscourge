// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/scripts'
  ],
  content: {
    build: {
      markdown: {
        toc: {
          depth: 2,
          searchDepth: 2
        }
      }
    }
  }
})
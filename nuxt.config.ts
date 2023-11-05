// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@formkit/nuxt',
    // '@pinia/nuxt',
    // '@nuxt/devtools',
    '@nuxtjs/i18n',
  ],
  formkit: {
    autoImport: true,
    configFile: './vendors/formkit/formkit.config.ts',
  },

  i18n: {
    defaultLocale: 'en',
    dynamicRouteParams: true,
    lazy: true,
    langDir: './locales',
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
        name: 'English',
      },
      {
        code: 'ja',
        iso: 'ja-JP',
        file: 'ja.json',
        name: '日本語',
      },
    ],
    detectBrowserLanguage: {
      redirectOn: 'root', // left redirect only on root for SEO
      alwaysRedirect: true,
      useCookie: true,
      cookieKey: 'lang',
    },
  },
})

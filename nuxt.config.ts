// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  typescript: {
    shim: false,
    strict: true
  },
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css',
  ],
  build: {
    transpile: ['vuetify']
  },
  modules: [
    'nuxt-icon',
    '@pinia/nuxt',
    '@pinia-orm/nuxt',
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => { config.plugins?.push(vuetify()) })
    }
  ],
  vite: {
    ssr: {
      noExternal: ['vuetify']
    }
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
      ['useRepo', 'usePinaRepo']
    ]
  }
})

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Goals | Real Dev Squad',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/jsonapi-vuex.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/google-fonts',
    '@nuxtjs/vuetify'
  ],

  googleFonts: {
    families: {
      'Saira Semi Condensed': [600, 800],
      'Helvetica Neue': [500],
      Roboto: [700]
    }
  },

  publicRuntimeConfig: {
    axios: {
      baseURL: process.env.GOAL_SERVICE_URL
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sentry'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['jsonapi-vuex']
  },

  sentry: {
    dsn: process.env.SENTRY_DSN,
    tracing: {
      tracesSampleRate: 1.0,
      browserTracing: {},
      vueOptions: {
        trackComponents: true
      }
    }
  }
}

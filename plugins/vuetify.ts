import { createVuetify, ThemeDefinition } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'


const rdsLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#eee',
    surface: '#FFFFFF',
    primary: '#1d1283',
    'primary-darken-1': '#46ad29',
    'primary-light-1': '#d5e9cf',
    secondary: '#e20665',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi
      }
    },
    theme: {
      defaultTheme: 'rdsLightTheme',
      themes: {
        rdsLightTheme,
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})

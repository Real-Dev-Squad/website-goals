<template>
  <div class="theme-toggle-wrapper" @click="toggleTheme()">
    <span>
      <img class="theme-toggle-icon" :src="require(`~/assets/${themeImage}`)" />
    </span>
  </div>
</template>

<script>
import { setCookie } from '../helpers/cookies'
import { addClassToDocument } from '../helpers/document'
export default {
  name: 'ThemeToggler',
  props: {
    theme: {
      type: String,
      default: 'light',
    },
  },
  data() {
    return {
      isDarkTheme: false,
      themeImage: this.isDarkTheme ? 'sun.png' : 'moon.png',
    }
  },
  beforeMount() {
    this.isDarkTheme = this.theme === 'dark'
    this.themeImage = this.isDarkTheme ? 'sun.png' : 'moon.png'
  },
  methods: {
    toggleClicked(value) {
      this.isClicked = !value
    },
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme
      this.themeImage = this.isDarkTheme ? 'sun.png' : 'moon.png'
      addClassToDocument(this.isDarkTheme ? 'dark' : 'light')
      const currentTheme = this.isDarkTheme ? 'dark' : 'light'
      setCookie('theme', currentTheme, 30)
    },
  },
}
</script>

<style scoped>
.theme-toggle-wrapper {
  cursor: pointer;
  padding: 15px;
  display: flex;
  align-items: center;
}
.theme-toggle-icon {
  width: 20px;
  height: 20px;
}
</style>

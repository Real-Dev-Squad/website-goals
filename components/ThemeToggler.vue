<template>
  <div class="theme-toggle-wrapper" @click="toggleTheme()">
    <span>
      <img class="theme-toggle-icon" :src="require(`~/assets/${themeImage}`)" />
    </span>
  </div>
</template>

<script>
function setCookie(name, value, days) {
  let expires = ''
  if (days) {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = '; expires=' + date.toUTCString()
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/'
}

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
    this.theme === 'dark'
      ? (this.isDarkTheme = true)
      : (this.isDarkTheme = false)
  },
  methods: {
    toggleClicked(value) {
      this.isClicked = !value
    },
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme
      this.isDarkTheme
        ? (this.themeImage = 'sun.png')
        : (this.themeImage = 'moon.png')
      this.isDarkTheme
        ? (document.documentElement.className = 'dark')
        : (document.documentElement.className = 'light')
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

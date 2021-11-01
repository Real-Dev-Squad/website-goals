<template>
  <div class="theme-toggle-wrapper" @click="toggleTheme()">
    <span>
      <img class="theme-toggle-icon" :src="require(`~/assets/${themeImage}`)" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'ThemeToggler',
  data() {
    return {
      isDarkTheme: false,
      themeImage: this.isDarkTheme ? 'sun.png' : 'moon.png',
    }
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

<template>
  <div>
    <div v-if="theme" id="layout">
      <Navbar :theme="theme" />
      <Clock />
      <Days />
      <Goals />
      <h1>Work In Progress</h1>
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Clock from '../components/Clock.vue'
import Days from '../components/Days.vue'
import Goals from '../components/Goals.vue'
import Footer from '../components/Footer.vue'

function getCookie(name) {
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}
export default {
  components: {
    Navbar,
    Footer,
    Clock,
    Days,
    Goals,
  },
  data() {
    return {
      theme: '',
    }
  },
  beforeMount() {
    const currentTheme = getCookie('theme')
    if (currentTheme) {
      this.theme = currentTheme
      this.theme === 'dark'
        ? (document.documentElement.className = 'dark')
        : (document.documentElement.className = 'light')
    } else {
      document.documentElement.className = 'light'
      this.theme = 'light'
    }
  },
}
</script>

<style scoped>
#layout {
  margin: 0;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  background-color: var(--background-primary);
}
h1 {
  font-family: 'Nunito', sans-serif;
  font-size: 99px;
  line-height: 100px;
  text-align: center;
  letter-spacing: 0.1em;
  color: #ffffff;
  text-shadow: 0px 4px 4px #041187;
  margin: 450px 0 200px 0;
}
@media screen and (max-width: 600px) {
  h1 {
    display: none;
  }
}
</style>

<style>
:root.light {
  --background-primary: #e5e5e5;
  --color-primary: rgb(68, 66, 66);
  --color-link: #000;
  --background-card: #f8f8f8;
  --border-color: #ffffff;
}
:root.dark {
  --background-primary: #1c1b22;
  --color-primary: #e1e1ec;
  --background-card: #312f3b;
  --color-link: #0080ff;
  --border-color: #55ffff;
}
</style>

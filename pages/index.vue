<template>
  <div id="layout">
    <Navbar />
    <Clock />
    <Days />
    <Goals />
    <h1>Work In Progress</h1>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Clock from '../components/Clock.vue'
import Days from '../components/Days.vue'
import Goals from '../components/Goals.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
    Navbar,
    Footer,
    Clock,
    Days,
    Goals,
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

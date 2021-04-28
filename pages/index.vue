<template>
  <div>
    <Navbar />
    <Clock />
    <div class="heading">
      <img
        src="https://i.picsum.photos/id/836/5184/3456.jpg?hmac=_ZfBJnWLbaYFoRWfoj1LNoA_PPzz5EunZNOyXUsUVZ8"
        alt="userpic"
      />
      <h1>Your goals</h1>
    </div>
    <Days />
    <h1 class="headingToday">Today</h1>
    <Goals />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Clock from '../components/Clock.vue'
import Days from '../components/Days.vue'
import Goals from '../components/Goals.vue'
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
@import url('https://fonts.googleapis.com/css2?family=Squada+One&display=swap');
html,
body {
  font-family: 'Roboto', sans-serif;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.heading {
  display: flex;
  align-items: center;
  margin-left: 50px;
  margin-top: 30px;
}
.heading img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid rgb(243, 42, 109);
}
.heading h1 {
  color: rgb(243, 42, 109);
  font-weight: bold;
  padding-left: 15px;
  font-size: 40px;
  font-family: 'Squada One', cursive;
}
.headingToday {
  color: rgb(243, 42, 109);
  font-size: 44px;
  padding-left: 125px;
  margin-top: 90px;
  font-family: 'Squada One', cursive;
}
</style>

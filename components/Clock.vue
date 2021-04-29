<template>
  <div class="clock">
    <!-- <span>{{ currentDate }} | {{ myTimer() }}</span> -->
    <span id="txt">{{ timer }}{{ startTime() }}</span>
  </div>
</template>

<script>
export default {
  name: 'Clock',
  data() {
    return {
      currentDate: new Date().toDateString(),
      timer: '',
    }
  },
  methods: {
    myTimer() {
      return new Date().toLocaleTimeString()
    },
    time() {
      return setInterval(this.currentTime, 1000)
    },
    startTime() {
      const today = new Date()
      let h = today.getHours()
      let m = today.getMinutes()
      let s = today.getSeconds()
      let session = 'AM'
      if (h === 0) {
        h = 12
      }
      if (h > 12) {
        h = h - 12
        session = 'PM'
      }
      m = this.checkTime(m)
      s = this.checkTime(s)
      // document.getElementById('txt').innerHTML = h + ':' + m + ':' + s + session
      const formatedText = h + ':' + m + ':' + s + session
      this.timer = formatedText
      setTimeout(this.startTime, 1000)
    },
    checkTime(i) {
      if (i < 10) {
        i = '0' + i
      }
      return i
    },
  },
}
</script>

<style scoped>
.clock {
  background-color: rgb(243, 42, 109);
  float: right;
  padding: 2px 8px;
  box-shadow: -1px 2px 2px black;
}
span {
  color: white;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
}
</style>

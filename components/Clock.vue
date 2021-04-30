<template>
  <div class="clock">
    <span>{{ currentDate }} | {{ timer }}{{ clock() }}</span>
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
    clock() {
      let h = new Date().getHours()
      let m = new Date().getMinutes()
      let session = 'am'
      if (h > 12) {
        h = h - 12
        session = 'pm'
      }
      h = h < 10 ? '0' + h : h
      m = m < 10 ? '0' + m : m
      const formatedText = h + ':' + m + session + ' ' + 'IST'
      this.timer = formatedText
      setTimeout(this.clock, 1000)
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

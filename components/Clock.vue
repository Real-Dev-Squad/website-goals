<template>
  <div class="clock">
    <div class="dateTime">{{ currentDate }} | {{ timer }}{{ clock() }}</div>
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
@import url('https://fonts.googleapis.com/css2?family=Saira+Semi+Condensed:wght@600&display=swap');

.clock {
  background-color: #e30062;
  float: right;
  box-shadow: -1px 3px 4px #1d1283;
  display: block;
  justify-content: center;
}
.dateTime {
  color: #ffffff;
  font-family: 'Saira Semi Condensed', sans-serif;
  font-size: 21px;
  font-weight: 600;
  text-align: center;
  padding: 4px 34px;
}

@media screen and (max-width: 600px) {
  .clock {
    box-shadow: -1px 2px 2px #1d1283;
  }
  .dateTime {
    font-size: 10px;
    padding: 1px 4px;
  }
}
</style>

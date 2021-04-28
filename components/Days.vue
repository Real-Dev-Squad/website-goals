<template>
  <div class="weekBox">
    <div class="dayBox">
      <div class="day">Mon</div>
      <button class="complete"></button>
    </div>
    <div class="dayBox">
      <div class="day">Tue</div>
      <button class="complete"></button>
    </div>
    <div class="dayBox">
      <div class="day">Wed</div>
      <button class="complete"></button>
    </div>
    <div class="dayBox">
      <div class="day">Thu</div>
      <button class="complete"></button>
    </div>
    <div class="dayBox">
      <div class="day">Fri</div>
      <button class="inprogress"></button>
    </div>
    <div class="dayBox">
      <div class="day">Sat</div>
      <button class="incomplete"></button>
    </div>
    <div class="dayBox">
      <div class="day">Sun</div>
      <button class="incomplete"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Days',
}
</script>

<style scoped>
.weekBox {
  background-color: rgba(238, 237, 233, 0.336);
  display: flex;
  justify-content: space-around;
  max-width: 900px;
  margin: auto;
  padding: 15px 30px;
}
.dayBox {
  display: flex;
  flex-direction: column;
}
.day {
  color: gray;
  text-align: center;
  padding: 15px 0;
}
button {
  padding: 15px 0;
}
.complete {
  background-color: rgb(80, 216, 80);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid black;
}
.inprogress {
  background-color: rgb(250, 219, 162);
  background-color: rgba(255, 217, 0, 0.37);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px dashed orange;
}
.incomplete {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px dashed gray;
}
</style>

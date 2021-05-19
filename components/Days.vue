<template>
  <div class="weekBox">
    <div class="heading">
      <img src="~/assets/ankur.png" alt="userpic" />
      <h1>Your goals</h1>
    </div>
    <div class="days">
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
  </div>
</template>

<script>
export default {
  name: 'Days',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Saira+Semi+Condensed:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

.weekBox {
  max-width: 1000px;
  margin: auto;
  margin-top: 100px;
}
.heading {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  margin-left: -70px;
}
.heading img {
  width: 79px;
  height: 79px;
  border: 5px solid #e30062;
  border-radius: 50%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.heading h1 {
  font-family: 'Saira Semi Condensed', sans-serif;
  font-style: normal;
  font-size: 48px;
  line-height: 76px;
  color: #e30062;
  padding-left: 5px;
}
.days {
  background-color: #f8f8f8;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 35px 60px;
}
.dayBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.day {
  color: #c5c0c0;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 40px;
  padding-bottom: 15px;
}
.complete {
  width: 54px;
  height: 54px;
  background-color: #04ca00;
  border: 4px solid #025300;
  border-radius: 50%;
  box-sizing: border-box;
}
.inprogress {
  width: 54px;
  height: 54px;
  background-color: #fff6a6;
  border: 3px dashed #e6a500;
  border-radius: 50%;
  box-sizing: border-box;
}
.incomplete {
  width: 54px;
  height: 54px;
  background: #efefef;
  border: 3px dashed #606060;
  border-radius: 50%;
  box-sizing: border-box;
}

@media screen and (max-width: 600px) {
  .weekBox {
    width: 95%;
    margin-top: 50px;
  }
  .heading {
    padding-top: 20px;
    padding-bottom: 20px;
    margin-left: 0px;
  }
  .heading img {
    width: 59px;
    height: 59px;
    border: 4px solid #e30062;
  }
  .heading h1 {
    font-size: 35px;
    line-height: 16px;
  }
  .days {
    padding: 12px 2px;
  }
  .day {
    font-size: 12px;
    line-height: 20px;
  }
  .complete {
    width: 34px;
    height: 34px;
    border: 3px solid #025300;
  }
  .inprogress {
    width: 34px;
    height: 34px;
    border: 2px dashed #e6a500;
  }
  .incomplete {
    width: 34px;
    height: 34px;
    border: 2px dashed #606060;
  }
}
</style>

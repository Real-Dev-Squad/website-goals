<template>
  <div class="week-box">
    <div class="heading">
      <img src="~/assets/ankur.png" alt="userpic" />
      <h1>Your goals</h1>
    </div>
    <h2 class="week-heading">This week</h2>
    <div class="days">
      <div class="day-box">
        <div class="day">Mon</div>
        <button class="complete"></button>
      </div>
      <div class="day-box">
        <div class="day">Tue</div>
        <button class="complete"></button>
      </div>
      <div class="day-box">
        <div class="day">Wed</div>
        <button class="complete"></button>
      </div>
      <div class="day-box">
        <div class="day">Thu</div>
        <button class="complete"></button>
      </div>
      <div class="day-box">
        <div class="day">Fri</div>
        <button class="inprogress"></button>
      </div>
      <div class="day-box">
        <div class="day">Sat</div>
        <button class="incomplete"></button>
      </div>
      <div class="day-box">
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

.week-box {
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
.week-heading {
  display: none;
}
.days {
  background-color: #f8f8f8;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 35px 60px;
}
.day-box {
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

@media screen and (max-width: 768px) {
  .heading {
    margin-left: 0;
  }
}

@media screen and (max-width: 600px) {
  .week-box {
    width: 90%;
    margin-top: 50px;
  }
  .heading {
    flex-direction: column;
    margin-left: 0;
    justify-content: space-between;
    height: 100px;
    margin-top: -30px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .heading img {
    width: 50px;
    height: 50px;
    border: 3px solid #e30062;
  }
  .heading h1 {
    font-size: 16px;
    line-height: 25px;
    text-align: center;
  }
  .week-heading {
    display: block;
    font-family: 'Saira Semi Condensed', sans-serif;
    font-style: normal;
    font-size: 14px;
    line-height: 22px;
    color: #e30062;
    text-align: center;
    padding: 20px 0;
  }
  .days {
    padding: 12px 2px;
  }
  .day {
    font-size: 10px;
    line-height: 40px;
  }
  .complete {
    width: 14px;
    height: 14px;
    border: 2px solid #025300;
  }
  .inprogress {
    width: 14px;
    height: 14px;
    border: 2px dashed #e6a500;
  }
  .incomplete {
    width: 14px;
    height: 14px;
    border: 2px dashed #606060;
  }
}
</style>

<template>
  <div class="goalsContainer">
    <div class="goals">
      <div class="goalsItem">
        <div class="box"></div>
        <div class="goalsHeading">
          <h1>Watch first 20 min of Event Loop video</h1>
        </div>
        <div class="video">
          <img
            src="https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ"
            alt="videoIcon"
          />
          <img
            src="https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM"
            alt="userpic"
            class="img"
          />
        </div>
      </div>
      <div class="goalsItem">
        <div class="box"></div>
        <div class="goalsHeading">
          <h1>Learn Heaps</h1>
        </div>
        <div class="tag">Self</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Goal',
}
</script>

<style scoped>
.goalsContainer {
  max-width: 900px;
  margin: auto;
  background-color: rgba(238, 237, 233, 0.336);
}
.goalsItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  padding: 5px;
}
.box {
  width: 70px;
  height: 70px;
  background-color: rgba(128, 128, 128, 0.404);
}
.goalsHeading {
  padding: 0 30px;
}
.goalsHeading h1 {
  text-align: left;
  color: rgb(66, 66, 66);
}
.video {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.video img {
  width: 170px;
  height: 100px;
}
.video .img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 5px;
}
.tag {
  background-color: #8b5ff1;
  color: white;
  padding: 4px 25px;
  margin-left: auto;
  border: none;
  border-radius: 20px;
}
</style>

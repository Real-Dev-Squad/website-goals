<template>
  <div class="goalsContainer">
    <h1 class="heading">Today</h1>
    <div class="goals">
      <div class="goalsItem">
        <div class="box"></div>
        <div class="goalsHeading">
          <h1>Watch first 20 min of Event Loop video</h1>
        </div>
        <div class="video">
          <iframe
            width="190"
            height="110"
            src="https://www.youtube.com/embed/8aGhZQkoFbQ&t=686s"
            frameborder="0"
          >
          </iframe>
          <img src="~/assets/swaraj.png" alt="userpic" />
        </div>
      </div>
      <br />
      <div class="goalsItem">
        <div class="box"></div>
        <div class="goalsHeading">
          <h1>Learn Heaps</h1>
        </div>
        <div class="tag">
          <button>Self</button>
        </div>
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
@import url('https://fonts.googleapis.com/css2?family=Saira+Semi+Condensed:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

.goalsContainer {
  max-width: 1000px;
  margin: auto;
}
.goalsContainer .heading {
  font-family: 'Saira Semi Condensed', sans-serif;
  font-weight: 800;
  font-size: 48px;
  line-height: 76px;
  padding-left: 10px;
  padding-top: 80px;
  padding-bottom: 20px;
  color: #e30062;
}
.goals {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.goalsItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f8f8;
  padding: 25px 30px;
}
.box {
  width: 70px;
  height: 70px;
  background-color: #c4c4c4;
}
.goalsHeading {
  width: 500px;
  text-align: left;
  margin: auto;
}
.goalsHeading h1 {
  color: rgba(6, 6, 6, 0.75);
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.1em;
}
.video {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.video img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-left: 20px;
  position: relative;
  bottom: -50px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.tag button {
  background-color: #6f6dfd;
  color: #ffffff;
  font-size: 20px;
  padding: 4px 35px;
  border: none;
  outline: none;
  border-radius: 20px;
}

@media screen and (max-width: 600px) {
  .goalsContainer {
    width: 95%;
  }
  .goalsContainer .heading {
    font-size: 35px;
    line-height: 16px;
  }
  .goalsItem {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 12px;
  }
  .box {
    width: 50px;
    height: 50px;
  }
  .goalsHeading {
    width: 100%;
  }
  .goalsHeading h1 {
    font-size: 20px;
    line-height: 25px;
  }
  .video iframe {
    width: 140px;
    height: 80px;
  }
  .video img {
    width: 28px;
    height: 28px;
    margin-left: 20px;
    bottom: -30px;
  }
  .tag button {
    font-size: 14px;
    padding: 2px 22px;
  }
}
</style>

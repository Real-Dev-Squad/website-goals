<template>
  <div class="goals-container">
    <h1 class="heading">Today</h1>
    <h1 class="no-of-goals">0/2</h1>
    <div class="goals">
      <div class="goals-item">
        <div class="goals-task">
          <div class="checkbox"></div>
          <h1>Watch first 20 min of Event Loop video</h1>
        </div>
        <div class="video">
          <iframe
            width="190"
            height="110"
            src="https://www.youtube.com/embed/cCOL7MC4Pl0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </iframe>
        </div>
        <img src="~/assets/swaraj.png" alt="userpic" />
      </div>
      <br />
      <div class="goals-item">
        <div class="goals-task">
          <div class="checkbox"></div>
          <h1>Learn Heaps</h1>
        </div>
        <button>Self</button>
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

.goals-container {
  max-width: 1000px;
  margin: auto;
}
.goals-container .heading {
  font-family: 'Saira Semi Condensed', sans-serif;
  font-weight: 800;
  font-size: 48px;
  line-height: 76px;
  padding-left: 10px;
  padding-top: 80px;
  padding-bottom: 20px;
  color: #e30062;
}
.goals-container .no-of-goals {
  display: none;
}
.goals {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.goals-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f8f8;
  padding: 25px 30px;
}
.goals-task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;
}
.checkbox {
  width: 70px;
  height: 70px;
  background-color: #c4c4c4;
}
.goals-task h1 {
  color: rgba(6, 6, 6, 0.75);
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.1em;
  width: 80%;
}
.video {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.goals-item img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-left: 20px;
  position: relative;
  bottom: -50px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.goals-item button {
  background-color: #6f6dfd;
  color: #ffffff;
  font-size: 20px;
  padding: 4px 35px;
  border: none;
  outline: none;
  border-radius: 20px;
}

@media screen and (min-width: 599px) and (max-width: 768px) {
  .goals-task h1 {
    font-size: 20px;
    width: 80%;
    line-height: 25px;
  }
  .checkbox {
    width: 47px;
    height: 47px;
  }
}
@media screen and (max-width: 600px) {
  .goals-container {
    width: 90%;
  }
  .goals-container .heading {
    font-size: 26px;
    line-height: 41px;
    text-align: center;
    padding-left: 0px;
  }
  .goals-container .no-of-goals {
    display: block;
    font-family: 'Saira Semi Condensed', sans-serif;
    font-weight: 800;
    font-size: 22px;
    line-height: 35px;
    letter-spacing: 4px;
    text-align: center;
    color: rgba(96, 96, 96, 0.63);
  }
  .goals-item {
    flex-direction: column;
    align-items: center;
    padding: 10px 12px;
  }
  .checkbox {
    width: 37px;
    height: 40px;
  }
  .goals-task {
    width: 100%;
    justify-content: flex-start;
  }
  .goals-task h1 {
    font-size: 16px;
    line-height: 18px;
    width: 70%;
  }
  .video iframe {
    width: 99px;
    height: 56px;
  }
  .goals-item img {
    width: 20px;
    height: 20px;
    bottom: 0px;
  }
  .goals-item button {
    font-size: 12px;
    padding: 2px 20px;
  }
  .goals-item :last-child {
    margin-left: auto;
  }
}
</style>

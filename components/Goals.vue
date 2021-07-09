<template>
  <div class="goals-container">
    <h1 class="heading">Today</h1>
    <h1 class="no-of-goals">0/2</h1>
    <div class="goals">
      <div class="goals-item">
        <div class="goals-task">
          <input id="checkbox1" type="checkbox" />
          <label for="checkbox1">
            <div class="tick">&#10004;</div>
          </label>
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
          <input id="checkbox2" type="checkbox" />
          <label for="checkbox2">
            <div class="tick">&#10004;</div>
          </label>
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
.goals-container {
  max-width: 1000px;
  margin: auto;
}
.goals-container .heading {
  font-family: 'Saira Semi Condensed', sans-serif;
  font-size: 48px;
  font-weight: 800;
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
.goals-item:hover {
  transform: scale(1.005);
  transition: all 0.5s;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
}
.goals-task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;
}
.goals-task input[type='checkbox'] {
  position: absolute;
  left: -1000px;
}
.goals-task label {
  width: 70px;
  height: 70px;
  background: #c4c4c4;
  transition: 400ms 100ms ease-out;
  cursor: pointer;
}
.tick {
  position: relative;
  font-size: 60px;
  color: green;
  text-align: center;
  top: -10px;
  display: none;
}
.goals-task input[type='checkbox']:checked + label {
  background: transparent;
  border: 3px solid green;
}
.goals-task input[type='checkbox']:checked + label .tick {
  transform: scale(1);
  display: block;
}
.goals-task input[type='checkbox']:focus + label {
  animation-name: checkbox-pop;
  animation-duration: 400ms;
  animation-iteration-count: 1;
  animation-timing-function: linear;
}

@-webkit-keyframes checkbox-pop {
  0% {
    transform: scale(1);
  }

  33% {
    transform: scale(0.9);
  }

  66% {
    transform: scale(1.1);
  }

  100% {
    tranform: scale(1);
  }
}

@keyframes checkbox-pop {
  0% {
    transform: scale(1);
  }

  33% {
    transform: scale(0.9);
  }

  66% {
    transform: scale(1.1);
  }

  100% {
    tranform: scale(1);
  }
}
.goals-task h1 {
  color: rgba(6, 6, 6, 0.75);
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  font-weight: 700;
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
  font-family: Helvetica Neue;
  font-weight: 500;
  font-size: 20px;
  padding: 4px 35px;
  border: none;
  outline: none;
  border-radius: 20px;
}

@media screen and (min-width: 599px) and (max-width: 768px) {
  .goals-task label {
    width: 47px;
    height: 47px;
  }
  .tick {
    font-size: 45px;
    top: -12px;
  }
  .goals-task h1 {
    font-size: 20px;
    width: 80%;
    line-height: 25px;
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
  .goals-task {
    width: 100%;
    justify-content: flex-start;
  }
  .goals-task input[type='checkbox']:checked + label {
    border: 2px solid green;
  }
  .goals-task label {
    width: 40px;
    height: 40px;
  }
  .tick {
    font-size: 35px;
    top: -7px;
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

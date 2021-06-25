<template>
  <header class="navbar">
    <nav>
      <div class="box">
        <div class="logo">
          <a href="https://realdevsquad.com/">
            <img
              src="~/assets/Real-Dev-Squad@1x.png"
              alt="Real Dev Squad logo"
            />
          </a>
        </div>
        <div class="hamburger-menu" @click="toggleClicked(isClicked)">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul :class="[isClicked ? 'show-menu' : 'hide-menu']">
        <li>
          <a href="https://welcome.realdevsquad.com/">Welcome</a>
        </li>
        <li>
          <a href="https://www.realdevsquad.com/events.html">Events</a>
        </li>
        <li>
          <a href="https://members.realdevsquad.com/">Members</a>
        </li>
        <li>
          <a href="https://crypto.realdevsquad.com/">Crypto</a>
        </li>
        <li>
          <a href="https://status.realdevsquad.com/">Status</a>
        </li>
        <li>
          <a class="active" href="https://goals.realdevsquad.com/">Goals</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isClicked: false,
    }
  },
  methods: {
    toggleClicked(value) {
      this.isClicked = !value
    },
  },
}
</script>

<style scoped>
nav {
  background: #1d1283;
  display: flex;
}
.hamburger-menu {
  position: relative;
  width: 35px;
  height: 70%;
  left: 10px;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;
  display: none;
}
.hamburger-menu span {
  background-color: white;
  width: 70%;
  height: 3px;
  margin: 2px 0;
}
nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #1d1283;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.5s;
}
nav li a {
  display: block;
  color: #ffffff;
  text-align: center;
  font-weight: bolder;
  padding: 0 0.5em;
  text-decoration: none;
}
nav li a:hover,
nav li a.active {
  color: #87d870;
}
img {
  width: 3.5em;
  height: 3.5em;
}

@media screen and (max-width: 600px) {
  nav {
    flex-direction: column;
  }
  .box {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
  .box .logo {
    padding: 0 0.3em;
  }
  .box .hamburger-menu {
    display: flex;
  }
  nav ul {
    flex-direction: column;
    transition: all 0.5s ease-in-out;
  }
  nav .show-menu {
    display: flex;
  }
  nav .hide-menu {
    display: none;
  }
  nav li a {
    padding: 0.5em 0em;
  }
}
</style>

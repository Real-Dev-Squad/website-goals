<template>
  <nav class="navbar">
    <button class="hamburger" @click="toggleClicked(isClicked)">
      <div class="hamburger__bar" />
      <div class="hamburger__bar" />
      <div class="hamburger__bar" />
    </button>

    <ul class="redirection">
      <li>
        <a href="https://realdevsquad.com/" class="redirection__option--logo">
          <img
            src="~/assets/Real-Dev-Squad@1x.png"
            alt="Real Dev Squad logo"
            width="50px"
            height="50px"
          />
        </a>
      </li>
      <li v-for="item in LINKS" :key="item.name">
        <a :href="item.link" class="redirection__option">{{ item.name }}</a>
      </li>
    </ul>

    <ul class="dropdown" :class="{ 'dropdown--open': isClicked }">
      <li>
        <a href="https://realdevsquad.com/" class="dropdown__option">Home</a>
      </li>
      <li v-for="item in LINKS" :key="item.name">
        <a :href="item.link" class="dropdown__option">{{ item.name }}</a>
      </li>
    </ul>

    <button
      class="login"
      onClick="window.location.href='https://github.com/login/oauth/authorize?client_id=23c78f66ab7964e5ef97'"
    >
      <span class="login__text">Sign In With GitHub</span>
      <img
        class="login__image"
        src="~/assets/github.png"
        alt="GitHub Icon"
        height="15px"
        width="15px"
      />
    </button>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isClicked: false,
      LINKS: [
        { name: 'Welcome', link: 'https://welcome.realdevsquad.com' },
        { name: 'Events', link: 'https://www.realdevsquad.com/events.html' },
        { name: 'Members', link: 'https://members.realdevsquad.com/' },
        { name: 'Crypto', link: 'https://crypto.realdevsquad.com/' },
        { name: 'Status', link: 'https://status.realdevsquad.com/' },
      ],
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
.navbar {
  height: 73px;
  display: flex;
  align-items: center;
  background-color: #1d1283;
  color: white;
  position: sticky;
  transform-style: preserve-3d;
  padding: 0 20px;
  top: 0;
  z-index: 1;
}
.hamburger {
  display: none;
  background-color: transparent;
  border: 0;
  cursor: pointer;
}
.hamburger__bar {
  height: 3px;
  width: 25px;
  margin: 5px 0;
  background-color: white;
}
.redirection {
  display: flex;
  align-items: center;
}
.redirection__option {
  padding: 19px 16px;
  margin: 0 10px;
  border-radius: 10px;
}
.redirection__option--logo {
  margin-right: 20px;
}
.redirection__option:hover {
  color: #49a82e;
}
.dropdown {
  position: absolute;
  transform: translateZ(-10px);
  display: none;
  flex-direction: column;
  bottom: 0;
  left: 0;
  transition: transform 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  background-color: white;
  color: #1d1283;
  width: 100%;
}
.dropdown--open {
  transform: translateY(100%);
}
.dropdown__option {
  padding: 10px 40px;
  margin: 10px;
  display: block;
}
.dropdown__option:hover {
  color: #49a82e;
}
.login {
  margin-left: auto;
  border: 2px solid white;
  border-radius: 6px;
  padding: 5px;
  background-color: transparent;
  display: flex;
  width: 151px;
  cursor: pointer;
}
.login__text {
  overflow: hidden;
  white-space: nowrap;
}
.login__image {
  margin-left: 0.3rem;
}

@media screen and (max-width: 970px) {
  .hamburger {
    display: block;
  }
  .login {
    width: 75px;
  }
  .redirection {
    display: none;
  }
  .dropdown {
    display: flex;
  }
}
</style>

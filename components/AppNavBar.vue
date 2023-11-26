<template>
  <v-app-bar flat color="primary">
    <v-container class="d-flex align-center">
      <ul class="redirection">
        <a href="https://realdevsquad.com/" class="redirection__option--logo">
          <img src="~/assets/Real-Dev-Squad@1x.png" alt="Real Dev Squad logo" width="50px" height="50px">
        </a>
        <li v-for="item in LINKS" :key="item.name">
          <a :href="item.link" class="redirection__option">{{ item.name }}</a>
        </li>
      </ul>

      <v-spacer></v-spacer>

      <nuxt-link :href="LOGIN">
        <button class="login">
          <span class="login__text">Sign In With GitHub</span>
          <img class="login__image" src="~/assets/github.png" alt="GitHub Icon" height="15px" width="15px">
        </button>
      </nuxt-link>
    </v-container>
  </v-app-bar>
</template>

<script>
import { getConfig } from '~/config'

export default {
  name: 'AppNavBar',
  data() {
    return {
      isClicked: false,
      LINKS: [
        { name: 'Welcome', link: 'https://welcome.realdevsquad.com' },
        { name: 'Events', link: 'https://www.realdevsquad.com/events.html' },
        { name: 'Members', link: 'https://members.realdevsquad.com/' },
        { name: 'Crypto', link: 'https://crypto.realdevsquad.com/' },
        { name: 'Status', link: 'https://status.realdevsquad.com/' }
      ],
      LOGIN: `${getConfig().RDS_API}/auth/github/login`
    }
  },
  methods: {
    toggleClicked(value) {
      this.isClicked = !value
    },
    redirectLogin() {
      window.location.href = this.LOGIN
    }
  }
}
</script>

<style scoped>
.redirection {
  display: flex;
  align-items: center;
  padding: 0;
  font: 700 16px Roboto, sans-serif;
}

.redirection__option {
  color: var(--color-white);
  padding: 0 16px;
  margin: 0 10px;
  border-radius: 10px;
}

.redirection__option--logo {
  margin-right: 20px;
  padding: 0;
}

.redirection__option:hover {
  color: var(--nav-secondary);
}

.login {
  color: var(--color-white);
  font: 400 13px Roboto, sans-serif;
  border: 2px solid var(--color-white);
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
  margin-left: 6px;
}
</style>

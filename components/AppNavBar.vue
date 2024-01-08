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
      <template v-if="isUserLoading">
        Loading...
      </template>

      <template v-else>
        <v-menu v-if="!!props.user">
          <template v-slot:activator="{ props: activator }">
            <div v-bind="activator" class="user-detail">
              <span class="username">
                Hello, {{ props.user.firstName || props.user.username }}
              </span>
              <AppAvatar
                :avatar="props.user.avatar"
                :initials="props.user.initials"
              />
            </div>
          </template>
        </v-menu>

        <nuxt-link v-else :href="LOGIN">
          <button class="login">
            <span class="login__text">Sign In With GitHub</span>
            <img class="login__image" src="~/assets/github.png" alt="GitHub Icon" height="15px" width="15px">
          </button>
        </nuxt-link>
      </template>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
import { getConfig } from '~/config'
import type { SelfInfo } from '~/adapters/auth/auth.type';
import type { PropType } from 'nuxt/dist/app/compat/capi';

const props = defineProps({
  user: Object as PropType<SelfInfo | null>,
  isUserLoading: Boolean,
})

const isClicked = ref(false);
const LINKS = [
  { name: 'Welcome', link: 'https://welcome.realdevsquad.com' },
  { name: 'Events', link: 'https://www.realdevsquad.com/events.html' },
  { name: 'Members', link: 'https://members.realdevsquad.com/' },
  { name: 'Crypto', link: 'https://crypto.realdevsquad.com/' },
  { name: 'Status', link: 'https://status.realdevsquad.com/' }
]
const LOGIN = `${getConfig().RDS_API}/auth/github/login`;

function toggleClicked(value: boolean) {
  isClicked.value = !value
}
function redirectLogin() {
  window.location.href = LOGIN
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

.user-detail {
  cursor: pointer;
}

.username {
  font-weight: 700;
  font-size: 1rem;
  margin-right: 5px;
}
</style>

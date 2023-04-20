<template>
  <v-app>
    <NavBar />
    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
export default {
  name: 'DefaultLayout',
  components: {
    NavBar
  }
}
</script>

<style>

:root {
  --nav-primary: #1d1283;
  --nav-secondary: #49a82e;
  --color-white: #ffffff;

  --base: #ffffff;
  --base--dark: #f6f6f6;

  --primary-color: #1d1283;
  --primary-color--light: #5f51dd;
  --secondary-color: #e20665;

  --text-color: #2a2e34;
  --text-color--light: rgb(119, 119, 119);
}

a {
  text-decoration: none;
  color: inherit;
}

li {
  list-style: none;
}

</style>

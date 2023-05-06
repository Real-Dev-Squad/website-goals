<template>
  <v-app>
    <AppNavBar />
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="2">
            <AppSideBar />
          </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <slot />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
export default {
  name: 'DefaultLayout'
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

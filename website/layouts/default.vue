<template>
  <div>
    <NavBar />
    <Nuxt />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'

export default {
  name: 'DefaultLayout',
  components: {
    NavBar
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: var(--text-color);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

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

input,
select,
button {
  color: inherit;
  background-color: inherit;
}

input::placeholder {
  color: var(--text-color--light);
}

select:focus,
input:focus {
  outline: none;
}

select {
  padding: 4px;
  appearance: none;
  background-color: transparent;
  border: 0;
}
</style>

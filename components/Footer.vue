<template>
  <footer>
    <p>
      The contents of this website are deployed from this{' '}
      <a
        href="https://github.com/Real-Dev-Squad/website-members"
        target="_blank"
        rel="noopener noreferrer"
      >
        open sourced repo
      </a>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
footer {
  font-weight: 100;
  margin-top: 30px;
  text-align: center;
  padding: 15px 0px;
  width: 100%;
  height: 2.5rem;
  position: relative;
  bottom: 0;
}
</style>

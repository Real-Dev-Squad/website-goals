<template>
  <v-container>
    <v-sheet rounded="lg">
      <GoalList />
    </v-sheet>
    <router-view />
  </v-container>
</template>

<script lang="ts" setup>
</script>

<script lang="ts">
export default {
  name: 'HomePage'
}
</script>
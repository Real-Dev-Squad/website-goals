<template>
  <v-container>
    <v-sheet rounded="lg">
      <GoalList />
    </v-sheet>
    <router-view />
  </v-container>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useUsersStore } from '~/store/users'
const userStore = useUsersStore()
onMounted(() => {
  userStore.fetchUsers()
})
</script>

<script lang="ts">
export default {
  name: 'HomePage'
}
</script>
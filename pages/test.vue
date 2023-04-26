<template>
  <div>
    <button @click="consoleGoals">Display Goals</button>
    <div>{{ JSON.stringify(authStore.$state) }}</div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '~/store/auth'
import { useGoalsStore } from '../store/goals'
import { useUsersStore } from '../store/users'
import { onMounted } from 'vue'

const goalStore = useGoalsStore()
const userStore = useUsersStore()
const authStore = useAuthStore()

onMounted(() => {
  goalStore.fetchGoals()
  userStore.fetchUsers()
  authStore.fetchSelf()
})

function consoleGoals () {
  console.log('page', authStore.getAuthState)
}
</script>

<script lang="ts">
export default {
  name: 'TestPage'
}
</script>

<style scoped></style>

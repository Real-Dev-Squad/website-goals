<template>
  <v-container>
    <v-row>
      <v-col>
        <v-sheet min-height="70vh" rounded="lg">
          <GoalList />
        </v-sheet>
      </v-col>
    </v-row>
    <router-view />
  </v-container>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useUsersStore } from '~/store/users'
import { useGoalsStore } from '~/store/goals'
const goalStore = useGoalsStore()
const userStore = useUsersStore()
onMounted(() => {
  goalStore.fetchGoals()
  userStore.fetchUsers()
})
</script>

<script lang="ts">
export default {
  name: 'HomePage'
}
</script>
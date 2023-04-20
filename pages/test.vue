<template>
  <div>
    <button @click="consoleGoals">Display Goals</button>
  </div>
</template>

<script lang="ts" setup>
import { useGoalsStore } from '../store/goals'
import { useUsersStore } from '../store/users'
import { onMounted } from 'vue'

const goalStore = useGoalsStore()
const userStore = useUsersStore()

onMounted(() => {
  goalStore.fetchGoals()
  userStore.fetchUsers()
})

function consoleGoals () {
  console.log(goalStore.getGoalDetailList())
}

// export default {
//   name: 'TestPage',
//   data () {
//   },
//   methods: {
//   },
//   mounted() {
//     goalStore.fetchGoals();
//     // userStore.fetchUsers();
//   }
// }
</script>

<style scoped></style>

<template>
  <div>
    <ul>
      <li v-for="goal in goals" :key="goal.id">
        {{ goal.title }}
      </li>
    </ul>
    <GoalTabVue @goal-added="addGoal" />
  </div>
</template>

<script>
import GoalTabVue from '../components/GoalTab.vue'

export default {
  name: 'HomePage',
  components: {
    GoalTabVue
  },
  computed: {
    goals () {
      return this.$store.state.goals.list
    }
  },
  methods: {
    addGoal (goal) {
      this.$store.commit('goals/add', goal)
    }
  }
}
</script>

<style scoped>

</style>

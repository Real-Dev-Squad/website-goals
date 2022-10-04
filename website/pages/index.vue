<template>
  <div>
    <ul class="goals">
      <GoalTabVue v-for="goal in goals" :key="goal.id" :goal="goal" />
      <GoalTabVue :goal="DEFAULT_GOAL" @goal-added="addGoal" />
    </ul>
  </div>
</template>

<script>
import GoalTabVue from '../components/GoalTab.vue'
import { DEFAULT_GOAL } from '../constant/goal'

export default {
  name: 'HomePage',
  components: {
    GoalTabVue
  },
  data () {
    return {
      DEFAULT_GOAL
    }
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
.goals {
  padding: 0 40px;
}

</style>

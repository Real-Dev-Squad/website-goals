<template>
  <div>
    <ul class="goals">
      <GoalTabViewVue v-for="goal in goals" :key="goal.id" :goal="goal" />
      <GoalTabAddVue :goal="DEFAULT_GOAL" @goal-added="addGoal" />
    </ul>
  </div>
</template>

<script>
import GoalTabAddVue from '../components/GoalTabAdd.vue'
import GoalTabViewVue from '../components/GoalTabView.vue'
import { DEFAULT_GOAL } from '../constant/goal'

export default {
  name: 'HomePage',
  components: {
    GoalTabAddVue,
    GoalTabViewVue
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
  margin: 0 40px;
  box-shadow: rgba(81, 81, 81, 0.35) 0px 5px 15px;
}

</style>

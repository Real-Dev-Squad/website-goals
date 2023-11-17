<template>
  <v-row justify="center">
    <v-dialog v-model="show" fullscreen :scrim="false" transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="closeGoalModal">
            <v-icon icon="mdi-close" />
          </v-btn>
          <v-toolbar-title>Goal Form</v-toolbar-title>
        </v-toolbar>
        <GoalForm v-if="goalResponse.data" :goal="goalResponse.data" @goal-update="handleGoalUpdate"/>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script setup lang="ts">
import type { Goal } from '~/models/Goal';
import { useGoalsStore } from '~/store/goals';

const router = useRouter()
const route = useRoute();
const show = ref(true);
const goalStore = useGoalsStore();

const goalId = route.params.goalId
if (typeof goalId != 'string') throw Error('Unsupported route param')

const goalResponse = computed(() => goalStore.getById(goalId))

onMounted(() => {
  goalStore.fetchById(goalId)
})

const closeGoalModal = () => {
  router.push('/')
};

function handleGoalUpdate(goal: Goal) {
  if (typeof goalId != 'string') throw Error('Unsupported route param')

  goalStore.patch(goalId, goal)
}

</script>

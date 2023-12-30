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
        <GoalForm v-if="!isLoading" :goal="goal" @goal-update="handleFormSubmit"/>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script setup lang="ts">
import type { PostGoal } from '~/interfaces/PostGoal';
import { useGoalByIdQuery, useUpdateGoalMutation } from '~/store/goals';

const router = useRouter()
const route = useRoute();
const show = ref(true);

const goalId = route.params.goalId
if (typeof goalId != 'string') throw Error('Unsupported route param')

function closeGoalModal() {
  router.push('/')
}

const { data: goal, isLoading } = useGoalByIdQuery({ id: goalId });
const { mutate: updateGoal } = useUpdateGoalMutation();
function handleFormSubmit(goal: PostGoal) {
  if (typeof goalId != 'string') throw Error('Unsupported goalId')
  
  updateGoal({
    goal: goal,
    goalId,
  })
}
</script>

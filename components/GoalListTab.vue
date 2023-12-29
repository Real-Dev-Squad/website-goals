<template>
  <tr>
    <td class="column__status">
      <GoalTabStatusMenu 
        :goalStatus="props.goal.status"
        @status-change="handleStatusChange"
      />
    </td>

    <td class="column__title">
      <GoalTabTitle :title="props.goal.title" :goalId="goal.id" @title-change="handleTitleChange" />
    </td>

    <td>
      <popup-assignee :assignee-id="props.goal.assignedTo" @select-assignee="handleSelectAssignee" :readonly="false" />
    </td>
    <td>
      <v-progress-circular :rotate="360" :size="40" :width="1" color="teal">
        {{ goal.percentageCompleted }}
      </v-progress-circular>
    </td>

    <td class="column__menu">
      <GoalTabMenu @delete-goal="handleDeleteGoal"/>
    </td>
  </tr>
</template>

<script lang="ts" setup>
import { useUpdateGoalMutation, useDeleteGoalMutation } from '~/store/goals';

const props = defineProps(["goal"]);

const { mutate: updateGoal } = useUpdateGoalMutation();
const { mutate: deleteGoal } = useDeleteGoalMutation();

function handleTitleChange(title: string) {
  updateGoal({ goalId: props.goal.id, goal: { title } });
}

function handleStatusChange(status: string) {
  updateGoal({ goalId: props.goal.id, goal: { status } });
}

function handleSelectAssignee(selectedAssigneeId: string) {
  updateGoal({ goalId: props.goal.id, goal: { assignedTo: selectedAssigneeId } });
}

function handleDeleteGoal() {
  deleteGoal({ goalId: props.goal.id });
}
</script>

<style>
.column__status {
  width: 30px;
}

.column__title {
  width: 650px;
}

.column__menu {
  width: 50px;
}

.title--plain .v-field__input {
  cursor: pointer;
}

.title--plain .v-field__overlay {
  background-color: transparent;
}

.title--plain .v-field__outline {
  display: none;
}

.title__edit-btn {
  opacity: 0;
}

.title--plain:hover .title__edit-btn {
  opacity: 1;
}
</style>
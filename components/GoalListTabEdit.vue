<template>
  <tr v-if="goal">
    <td class="column__status">
      <v-tooltip :text="goalStatus.text" location="left">
        <template v-slot:activator="{ props }">
          <v-btn size="10" v-bind="props" :color="goalStatus.color"></v-btn>
        </template>
      </v-tooltip>
    </td>

    <td class="column__title">
      <GoalTabTitle :title="goal.title" :goalId="goal.id" @title-change="handleTitleChange" />
    </td>

    <td>
      <popup-assignee :assignee-id="goal.assignedTo" @select-assignee="handleSelectAssignee" :readonly="false" />
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
import { goalRepo } from "~/models/Goal";
import { useGoalsStore } from "~/store/goals";
import { GOAL_STATUS } from "~/constants/goal";

const props = defineProps(["goalId"]);
const goalStore = useGoalsStore();
const goal = computed(() => goalRepo.find(props.goalId));
const goalStatus = computed(() => {
  switch (goal.value?.status) {
    case 'ongoing':
      return GOAL_STATUS.ONGOING;
    case 'completed':
      return GOAL_STATUS.COMPLETED;
    default:
      throw Error('Goal status mismatch');
  }
})

if (!goal.value) throw new Error("Goal not found");

function handleTitleChange(title: string) {
  goalStore.patch(props.goalId, { title });
}

function handleSelectAssignee(selectedAssigneeId: string) {
  goalStore.patch(props.goalId, {
    assignedTo:
      goal.value?.assignedTo == selectedAssigneeId ? "" : selectedAssigneeId,
  });
}

function handleDeleteGoal() {
  goalStore.delete(props.goalId)
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
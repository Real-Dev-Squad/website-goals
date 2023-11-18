<template>
  <tr v-if="goal">
    <td>
      <GoalTabStatusMenu 
        :goalStatus="goal.status"
        @status-change="handleStatusChange"
      />
    </td>

    <td>
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

    <td>
      <GoalTabMenu @delete-goal="handleDeleteGoal"/>
    </td>
  </tr>
</template>

<script lang="ts" setup>
import { goalRepo } from "~/models/Goal";
import { useGoalsStore } from "~/store/goals";

const props = defineProps(["goalId"]);
const goalStore = useGoalsStore();
const goal = computed(() => goalRepo.find(props.goalId));

if (!goal.value) throw new Error("Goal not found");

function handleTitleChange(title: string) {
  goalStore.patch(props.goalId, { title });
}

function handleStatusChange(status: string) {
    goalStore.patch(props.goalId, { status })
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
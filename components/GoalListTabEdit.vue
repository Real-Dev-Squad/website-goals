<template>
  <tr v-if="goal">
    <td class="column__status">
      <GoalTabStatusMenu 
        :goalStatus="goal.status"
        @status-change="handleStatusChange"
      />
    </td>

    <td class="column__title">
      <nuxt-link v-if="state.titleReadOnly" :to="`/goal/${goal.id}`">
        <v-text-field v-model='state.title' class="title--plain" :readonly=true hide-details>
          <template v-slot:append-inner>
            <v-tooltip text="Edit Title" location="top">
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" icon='mdi-pencil' class="title__edit-btn" variant="plain" size="small"
                  @click="() => handleTitleWritable(true)" />
              </template>
            </v-tooltip>
          </template>
        </v-text-field>
      </nuxt-link>

      <v-text-field v-else v-model='state.title' @blur="handleTitleCancel" @keyup.enter="handleTitleChange"
        @keyup.esc="handleTitleCancel" hide-details autofocus>
      </v-text-field>
    </td>

    <td>
      <popup-assignee :assignee-id="goal.assignedTo" @select-assignee="handleSelectAssignee" :readonly="false" />
    </td>
    <td>
      <v-progress-circular :rotate="360" :size="40" :width="1" color="teal">
        {{ goal.percentageCompleted }}
      </v-progress-circular>
    </td>
  </tr>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { goalRepo } from "~/models/Goal";
import { useGoalsStore } from "~/store/goals";

const props = defineProps(["goalId"]);
const goalStore = useGoalsStore();
const goal = computed(() => goalRepo.find(props.goalId));

if (!goal.value) throw new Error("Goal not found");

const state = reactive({
  titleReadOnly: true,
  title: goal.value.title,
});

function handleTitleWritable(isWritable: boolean) {
  state.titleReadOnly = !isWritable
}

function handleTitleCancel() {
  state.title = goal.value?.title || ''
  handleTitleWritable(false)
}

function handleTitleChange() {
  if (!state.title) {
    handleTitleCancel();
    return;
  };

  goalStore.patch(props.goalId, {
    title: state.title,
  });
  handleTitleWritable(false)
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
</script>

<style>
.column__status {
  width: 30px;
}

.column__title {
  width: 650px;
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
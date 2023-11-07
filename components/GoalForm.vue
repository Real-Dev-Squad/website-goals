<template>
  <v-container class="container">
    <v-form @submit.prevent="handleFormSubmit">
      <h2 class="text-center">{{ props.header }}</h2>
      <v-text-field id="task-name" label="Goal Title*" type="text" name="task-name" v-model="state.title"
        placeholder="eg: Testing setup for dashboard" :rules="[required]" />
      <v-textarea name="input-7-1" label="Description" placeholder="Description of the goal..."
        v-model="state.description" />
      <v-row>
        <v-col>
          <v-text-field id="due-date" label="Due Date*" type="datetime-local" name="due-date" v-model="state.endsOn" />
        </v-col>
        <v-col cols="1">
          <PopupAssigneeVue @select-assignee="handleAssigneeChange" :assignee-id="state.assignedTo" />
        </v-col>
      </v-row>
      <v-select menu v-model="state.status" :items="statusList" item-value="type" item-title="text" label="Status" />
      <v-btn block type="submit" color="primary"> Submit </v-btn>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import { Goal } from "~/models/Goal";
import PopupAssigneeVue from "./PopupAssignee.vue";
import { GOAL_STATUS_LIST } from "~/constants/goal";

const emit = defineEmits(['goalUpdate'])
const props = defineProps({
  goal: Goal,
  header: String,
})

const statusList = GOAL_STATUS_LIST
const state = reactive({ 
  ...props.goal,
  endsOn: props.goal?.endsOn && new Date(props.goal.endsOn).toISOString().slice(0, -5)
})

function required(value: any) {
  return !!value || "Required.";
}

function handleAssigneeChange(selectedAssigneeId: string) {
  state.assignedTo = selectedAssigneeId
}

function handleFormSubmit() {
  emit('goalUpdate', { ...state })
}


</script>
<style scoped></style>

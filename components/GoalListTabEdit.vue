<template>
  <tr v-if="goal">
    <nuxt-link :to="`/goal/${props.goalId}`">
      {{ state.title }}
    </nuxt-link>
    <td>{{ state.status || "---" }}</td>
    <td>{{ state.startsOn }}</td>
    <td>
      <v-progress-circular
        :rotate="360"
        :size="60"
        :width="10"
        :model-value="state.percentageCompleted"
        color="teal"
      >
        {{ state.percentageCompleted }}
      </v-progress-circular>
    </td>
    <td>
      <popup-assignee
        :assignee-id="goal.assignedTo"
        @select-assignee="handleSelectAssignee"
        :readonly="false"
      />
    </td>
  </tr>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { goalRepo } from "~/models/Goal";
import { useGoalsStore } from "~/store/goals";
import { useUsersStore } from "~/store/users";
const props = defineProps(["goalId"]);

const goalStore = useGoalsStore();
const userStore = useUsersStore();
const goal = computed(() => goalRepo.find(props.goalId));
const titleRef = ref();
if (!goal.value) throw new Error("Goal not found");
const state = reactive({
  assigneeMenu: false,
  ...goal.value,
});

const assignee = computed(() => {
  return (
    goal?.value?.assignedTo && userStore.getUserById(goal.value.assignedTo)
  );
});

function handleTitleChange() {
  goalStore.patch(props.goalId, {
    title: state.title,
  });
  titleRef.value.blur();
}

function handleSelectAssignee(selectedAssigneeId: string) {
  goalStore.patch(props.goalId, {
    assignedTo:
      goal.value?.assignedTo == selectedAssigneeId ? "" : selectedAssigneeId,
  });
  state.assigneeMenu = false;
}
</script>

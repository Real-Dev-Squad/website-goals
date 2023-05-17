<template>
  <v-row v-if="goal">
    <v-col cols="11" class="pa-0">
      <v-text-field ref="titleRef" hide-details v-model="state.title" @keydown.enter="handleTitleChange"
        @blur="handleTitleChange" />
    </v-col>
    <v-col cols="1" class="pa-0">
      <v-menu v-model="state.assigneeMenu" location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn variant="plain" v-bind="props" icon>
            <v-tooltip v-if="!assignee" text="Add Assignee">
              <template v-slot:activator="{ props }">
                <v-icon icon="mdi-account-plus-outline" v-bind="props"/>
              </template>
            </v-tooltip>
            <v-tooltip v-else :text="assignee.name">
              <template v-slot:activator="{ props }">
                <v-avatar v-if="assignee.avatar" v-bind="props">
                  <v-img :src="assignee.avatar" />
                </v-avatar>
                <v-avatar v-else color="indigo" v-bind="props">
                  {{ assignee.initials }}
                </v-avatar>
              </template>
            </v-tooltip>
          </v-btn>
        </template>
        <v-card min-width="300">
          <popup-assignee :assignee-id="goal.assignedTo" @select-assignee="handleSelectAssignee" />
        </v-card>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { goalRepo } from '~/models/Goal';
import { useGoalsStore } from '~/store/goals'
import { useUsersStore } from '~/store/users';

const props = defineProps(['goalId'])
const goalStore = useGoalsStore()
const userStore = useUsersStore()
const goal = computed(() => goalRepo.find(props.goalId))
const titleRef = ref()

if (!goal.value) throw new Error('Goal not found')
const state = reactive({
  assigneeMenu: false,
  title: goal.value.title,
})

const assignee = computed(() => {
  const assigneeRaw = goal?.value?.assignedTo && userStore.getUserById(goal.value.assignedTo)

  return assigneeRaw ? {
    id: assigneeRaw.id,
    name: `${assigneeRaw.firstName} ${assigneeRaw.lastName}`,
    avatar: assigneeRaw.avatarUrl,
    initials: `${assigneeRaw.firstName} ${assigneeRaw.lastName}`.trim().toUpperCase().split(' ', 2).map(str => str.charAt(0)).join('')
  } : null
})


function handleTitleChange() {
  goalStore.patch(props.goalId, {
    title: state.title,
  })

  titleRef.value.blur()
}

function handleSelectAssignee(selectedAssigneeId: string) {
  goalStore.patch(props.goalId, {
    assignedTo: selectedAssigneeId,
  })

  state.assigneeMenu = false
}
</script>

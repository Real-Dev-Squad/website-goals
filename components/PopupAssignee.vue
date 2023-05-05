<template>
  <div v-if="!userStore.isValid">
    Loading...
  </div>
  <v-autocomplete v-else v-model="localAssignees" :items="users" :readonly="readOnly" color="blue-grey lighten-2" item-text="name"
    item-value="id" auto-select-first multiple hide-details >
    <template v-slot:selection="{ props, item }">
      <v-tooltip location="bottom">
        <template #activator="{ props: tooltipProp }">
          <v-avatar v-if="item.raw.avatar" v-bind="{ ...props, ...tooltipProp }" size="25">
            <v-img :src="item.raw.avatar" />
          </v-avatar>
          <v-avatar v-else v-bind="item" color="indigo" size="25">
            {{ item.raw.initials }}
          </v-avatar>
        </template>
        <span>{{ item.raw.name }}</span>
      </v-tooltip>
    </template>

    <template v-slot:item="{ props, item }">
      <v-list-item v-bind="props" :title="item.raw.name">
        <template v-slot:prepend="{}">
          <v-avatar v-if="item.raw.avatar" v-bind="props" size="28" class="avatar">
            <v-img :src="item.raw.avatar" />
          </v-avatar>
          <v-avatar v-else v-bind="item" size="28" class="avatar" color="indigo">
            {{ item.raw.initials }}
          </v-avatar>
        </template>
      </v-list-item>
    </template>
  </v-autocomplete>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useUsersStore } from '~/store/users'

const props = defineProps(['assigneeIds', 'readOnly'])
const userStore = useUsersStore()

const assignees = props.assigneeIds.map((assigneeId: string) => userStore.getUserById(assigneeId))
const localAssignees = ref(assignees)
const users = userStore.all().map(user => {
  const name = `${user.firstName} ${user.lastName}`
  return {
    id: user.id,
    name,
    avatar: user.avatarUrl,
    initials: name.trim().toUpperCase().split(' ', 2).map(str => str.charAt(0)).join('')
  }
})
</script>


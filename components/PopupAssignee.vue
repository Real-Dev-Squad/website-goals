<template>
  <v-autocomplete v-model="localAssignee" :items="users" :readonly="readOnly" color="blue-grey lighten-2"
    item-title="name" item-value="id" hide-details menu autofocus>
    <template v-slot:selection="{ item }">
      <v-tooltip location="bottom">
        <template #activator="{ props: tooltipProp }">
          <v-avatar v-if="item.raw.avatar" v-bind="tooltipProp" size="25">
            <v-img :src="item.raw.avatar" />
          </v-avatar>
          <v-avatar v-else v-bind="tooltipProp" color="indigo" size="25">
            {{ item.raw.initials }}
          </v-avatar>
        </template>
        <span>{{ item.raw.name }}</span>
      </v-tooltip>
    </template>
    <template v-slot:item="{ props, item }">
      <v-list-item v-bind="props" :title="item.title" @click="$emit('select-assignee', item.raw.id)">
        <template v-slot:prepend="{}">
          <v-avatar v-if="item.raw.avatar" v-bind="props" size="28" class="avatar">
            <v-img :src="item.raw.avatar" />
          </v-avatar>
          <v-avatar v-else v-bind="props" size="28" class="avatar" color="indigo">
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
const props = defineProps(['assigneeId', 'readOnly'])
const userStore = useUsersStore()
const assignee = props.assigneeId ? userStore.getUserById(props.assigneeId) : null
const localAssignee = ref(assignee)
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

<style scoped>
.avatar {
  margin-left: -5px;
  cursor: pointer;
  outline: 2px solid white;
}

.avatar:hover {
  z-index: 1;
  transform: scale(1.05);
}

.assignee__select-text {
  max-width: 300px;
}
</style>

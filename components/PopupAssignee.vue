<template>
  <v-menu v-model="state.isMenuOpen" :close-on-content-click="false" location="bottom">
    <template v-slot:activator="{ props }">
      <v-btn variant="plain" v-bind="props" icon>
        <v-tooltip v-if="!assignee" text="Add Assignee">
          <template v-slot:activator="{ props }">
            <v-icon icon="mdi-account-plus-outline" v-bind="props" />
          </template>
        </v-tooltip>

        <v-tooltip v-else :text="assignee.displayName">
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

    <v-card class="card">
      <v-text-field v-model="state.search" label="Search" hide-details autofocus @blur="state.search = ''"/>
      <v-list class="autocomplete__list">
        <v-list-item
          v-for="user in filteredUsers"
          :title="user.displayName"
          :key="user.id"
          class="autocomplete__list-item"
          @click="() => handleNewAssigneeSelect(user)"
        >
          <template v-slot:prepend="{}">
            <v-avatar
              v-if="user.avatar"
              v-bind="props"
              size="28"
              class="avatar"
            >
              <v-img :src="user.avatar" />
            </v-avatar>
            <v-avatar
              v-else
              v-bind="props"
              size="28"
              class="avatar"
              color="indigo"
            >
              {{ user.initials }}
            </v-avatar>
          </template>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useUsersStore } from "~/store/users";
import { User } from "~/models/User";

const props = defineProps(["assigneeId", "readOnly"]);
const emit = defineEmits(['selectAssignee'])
const userStore = useUsersStore();

const users = userStore.all();
const assignee = computed(() => userStore.getUserById(props.assigneeId));
const state = reactive({
  search: "",
  isMenuOpen: false
})
const filteredUsers = computed(() => fuzzySearch(users, state.search))

function fuzzySearch(users: User[] , searchText: string) {
  if (!searchText) {      // No filter on user if searchText is empty
    return users;
  }

  const searchRegex = new RegExp(searchText.split('').join('.*?'), 'i');
  return users.filter(user => searchRegex.test(user.displayName));
}

function handleNewAssigneeSelect(user: User) {
  emit('selectAssignee', user.id);
  state.isMenuOpen = false;
  state.search = '';
}
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

.card {
  width: 250px;
  height: 500px;
  overflow: visible;
}

.autocomplete__list {
  height: 300px;
}

.autocomplete__list-item:hover {
  background-color: rgb(218, 218, 218);
  cursor: pointer;
}
</style>

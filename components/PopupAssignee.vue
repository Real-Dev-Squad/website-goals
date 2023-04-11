<template>
  <v-autocomplete
    v-model="localAssignees"
    :items="users"
    color="blue-grey lighten-2"
    label="Assignee"
    item-text="name"
    item-value="id"
    multiple
    auto-select-first
    append-icon=""
  >
    <template #selection="data">
      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-avatar v-if="data.item.avatar" v-bind="attrs" size="28" class="avatar" v-on="on">
            <v-img :src="data.item.avatar" />
          </v-avatar>
          <v-avatar
            v-else
            v-bind="attrs"
            size="28"
            class="avatar"
            color="indigo"
            v-on="on"
          >
            <span class="white--text text-body-5"> {{ data.item.initials }} </span>
          </v-avatar>
        </template>

        <span>{{ data.item.name }}</span>
      </v-tooltip>
    </template>

    <template #item="data">
      <v-list-item-avatar color="indigo">
        <img v-if="data.item.avatar" :src="data.item.avatar">
        <span v-else class="white--text text-h5"> {{ data.item.initials }} </span>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="assignee__select-text" v-html="data.item.name" />
      </v-list-item-content>
    </template>
  </v-autocomplete>
</template>

<script>
export default {
  name: 'PopupAssignee',
  props: ['assignee'],
  data () {
    return {
      localAssignees: this.assignee,
      name: 'Assignees'
    }
  },
  computed: {
    users () {
      // return this.$store.state.users.list.map((user) => {
      //   const name = `${user.firstName} ${user.lastName}`
      //   return {
      //     id: user.id,
      //     name,
      //     avatar: user.picture.url,
      //     initials: name.trim().toUpperCase().split(' ', 2).map(str => str.charAt(0)).join('')
      //   }
      // })
    }
  },
  watch: {
    localAssignees: {
      handler (newValue) {
        this.$emit('input', newValue)
      },
      deep: true
    }
  },
  mounted () {
    // this.$store.dispatch('users/fetchUsers')
  }
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

.assignee__select-text {
  max-width: 300px;
}
</style>

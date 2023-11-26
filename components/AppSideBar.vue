<template>
  <v-navigation-drawer permanent>
    <v-list>
      <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/john.png" title="John Leider"
        subtitle="john@google.com">
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list :lines="false" nav class="d-flex flex-column">
      <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary">
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>

      <v-list-item class="align-self-center">
        <v-btn color="primary" prepend-icon="mdi-plus">
          Create Goal
        </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
export default {
  data: () => ({
    items: [
      { text: 'Home', icon: 'mdi-home' },
      { text: 'All', icon: 'mdi-folder' },
      { text: 'Mine', icon: 'mdi-account' },
      { text: 'Marked', icon: 'mdi-star' },
      { text: 'Activity', icon: 'mdi-history' },
    ],
  }),
}
</script>

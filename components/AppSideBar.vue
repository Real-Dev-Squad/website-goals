<template>
  <v-navigation-drawer permanent :rail="mobile" expand-on-hover>
    <v-list>
      <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/john.png" title="John Leider"
        subtitle="john@google.com">
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list :lines="false" nav class="d-flex flex-column">
      <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary" :prepend-icon="item.icon"
        :title="item.text">
      </v-list-item>
      <v-divider></v-divider>

      <v-list-item title="Create Goal" prepend-icon="mdi-plus" link class="create-goal">
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify/lib/framework.mjs';

const { mobile } = useDisplay();

const items = [
  { text: 'Home', icon: 'mdi-home' },
  { text: 'All', icon: 'mdi-folder' },
  { text: 'Mine', icon: 'mdi-account' },
  { text: 'Marked', icon: 'mdi-star' },
  { text: 'Activity', icon: 'mdi-history' },
]
</script>

<style scoped>
.create-goal {
  color: var(--primary-color);
}
</style>
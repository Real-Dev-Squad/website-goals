<template>
  <v-avatar v-if="props.avatar" v-bind="props.vBind">
    <v-img :src="props.avatar" />
  </v-avatar>
  <v-avatar v-else color="indigo" v-bind="props.vBind">
    {{ props.initials }}
  </v-avatar>
</template>

<script setup lang="ts">
const props = defineProps({
  avatar: String,
  initials: String,
  vBind: Object,
});

</script>
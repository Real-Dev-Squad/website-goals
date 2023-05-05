<template>
  <v-row>
    <v-col cols="12" class="px-0 container">
      <v-text-field v-if="showGoalTabPost" v-model="form.title" hide-details label="Title" @keydown.enter.prevent="handleSubmit" autofocus
        @blur="showGoalTabPost = false" />
      <v-btn v-else size="small" @click="showGoalTabPost = true" elevation="0">
        <v-icon start icon="mdi:mdi-plus" />
        Add Goal
      </v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useGoalsStore } from '~/store/goals'

const goalStore = useGoalsStore()
const form = reactive({
  title: ''
})

const showGoalTabPost = ref(false)

const handleSubmit = () => {
  if (!form.title) return

  goalStore.add({
    title: form.title
  })
  form.title = ''
}

</script>

<style scoped>
.container {
  height: 80px;
  display: flex;
  align-items: center;
}
</style>

<template>
  <v-form @submit.prevent="handleSubmit">
    <v-row>
      <v-col cols="12" md="12">
        <v-text-field v-model="form.title" label="Title" @keydown.enter.prevent="handleSubmit"/>
      </v-col>
    </v-row>
  </v-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useGoalsStore } from '~/store/goals';

const goalStore = useGoalsStore();

const form = reactive({
  title: "",
})

const handleSubmit = () => {
  if (!form.title) return;

  goalStore.add({
    title: form.title,
  })
  form.title = "";
}

</script>

<style scoped></style>

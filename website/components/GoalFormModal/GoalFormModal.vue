<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      width="700px"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Create a New Goal
        </v-btn>
      </template>
      <v-card>
        <GoalForm />
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import GoalForm from './../../components/goal-form/GoalForm.vue'
export default {
  name: 'GoalFormModal',
  components: {
    GoalForm
  },
  data () {
    return {
      dialog: false
    }
  }
}
</script>

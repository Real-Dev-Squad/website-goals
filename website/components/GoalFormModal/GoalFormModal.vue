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
        <div class="d-flex justify-end">
          <CloseButton
            label="x"
            name="close"
            @close="dialog = false"
          />
        </div>
        <GoalForm />
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import GoalForm from './../../components/GoalForm/GoalForm.vue'
import CloseButton from './../../components/reusable/CloseButton.vue'
export default {
  name: 'GoalFormModal',
  components: {
    GoalForm,
    CloseButton
  },
  data () {
    return {
      dialog: false
    }
  }
}
</script>

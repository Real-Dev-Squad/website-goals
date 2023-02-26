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
          <v-btn
            name="close"
            color="primary"
            icon
            @click="close"
          >
            x
          </v-btn>
        </div>
        <GoalForm />
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import GoalForm from './../../components/GoalForm/GoalForm.vue'
export default {
  name: 'GoalFormModal',
  components: {
    GoalForm
  },
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    close () {
      this.dialog = false
    }
  }
}
</script>

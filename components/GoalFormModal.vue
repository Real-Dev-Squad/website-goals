<template>
  <v-row justify="center">
    <v-dialog
      v-model="show"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="show = false">
            <v-icon icon="mdi-close" />
          </v-btn>
          <v-toolbar-title>Goal Form</v-toolbar-title>
        </v-toolbar>
        <GoalForm />
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import GoalForm from "./GoalForm.vue";

export default {
  name: "GoalFormModal",
  components: {
    GoalForm,
  },

  props: ["visible", "closeGoalModal"],
  computed: {
    show: {
      get() {
        return this.visible;
      },
      set() {
        this.closeGoalModal();
      },
    },
  },
};
</script>

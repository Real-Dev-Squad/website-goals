<template>
  <v-row justify="center">
    <v-dialog v-model="show" fullscreen :scrim="false" transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click.stop="show = false"
          >
            <v-icon icon="mdi-close"/>
          </v-btn>
          <v-toolbar-title>Goal Form</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              variant="text"
              @click="show = false"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <GoalForm />
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import GoalForm from './GoalForm.vue'

export default {
  name: 'GoalFormModal',
  components: {
    GoalForm
  },
  props: ['visible'],
  computed: {
    show: {
      get () {
        return this.visible
      },
      set (value: boolean) {
        if (!value) {
          this.$emit('close')
        }
      }
    }
  }
}
</script>

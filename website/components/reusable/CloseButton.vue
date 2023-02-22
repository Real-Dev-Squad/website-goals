<template>
  <v-btn
    :name="name"
    :color="color"
    icon
    @click="close"
  >
    {{ label }}
  </v-btn>
</template>
<script>
export default {
  name: 'CloseButton',
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'primary'
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

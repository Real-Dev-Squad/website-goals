<template>
  <v-btn
    :id="buttonId"
    block
    :type="type"
    :name="name"
    :color="color"
  >
    {{ label }}
  </v-btn>
</template>
<script>
export default {
  name: 'SubmitButton',
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'button'
    },
    name: {
      type: String,
      required: true
    },
    buttonId: {
      type: String,
      default: 'button'
    },
    color: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

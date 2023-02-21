<template>
  <v-text-field
    :id="inputId"
    :label="label"
    :type="type"
    :name="name"
    :placeholder="placeholder"
  />
</template>

<script>

export default {
  name: 'InputField',
  components: {
  },
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    inputId: {
      type: String,
      default: 'input'
    }
  }
}
</script>

<template>
  <v-select
    :label="label"
    :name="name"
    :items="options"
  />
</template>

<script>
export default {
  name: 'SelectOption',
  props: {
    label: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>

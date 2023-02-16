<template>
  <div class="inputBox">
    <button
      :id="inputId"
      :class="inputClass"
      :type="type"
      :name="name"
    >
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'SubmitButton',
  props: {
    label: {
      type: String,
      required: true
    },
    inputClass: {
      type: String,
      default: 'input'
    },
    type: {
      type: String,
      default: 'button'
    },
    name: {
      type: String,
      required: true
    },
    inputId: {
      type: String,
      default: 'input'
    }
  }
}
</script>

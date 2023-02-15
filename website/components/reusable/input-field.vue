<template>
  <div class="inputBox">
    <label :for="forInput">
      {{ label }}
      <span class="required"> *</span>
    </label>
    <EditButton />
    <input
      :id="inputId"
      :required="isRequired"
      :class="inputClass"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :autofocus="isAutofocus"
    >
  </div>
</template>

<script>
import EditButton from './../reusable/edit-button.vue'

export default {
  name: 'InputField',
  components: {
    EditButton
  },
  props: {
    label: {
      type: String,
      required: true
    },
    forInput: {
      type: String,
      default: 'for'
    },
    isRequired: {
      type: Boolean,
      default: true
    },
    inputClass: {
      type: String,
      default: 'input'
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
    isAutofocus: {
      type: Boolean,
      default: true
    },
    inputId: {
      type: String,
      default: 'input'
    }
  }
}
</script>

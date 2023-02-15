<template>
  <div class="inputBox">
    <label
      :for="forInput"
      :class="labelClass"
    >
      {{ label }}
      <span class="required"> *</span>
    </label>
    <EditButton />
    <select
      v-model="selectedOption"
      :class="inputClass"
      :name="name"
      @change="handleChange"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
import EditButton from './../reusable/edit-button.vue'

export default {
  name: 'SelectOption',
  components: {
    EditButton
  },
  props: {
    label: {
      type: String,
      required: true
    },
    labelClass: {
      type: String,
      default: 'required'
    },
    isRequired: {
      type: Boolean,
      default: true
    },
    options: {
      type: Object,
      required: true
    },
    inputClass: {
      type: String,
      default: 'input'
    },
    name: {
      type: String,
      required: true
    }

  },
  data () {
    return {
      selectedOption: this.value
    }
  },
  methods: {
    handleChange () {
      this.$emit('input', this.selectedOption)
    }
  }
}
</script>

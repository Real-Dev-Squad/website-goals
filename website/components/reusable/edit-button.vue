<template>
  <span
    :class="btnClass"
    @click="editBtn"
  >{{ buttonText }}</span>
</template>
<script>
export default {
  name: 'EditButton',
  props: {
    buttonText: {
      type: String,
      default: 'Edit'
    },
    btnClass: {
      type: String,
      default: 'edit-button'
    }
  },
  methods: {
    editBtn () {
      const input = event.target.nextElementSibling
      event.target.classList.toggle('edit-button__active')

      input.classList.toggle('notEditing')
    }
  }
}

</script>

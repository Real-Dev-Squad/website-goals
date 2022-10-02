<template>
  <form class="goal-form" @submit.prevent="handleSubmit">
    <div class="title">
      <input v-model="form.title" name="title" placeholder="Task Name" class="title__field">
    </div>
    <div>
      <select id="goal-type" v-model="form.goalType">
        <option selected disabled hidden value="">
          Goal Type
        </option>
        <option v-for="option in options.goalType" :key="option.type" :value="option.type">
          {{ option.text }}
        </option>
      </select>
    </div>
    <button type="submit">
      Submit
    </button>
  </form>
</template>

<script>
export default {
  name: 'GoalTab',
  data () {
    return {
      form: {
        title: '',
        goalType: ''
      },
      options: {
        goalType: [
          { type: 'STANDUP', text: 'Standup' },
          { type: 'LONG_TERM', text: 'Long Term' },
          { type: 'SHORT_TERM', text: 'Short Term' }
        ]
      }
    }
  },
  methods: {
    handleSubmit () {
      const goal = {
        title: this.form.title,
        goalType: this.form.goalType
      }

      this.$emit('goal-added', goal)
      this.form.title = ''
      this.form.goalType = ''
    }
  }
}
</script>

<style>
.goal-form {
  width: 100%;
  display: flex;
  align-items: center;
}

.title {
  width: 100%;
}

.title__field {
  padding: 10px;
  width: 100%;
}
</style>

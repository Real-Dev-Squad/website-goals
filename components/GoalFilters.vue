<template>
  <v-combobox
    v-model="form.status"
    label="Filter"
    :items="options.status"
    item-value="type"
    item-title="text"
    variant="outlined"
    @update:model-value="print"
  ></v-combobox>
</template>

<script>
import { GOAL_STATUS } from "~/constants/goal";



export default {
  name: "GoalTab",
  props: {
    isEditable: Boolean,
  },
  data() {
    return {
      form: {
        title: "",
        type: "",
        status: "",
      },
      options: {
        status: [
          GOAL_STATUS.COMPLETED,
          GOAL_STATUS.ONGOING,
        ],
      },
    };
  },
  methods: {
    print: (value) => {
      // goalStore.fetchGoals({ status: value.type });
      // console.log({ status: value.type });
    },
  },
};
</script>

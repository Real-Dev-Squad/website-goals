<template>
  <v-combobox
    v-model="form.status"
    label="Status"
    :items="options.status"
    item-value="type"
    item-title="text"
    variant="outlined"
    @update:model-value="print"
  ></v-combobox>
</template>

<script>
import { GOAL_STATUS } from "~/constants/goal";

import { useGoalsStore } from "~/store/goals";

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
          GOAL_STATUS.PAUSED,
        ],
      },
    };
  },
  methods: {
    print: (value) => {
      const goalStore = useGoalsStore();
      // goalStore.fetchGoals({ status: value.type });
      // console.log({ status: value.type });
    },
  },
};
</script>

<template>
  <GoalFormModal
    :visible="showCreateGoalModal"
    :close-goal-modal="closeGoalModal"
  />
</template>

<script setup lang="ts">
const showCreateGoalModal = ref(true);
const router = useRouter()
const closeGoalModal = () => {
  router.push('/')
};

</script>

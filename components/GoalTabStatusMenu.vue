<template>
    <v-menu open>
        <template v-slot:activator="{ props: menuProps }">
            <v-tooltip :text="goalStatus.text" location="left">
                <template v-slot:activator="{ props: toolTipProps }">
                    <v-btn size="10" v-bind="mergeProps(menuProps, toolTipProps)" :color="goalStatus.color"></v-btn>
                </template>
            </v-tooltip>
        </template>

        <v-list>
            <v-list-item v-for="(option, index) in statusOptions" :key="index">
                <v-list-item-title @click="() => emit('status-change', option.type)" class="menu__option">
                    {{ option.text }}
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script setup lang="ts">
import { mergeProps } from 'vue'
import { GOAL_STATUS, GOAL_STATUS_LIST } from '~/constants/goal';

const props = defineProps(['goalStatus'])
const emit = defineEmits(['status-change'])
const statusOptions = GOAL_STATUS_LIST

const goalStatus = computed(() => {
    switch (props.goalStatus) {
        case 'ongoing':
            return GOAL_STATUS.ONGOING;
        case 'completed':
            return GOAL_STATUS.COMPLETED;
        default:
            throw Error('Goal status mismatch');
    }
})

</script>

<style scoped>
.menu__option {
    cursor: pointer;
}

</style>
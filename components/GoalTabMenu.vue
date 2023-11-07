<template>
    <v-menu>
        <template v-slot:activator="{ props }">
            <v-btn icon="mdi-dots-vertical" size="40" variant="plain" v-bind="props" />
        </template>

        <v-list>
            <v-list-item title="Delete" @click="emit('deleteGoal')" class="menu__list">
                <template v-slot:prepend>
                    <v-icon icon="mdi-delete" />
                </template>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script setup>
const emit = defineEmits(['deleteGoal'])
</script>

<style scoped></style>
<template>
    <v-menu>
        <template v-slot:activator="{ props }">
            <v-btn icon="mdi-dots-vertical" size="40" variant="plain" v-bind="props" />
        </template>

        <v-list>
            <v-list-item @click="emit('deleteGoal')" class="menu__list">
                <v-btn text="Delete" prepend-icon="mdi-delete" variant="plain"/>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script setup>
const emit = defineEmits(['deleteGoal'])
</script>

<style scoped>
.menu__list {
    padding: 0;
}
</style>
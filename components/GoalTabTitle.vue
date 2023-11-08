<template>
    <nuxt-link v-if="!state.writable" :to="`/goal/${props.goalId}`">
        <v-text-field v-model='state.title' class="title--plain" :readonly=true hide-details>
            <template v-slot:append-inner>
                <v-tooltip text="Edit Title" location="top">
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" icon='mdi-pencil' class="title__edit-btn" variant="plain" size="small"
                            @click="state.writable = true" />
                    </template>
                </v-tooltip>
            </template>
        </v-text-field>
    </nuxt-link>

    <v-text-field v-else v-model='state.title' @blur="handleCancelChanges" @keyup.enter="handleTitleChange"
        @keyup.esc="handleCancelChanges" hide-details autofocus>
    </v-text-field>
</template>

<script setup>
const props = defineProps(['title', 'goalId'])
const emit = defineEmits(['title-change'])

const state = reactive({
    title: props.title,
    writable: false,
})

function handleCancelChanges() {
    state.title = props.title
    state.writable = false
}

function handleTitleChange() {
    if (!state.title) {
        handleCancelChanges()
        return
    }

    emit('title-change', state.title)
    state.writable = false
}
</script>
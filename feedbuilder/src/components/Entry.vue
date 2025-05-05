<script setup>
import { ref, reactive, vModelCheckbox, inject } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { deleteEntryKey } from './keys'

const showInputs = ref(false)

function genUID() {
    return "urn:uuid:" + uuidv4()
}

const props = defineProps({
    data: Object
})
const data = props.data

if (!data.id) {
    data.id = genUID()
}

const deleteEntry = inject(deleteEntryKey)

</script>

<template>
    <input type="checkbox" v-model="showInputs"/>
    <div v-if="!showInputs">
        <p>{{ !!data.title ? ("Title: " + data.title) : "Untitled" }}</p>
        <p v-if="data.link">
            Link: <a :href="data.link" target="_blank" rel="noopener noreferrer">Visit 🔗</a>
        </p>
        <p v-if="!data.link">
            No link specified
        </p>
        <p>{{ "Published Time: " + new Date(data.published).toDateString() }}</p>
        <p>{{ "Updated Time: " + new Date(data.updated).toDateString() }}</p>
        <p>{{ "ID: " + data.id }}</p>
    </div>
    <div class="hori" v-else>
        <p>Title: </p> <input v-model="data.title" placeholder="My First Post"></input> <br/>
        <p>URL: </p> <input v-model="data.link" placeholder="https://example.com"></input> <br/>
        <p>Published Time: </p> <button @click="data.published = Date.now()">
            {{ "Set to Now  (" + new Date(data.published).toISOString().replaceAll('-', '') + ")" }}
        </button> <br/>
        <p>Updated Time: </p> <button @click="data.updated = Date.now()">
            {{ "Set to Now  (" + new Date(data.updated).toISOString().replaceAll('-', '') + ")" }}
        </button> <br/>
        <p>ID: </p> <button @click="data.id = genUID()">
            {{ "Reroll " + data.id  }}
        </button> <br/>
        <button @click="deleteEntry(data.key)">Delete Entry</button> <br/>
    </div>
    <hr />
</template>

<style scoped>
.hori > * {
    display: inline-block
}
</style>
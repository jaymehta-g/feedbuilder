<script setup>
import { ref, reactive, vModelCheckbox } from 'vue'
import { v4 as uuidv4 } from 'uuid'

const showInputs = ref(true)

function genUID() {
    return "urn:uuid:" + uuidv4()
}

function nowDate() { 
    return new Date(Date.now()).toISOString().replaceAll('-', '');
}

const data = reactive({
    title: "",
    link: "",
    published: nowDate(),
    updated: nowDate(),
    id: genUID(),
})
</script>

<template>
    <input type="checkbox" v-model="showInputs"/>
    <div v-if="!showInputs">
        <p>{{ "Title: " + data.title }}</p>
        <p>{{ "Published Time: " + data.published }}</p>
        <p>{{ "Updated Time: " + data.updated }}</p>
        <p>{{ "ID: " + data.id }}</p>
    </div>
    <div v-if="showInputs" class="hori">
        <p>Title: </p> <input v-model="data.title"></input> <br/>
        <p>Published Time: </p> <button @click="data.published = nowDate()">
            {{ "Set to Now: " + data.published  }}
        </button> <br/>
        <p>Updated Time: </p> <button @click="data.updated = nowDate()">
            {{ "Set to Now: " + data.updated  }}
        </button> <br/>
        <p>ID: </p> <button @click="data.id = genUID()">
            {{ "Reroll " + data.id  }}
        </button> <br/>
    </div>
</template>

<style scoped>
.hori > * {
    display: inline-block
}
</style>
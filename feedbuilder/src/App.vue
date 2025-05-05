<script setup>
import { ref, provide } from 'vue';
import Entry from './components/Entry.vue';
import { deleteEntryKey } from './components/keys';

const data = ref([
])

let key = 0
function addEntry() {
  data.value.push({
    title: "",
    link: "",
    published: Date.now(),
    updated: Date.now(),
    id: "",
    key: key++,
  })
}

function deleteEntry(key) {
  data.value = data.value.filter((t) => t.key != key)
}

provide(deleteEntryKey, deleteEntry)

</script>

<template>
  <button @click="addEntry()">New post</button>
  <div v-if="data.length > 0" style="display: flex; flex-direction: column-reverse;">
    <div v-for="e in data" :key="e.key">
      <Entry :data="e"/>
    </div>
  </div>
  <p v-else>No entries</p>
</template>

<style scoped>
</style>

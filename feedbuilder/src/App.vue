<script setup>
import { reactive } from 'vue';
import Entry from './components/Entry.vue';

const data = reactive([
  {
    title: "first",
    link: "",
    published: 0,
    updated: 0,
    id: "",
  },
  {
    title: "2nd",
    link: "",
    published: 0,
    updated: 0,
    id: "",
  },
  {
    title: "hello world",
    link: "",
    published: 0,
    updated: 0,
    id: "",
  },
])

let key = 0
function addEntry() {
  data.push({
    title: "hello world",
    link: "",
    published: 0,
    updated: 0,
    id: "",
    key: key++,
  })
}

</script>

<template>
  <div style="display: flex; flex-direction: column-reverse;">
    <div v-for="e in data">
      <Entry :data="e"/>
    </div>
  </div>
</template>

<style scoped>
</style>

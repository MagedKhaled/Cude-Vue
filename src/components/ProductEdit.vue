
<script setup>

import { ref } from 'vue'

const props = defineProps(['toEdit', 'toEditData'])
const emit = defineEmits(['products'])


async function editRecord() {
  const response = await fetch('http://localhost:8000/', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',

    },
    body: JSON.stringify({
      id: props.toEditData.id,
      name: props.toEditData.name,
      cost: props.toEditData.cost,
    }),
  });

  emit('products', await response.json())
}


</script>


<template >
  <table class="table" v-show="props.toEdit" >
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Cost</th>
        <th>Confirm</th>
      </tr>
    </thead>
    <tbody>
      <td><input type="text" v-model="props.toEditData.id" name="Id" readonly></td>
      <td><input type="text" v-model="props.toEditData.name" name="Name"></td>
      <td><input type="text" v-model="props.toEditData.cost" name="Cost"></td>
      <td><button @click="editRecord"><slot></slot></button></td>
    </tbody>
  </table>
</template>

<style></style>
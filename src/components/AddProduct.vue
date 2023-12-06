

<script setup>
import { ref } from 'vue'
const props = defineProps(['toAdd'])
const emit = defineEmits(['products'])
let name = ref(null);
let cost = ref(null);

async function addRecord() {
  let nameIN = name.value
  let costIN = cost.value
  if ((nameIN && costIN)) {
    const response = await fetch('http://localhost:8000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({
        'name': nameIN,
        'cost': costIN,
      }),
    });
    let products = await response.json()
    emit('products', products)
  }
}

</script>


<template>
  <table class="table" v-show="toAdd">
    <thead>
      <tr>
        <th>Name</th>
        <th>Cost</th>
        <th>Confirm</th>
      </tr>
    </thead>
    <tbody>
      <td><input type="text" v-model="name" name="Name"></td>
      <td><input type="text" v-model="cost" name="Cost"></td>
      <td><button class="btn btn-success" @click="addRecord"><slot></slot></button></td>
    </tbody>
  </table>
</template>

<style></style>
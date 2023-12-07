<script setup >
import { ref, reactive } from 'vue'
import ProductEdit from './components/ProductEdit.vue'
import ProductAdd from './components/AddProduct.vue'
import ProductRow from './components/ProductRow.vue'

let products = ref([]);
let toEditData = ref({ 'id': null, 'name': null, 'cost': null });
let toEdit = ref(false);
let toAdd = ref(false);
let isEmpty = ref(false)
let x = ref(0)

async function fetchData() {
  toEditData.value = { ...toEditData.value}
  isEmpty = true
  const response = await fetch("http://localhost:8000/");
  
  products.value = await response.json();
  
}

function editProducts(prod) {
  toEdit.value = false
  products.value = prod
}

function toEditShow(prodId, prodName, prodCost) {
  toEdit.value = false;
  toEdit.value = true;
  toAdd.value = false;
  toEditData = { 'id': prodId, 'name': prodName, 'cost': prodCost }
  
} 
function toAddShow(){
  toAdd.value = !toAdd.value
  toEdit.value = false

}
function addProducts(prod) {
  products.value = prod

}

function resetProducts(prod) {
  products.value = prod

}


</script>


<template >
  <div class="my-5 m-auto form-control w-75">
    <div v-show="isEmpty">

<table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Cost</th>
      <th>Delete</th>
      <th>Edit</th>
    </tr>
  </thead>
  <tbody>
    <ProductRow v-for="(product) in products" :key="product.id" :product-name="product.name"
      :product-cost="product.cost" :product-id="product.id" @productsChange="resetProducts" @toEdit="toEditShow" />

  </tbody>
</table>

<button class="btn btn-primary" @click="toAddShow" v-show="!toAdd">Add Product</button>
</div>
<ProductEdit :toEditData="toEditData" :toEdit="toEdit" @products="editProducts"  >Edit</ProductEdit>
<ProductAdd :toAdd="toAdd" @products="addProducts" >Add</ProductAdd>

<button class="btn btn-success" @click="fetchData" v-show="!isEmpty">fetch Data</button>
  </div>
</template>


<style>

</style>

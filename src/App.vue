<script>
export default {
  data() {
    return {
      products: null,
      toEdit: {'id':null,'name':null,'cost':null},
      toAdd: null,


    }
  },
  methods: {
    async fetchData() {      
        const response = await fetch("http://localhost:8000/"); 
        this.products = await response.json();
      }   ,
      editProducts(prod){
        this.products = prod

      },
      toEditShow(prodId,prodName,prodCost){
        this.toEdit = {'id':prodId,'name':prodName,'cost':prodCost}
      
      },
      addProducts(prod){
        this.toAdd = false
        this.products = prod

      },



    
  }
  
}
</script>
<template>

<div v-show="products">
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
      <ProductRow v-for="(product) in products"
        :key="product.id"
        :product-name="product.Name" 
        :product-cost="product.Cost" 
        :product-id="product.id"
        @products="addProducts"
        @toEdit="toEditShow"
        
        />

    </tbody>
  </table>
  <button class="btn btn-primary" @click="toAdd=!toAdd" v-show="!toAdd">Add Product</button>

</div>
  

  <ProductEdit :toEdit="toEdit"
  @products="editProducts"
  />
  <ProductAdd :toAdd="toAdd"
  @products="addProducts"
  />


  
<button class="btn btn-success" @click="fetchData" v-show="!products">fetch Data</button>

</template>

<style></style>

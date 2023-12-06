<script>
export default {
  data() {
    return {
      products: null,
      toEditData: { 'id': null, 'name': null, 'cost': null },
      toEdit: null,
      toAdd: null,
      prod: null,


    }
  },
  methods: {
    async fetchData() {
      const response = await fetch("http://localhost:8000/");
      this.products = await response.json();
    },
    editProducts(prod) {
      this.products = prod

    },
    toEditShow(prodId, prodName, prodCost) {
      this.toEdit = true
      this.toEditData = { 'id': prodId, 'name': prodName, 'cost': prodCost }


    },
    addProducts(prod) {
      this.toAdd = false
      this.products = prod

    },
    productsChange(prod){
      this.prod = prod
      this.products = prod
    }




  }

}
</script>
<template>
  <div v-show="products">
    <ContentTable
    :products="products"
    @products="addProducts"
    @productsChange="productsChange"
    @toEdit="toEditShow"
    />
    <button class="btn btn-primary" @click="toAdd = !toAdd" v-show="!toAdd" >Add Product</button>

  </div>


  <ProductEdit :toEditData="toEditData" :toEdit="toEdit" @products="editProducts" />
  <ProductAdd :toAdd="toAdd" @products="addProducts" />



  <button class="btn btn-success" @click="fetchData" v-show="!products">fetch Data</button>
</template>

<style></style>

<script>
    export default{
        data(){
            return{
                toEdit: null,
                prod:null,

            }
        },
        props: ['products'],
        methods: {
    async fetchData() {
      const response = await fetch("http://localhost:8000/");
      this.products = await response.json();
    },
    editProducts(prod) {
      this.products = prod

    },
    toEditShow(prodId, prodName, prodCost) {
      this.$emit('toEdit',prodId, prodName, prodCost)

    },
    addProducts(prod) {
      this.toAdd = false
      this.products = prod
      this.$emit(products,this.products)


    },
    resetProducts(prod){
        this.prod = prod
        this.$emit('productsChange',prod)
    }




  }
    }
</script>



<template>
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
        <ProductRow v-for="(product) in products" :key="product.id" :product-name="product.Name"
          :product-cost="product.Cost" :product-id="product.id" @products="addProducts" @productsChange="resetProducts" @toEdit="toEditShow" />

      </tbody>
    </table>

</template>



<style>


</style>
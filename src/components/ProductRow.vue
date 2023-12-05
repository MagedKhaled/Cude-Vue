

<script>
    export default {
        props: ['productName','productCost','productId'],
    
    methods: {
        async deleteRecord() {      
        const response = await fetch(`http://localhost:8000/${this.productId}/`,{
            method:'delete'
            })

        
        this.products = await response.json();
        this.$emit('products', this.products);
      },
      async editRecord() {      
        this.$emit('toEdit', this.productId,this.productName,this.productCost)
      },

    }
}

</script>


<template>
    <tr>
        <td>{{ productName }}</td>
        <td>{{ productCost }} $</td>
        <td><button class="btn btn-danger" @click="deleteRecord" >Delete</button></td>
        <td><button class="btn btn-primary" @click="editRecord" >Edit</button></td>
    </tr>
</template>

<style></style>
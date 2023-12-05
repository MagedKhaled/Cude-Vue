

<script>

    export default {
      data(){
        return {
        name: null,
        cost: null
        }
      },
      props:['toAdd'],
      methods: {
        async addRecord(){
          if ((this.name && this.cost)){
          const response = await fetch('http://localhost:8000/',{
            method:'POST',
            headers: {
              'Content-Type': 'application/json',
              
            },            
            body: JSON.stringify({
            name: this.name,
            cost: this.cost,
          }),
          });

          this.products = await response.json();
          this.$emit('products',this.products)
         } 
        }
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
      <td><button @click="addRecord">Add</button></td>
    </tbody>
  </table>

</template>

<style></style>

<script>

    export default {
      data(){
        return {
          id: this.toEdit.id,
        name: this.toEdit.name,
        cost: this.toEdit.cost,
        }
      },
      props:['toEdit'],
      methods: {
        async editRecord(){
          const response = await fetch('http://localhost:8000/',{
            method:'PUT',
            headers: {
              'Content-Type': 'application/json',
              
            },            
            body: JSON.stringify({
              id: this.toEdit.id,
            name: this.toEdit.name,
            cost: this.toEdit.cost,
          }),
          });

          this.products = await response.json();
          this.$emit('products',this.products)
        }
      }
    }
</script>


<template>

  <table class="table" v-show="toEdit.id!=null">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Cost</th>
        <th>Confirm</th>
      </tr>
    </thead>
    <tbody>
      <td><input type="text" v-model="this.toEdit.id" name="Id" readonly></td>
      <td><input type="text" v-model="this.toEdit.name" name="Name"></td>
      <td><input type="text" v-model="this.toEdit.cost" name="Cost"></td>
      <td><button @click="editRecord">Confirm</button></td>
    </tbody>
  </table>

</template>

<style></style>
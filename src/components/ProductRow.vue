

<script setup>
    import {ref} from 'vue'
    const props = defineProps(['productName','productCost','productId'])
    const emit = defineEmits(['productsChange', 'toEdit'])



    async function deleteRecord(){
        const response = await fetch(`http://localhost:8000/${props.productId}/`,{
            method: 'delete'
        })
        emit('productsChange', await response.json() );
    }

    async function editRecord(){
        emit('toEdit',props.productId,props.productName,props.productCost)
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
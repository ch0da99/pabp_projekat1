<template>
    <tr> <input v-model="productCopy.productName" :disabled="!edit">  {{ supp }}
        <change-product v-if="edit" :product="product" :categories="categories" :suppliers="suppliers"></change-product>
        <button v-if="!edit" @click="edit=true">Change</button>
        <button @click="ProductDelete(productCopy.productId)">Delete</button></tr>
</template>
<script >
import ChangeProduct from './ChangeProduct.vue'
import {bus} from '../main'
export default {
    name:'ProductRow',
    props:{
        product:Object,
        categories: Array,
        suppliers: Array,
    },
    components:{
        ChangeProduct
    },
    data(){
        return{
            supp:"",
            productCopy:{},
            edit:false
        }
    },
    methods:{
        ProductDelete(id){
            bus.emit("delete-product", id)
        },
    },
    mounted(){
        this.productCopy=this.product
    }
}
</script>
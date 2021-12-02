<template>
    <tr> <input v-model="productCopy.productName" disabled>
        <change-product v-if="edit" :product="product" :categories="categories" :suppliers="suppliers"></change-product>
        <button @click="edit=!edit">Change</button>
        <button @click="ProductDelete(product.productId)">Delete</button></tr>
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
    },
    created(){
        bus.on('save-changes', () => {
            this.edit = false;
        })
    }
}
</script>
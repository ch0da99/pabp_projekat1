<template>
    <tr v-bind:style="[this.index % 2 == 0 ? {'background-color': '#f2fff7'}: {'background-color': '#e5e3e6'}]"> <input v-model="productCopy.productName" disabled><span class="productValue">Value: {{compProductValue}}</span>
        <change-product v-if="edit" :product="product" :categories="categories" :suppliers="suppliers"></change-product>
        <button id="btnChange" @click="edit=!edit">Change</button>
        <button id="btnDelete" @click="ProductDelete(product.productId)">Delete</button></tr>
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
        index: Number,
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
    computed:{
        compProductValue(){
            return (parseFloat(this.product.unitPrice) * parseInt(this.product.unitsInStock)).toFixed(2);
        }
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

<style scoped>
    input{
        margin: 3px 0px;
    }
    .productValue{
        display: inline-block;
        width: 200px;
        text-align: left;
        margin: 0px 3px;
    }
    #btnChange{
        color: white;
        background-color: #a8b009;
        margin-right: 5px;
    }
    #btnDelete{
        color: white;
        background-color: #f73e4a;
    }
</style>
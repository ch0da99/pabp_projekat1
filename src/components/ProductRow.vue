<template>
    <tr :style="[this.index % 2 == 0 ? {'background-color': '#f2fff7'}: {'background-color': '#e5e3e6'}]"> 
        <input v-model="productCopy.productName" disabled id="productName"><span class="productValue">Value: {{compProductValue}}</span>
        <button id="btnDetails" @click="btnDetailsClick()">Details</button>
        <button id="btnChange" @click="btnEditClick()">Change</button>
        <button id="btnDelete" @click="ProductDelete(product.productId)">Delete</button></tr>
        <product-details v-if="details" :product="product" :categories="categories" :suppliers="suppliers"></product-details>
        <change-product v-if="edit" :product="product" :categories="categories" :suppliers="suppliers"></change-product>
</template>
<script >
import ChangeProduct from './ChangeProduct.vue'
import {bus} from '../main'
import ProductDetails from './ProductDetails.vue'
export default {
    name:'ProductRow',
    props:{
        product:Object,
        categories: Array,
        suppliers: Array,
        index: Number,
    },
    components:{
        ChangeProduct,
        ProductDetails
    },
    data(){
        return{
            productCopy:{},
            edit:false,
            details:false,
        }
    },
    methods:{
        ProductDelete(id){
            bus.emit("delete-product", id)
        },
        btnDetailsClick(){
            this.details = !this.details
            if(this.details && this.edit){
                this.edit = !this.edit
            }
        },
        btnEditClick(){
            this.edit = !this.edit
            if(this.details && this.edit){
                this.details = !this.details
            }
        },
    },
    computed:{
        compProductValue(){
            return (parseFloat(this.product.unitPrice) * parseInt(this.product.unitsInStock)).toFixed(2);
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
    #productName{
        width: 400px;
    }
    #btnDetails{
        background-color: #b0fffb;
        margin-right: 5px;
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
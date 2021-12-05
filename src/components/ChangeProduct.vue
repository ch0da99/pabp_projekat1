<template>
    <div class="changeProduct">
        <h4>Change product section:</h4><br><br>
        Choose product category: <select name="" id="" v-model="productCopy.categoryId">
            <option v-for="c in categories" :key="c.categoryId" :value="c.categoryId">{{ c.categoryName }}</option>
        </select><br>
        Product name: <input type="text" v-model="productCopy.productName"><br>
        Choose supplier: <select name="" id="" v-model="productCopy.supplierId">
            <option v-for="c in suppliers" :key="c.supplierId" :value="c.supplierId">{{ c.companyName }}</option>
        </select><br>
        Quantity per unit: <input type="text" v-model="productCopy.quantityPerUnit"><br>
        Unit price: <input type="number" v-model="productCopy.unitPrice" min="1" @input="unitPriceCheck()"><br>
        Units in stock: <input type="number" v-model="productCopy.unitsInStock" min="0" @input="unitsInStockCheck()"><br>
        Units on order: <input type="number" v-model="productCopy.unitsOnOrder" min="0" @input="unitsOnOrderCheck()"><br>
        Reorder level: <input type="number" v-model="productCopy.reorderLevel" min="0" @input="reorderLevelCheck()"><br>
        Discontinued: <input type="checkbox" v-model="productCopy.discontinued"><br>
        <button @click="SaveChanges(productCopy)">Save changes</button>
    </div>
</template>
<script >
import {bus} from "../main"
export default {
    name:'ChangeProduct',
    props:{
        product:Object,
        categories: Array,
        suppliers: Array,
    },
    data(){
        return{
            productCopy:{}
        }
    },
    methods:{
        SaveChanges(product){
            if(isNaN(product.categoryId) || isNaN(product.supplierId) || product.productName == ""){
                alert("Izbrisali ste neophodne podatke! Obavezno je uneti kategoriju, naziv i dobavljaca!")
            }else{
                bus.emit('save-changes', product)
            }
        },
        unitPriceCheck(){
        if(this.productCopy.unitPrice < 1){
            this.productCopy.unitPrice = 1;
            }
        },
        unitsInStockCheck(){
        if(this.productCopy.unitsInStock < 0){
            this.productCopy.unitsInStock = 0;
            }
        },
        unitsOnOrderCheck(){
        if(this.productCopy.unitsOnOrder < 0){
            this.productCopy.unitsOnOrder = 0;
            }
        },
        reorderLevelCheck(){
        if(this.productCopy.reorderLevel < 0){
            this.productCopy.reorderLevel = 0;
            }
        },
    },
    mounted(){
        this.productCopy = this.product
    }
    
}
</script>

<style scoped>
.changeProduct{
    border: 3px solid yellowgreen;
    padding: 5px;
    width: 450px;
    margin: auto; 
}
</style>
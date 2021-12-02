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
        Unit price: <input type="number" v-model="productCopy.unitPrice"><br>
        Units in stock: <input type="number" v-model="productCopy.unitsInStock"><br>
        Units on order: <input type="number" v-model="productCopy.unitsOnOrder"><br>
        Reorder level: <input type="number" v-model="productCopy.reorderLevel"><br>
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
            bus.emit('save-changes', product)
        }
    },
    mounted(){
        this.productCopy = this.product
    }
    
}
</script>

<style scoped>
.changeProduct{
    border: 1px solid yellow;
}
</style>
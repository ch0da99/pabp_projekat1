<template>
    <div class="noviProizvod">
        <h4>Add new product section:</h4><br><br>
        Choose product category: <select name="" id="" v-model="newProduct.categoryId">
            <option v-for="c in categories" :key="c.categoryId" :value="c.categoryId">{{ c.categoryName }}</option>
        </select><br>
        Product name: <input type="text" v-model="newProduct.productName"><br>
        Choose supplier: <select name="" id="" v-model="newProduct.supplierId">
            <option v-for="c in suppliers" :key="c.supplierId" :value="c.supplierId">{{ c.companyName }}</option>
        </select><br>
        Quantity per unit: <input type="text" v-model="newProduct.quantityPerUnit"><br>
        Unit price: <input type="number" v-model="newProduct.unitPrice"><br>
        Units in stock: <input type="number" v-model="newProduct.unitsInStock"><br>
        Units on order: <input type="number" v-model="newProduct.unitsOnOrder"><br>
        Reorder level: <input type="number" v-model="newProduct.reorderLevel"><br>
        Discontinued: <input type="checkbox" v-model="newProduct.discontinued">
        <br><button @click="AddProduct()">Add</button>
    </div>
</template>

<script>
import {bus} from '../main'
export default {
  name: 'AddProduct',
  props: {
    productsProp: Array,
    categories: Array,
    suppliers: Array,
  },
  data(){
    return{
      newProduct:{},
    }
  },
  methods:{
    AddProduct(){
      bus.emit('add-product', this.newProduct)
      this.newProduct = {}
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.noviProizvod{
  border: 1px solid limegreen;
  padding-bottom: 3px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

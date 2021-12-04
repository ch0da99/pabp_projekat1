<template>
    <table >
        <ProductRow v-for="(p,i) in productsProp" :key="p.productId"
         :product="p" :categories="categories" :suppliers="suppliers" :index="i"/>
         <add-product v-if="addProductSwitch" :categories="categories" :suppliers="suppliers" class="noviProizvod"></add-product>
    </table>
    <button id="btnAddNewProduct" @click="addProductSwitch=!addProductSwitch">Add new product</button>
</template>

<script>
import ProductRow from './ProductRow'
import AddProduct from './AddProduct'
import {bus} from '../main'
export default {
  name: 'ProductsTable',
  components:{
    ProductRow,
    AddProduct,
  },
  props: {
    productsProp: Array,
    categories: Array,
    suppliers: Array,
  },
  data(){
    return{
      addProductSwitch:false,
    }
  },
  created(){
    bus.on('add-product', () =>{
      this.addProductSwitch = false;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table{
  margin: 20px 0px;
  width: 100%;
}
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
#btnAddNewProduct{
  color: white;
  background-color: #008bad;
  width: 150px;
  height: 30px;
}
</style>

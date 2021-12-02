<template>
    <table>
        <ProductRow v-for="p in productsProp" :key="p.productId"
         :product="p" :categories="categories" :suppliers="suppliers"/>
         <!-- <select name="" id="">
             <option v-for="p in PageNumber" :key="p" :value="p">{{p+1}}</option>
         </select> -->
         <add-product v-if="addProductSwitch" :categories="categories" :suppliers="suppliers" class="noviProizvod"></add-product>
         <button @click="addProductSwitch=!addProductSwitch">Add new product</button>
    </table>
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

<template>
    <table>
        <ProductRow v-for="p in products" :key="p.productId"
         :product="p" @productDeleteEvent="onProductDelete" />
         <!-- <select name="" id="">
             <option v-for="p in PageNumber" :key="p" :value="p">{{p+1}}</option>
         </select> -->
         <div v-if="addProductSwitch">
             <input type="text" v-model="newProduct.productName">
             <button @click="AddProduct()">Dodaj</button>
         </div>
         <button @click="addProductSwitch=!addProductSwitch">Add product</button>
    </table>
</template>

<script>
import axios from 'axios'
import ProductRow from './ProductRow'
export default {
  name: 'ProductsTable',
  components:{
    ProductRow
  },
  props: {
    productsProp: Array,
  },
  data(){
    return{
      products: this.productsProp,
      addProductSwitch:false,
    }
  },
  methods:{
    AddProduct(){
        axios
        .post(`http://94.156.189.137:8000/api/Products`,this.newProduct)
        .then(response=>{
            
            console.log(response)
            this.newProduct.productId=response.data.productId
            this.products.push(this.newProduct)
            this.newProduct={}

        })
        .catch(err=>{
            console.log(err)
            // alert(`Greska:${err}`)
        })
    },
    onProductDelete(){
        this.GetProducts()
    },
    GetProductsOfCategory(){
        axios
        .get(`http://94.156.189.137:8000/api/Products`)
        .then(response=>{
            this.products=response.data
            // this.products.forEach(p=>{
            //     DohvatiSupp(p.id)
            // })
            console.log(this.products)
        })
        .catch(err=>{
            console.log(err)
            // alert(`Greska:${err}`)
        })
    }
  },
  mounted(){
    console.log(this.productsOfCategory)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

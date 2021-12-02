<template>
  Kategorija: <select name="" id="" @change="GetProductsOfCategory(categories.filter(c => c.categoryId == selectedCategory)[0].categoryId)" v-model="selectedCategory">
    <option v-for="c in categories" :key="c.categoryId" :value="c.categoryId">{{ c.categoryName }}</option>
  </select>
  <ProductsTable :productsProp="compProducts" :categories="categories" :suppliers="suppliers" />
</template>

<script>
import axios from 'axios'
import ProductsTable from './components/ProductsTable.vue'
import {bus} from "./main"
export default {
  name: 'App',
  components:{
    ProductsTable
  },
  data(){
    return{
      categories:[],
      suppliers:[],
      products:[],
      selectedCategory:"start value"
    }
  },
  methods:{
    GetAllCategories(){
      axios
      .get("http://94.156.189.137:8000/api/categories")
      .then(response=>{
        this.categories = []
        this.categories = response.data
      })
      .catch(err=>{
        console.log(err)
      })
    },
    GetAllSuppliers(){
      axios
      .get("http://94.156.189.137:8000/api/suppliers")
      .then(response=>{
        this.suppliers = []
        this.suppliers = response.data
      })
      .catch(err=>{
        console.log(err)
      })
    },
    GetProductsOfCategory(id){
      axios
      .get("http://94.156.189.137:8000/api/products")
      .then(response => {
        this.products = []
        this.products = response.data.filter(data => data.categoryId == id)
      })
      .catch(err => {
        console.log(err)
      })
    },
  },
  computed:{
    compProducts(){
      return this.products
    },
    compSelectedCategory(){
      return this.selectedCategory
    }
  },
  mounted(){
    this.GetAllCategories()
    this.GetAllSuppliers()
  },
  created(){
    bus.on('save-changes', (product) => {
      axios
      .put(`http://94.156.189.137:8000/api/Products/${product.productId}`,product)
      .then(response=>{
          console.log(response)
          alert('Product changed successfuly!')
      })
      .catch(err=>{
          console.log(err)
      })
    })
    bus.on('delete-product', (id) =>{
      axios
      .delete(`http://94.156.189.137:8000/api/Products/${id}`)
      .then(response=>{
          console.log(response)
          this.GetProductsOfCategory(this.products.filter(p => p.productId == id)[0].categoryId)
          alert('Product deleted successfuly!')
      })
      .catch(err=>{
          console.log(err)
      })
    })
    bus.on('add-product', (product) =>{
      axios
      .post(`http://94.156.189.137:8000/api/Products`,product)
      .then(response=>{
          console.log(response)
          if(product.categoryId == this.compSelectedCategory){
            this.GetProductsOfCategory(product.categoryId)
          }
          alert('Product added successfuly!')
      })
      .catch(err=>{
          console.log(err)
      })
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

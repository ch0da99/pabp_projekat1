<template>
  Kategorija: <select name="" id="" @change="GetProductsOfCategory(categories.filter(c => c.categoryId == selectedCategory)[0].categoryId)" v-model="selectedCategory">
    <option v-for="c in categories" :key="c.categoryId" :value="c.categoryId">{{ c.categoryName }}</option>
  </select>
  <ProductsTable :productsProp="compProducts" />
</template>

<script>
import axios from 'axios'
import ProductsTable from './components/ProductsTable.vue'
export default {
  name: 'App',
  components:{
    ProductsTable
  },
  data(){
    return{
      categories:[],
      products:[{productName:'asd'},{productName:'asdasda'}],
      selectedCategory:""
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
    }
  },
  computed:{
    compProducts(){
      return this.products
    }
  },
  mounted(){
    this.GetAllCategories()
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

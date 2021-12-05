<template>
    <div class="changeProduct">
        <h4>Product details section:</h4><br><br><hr>
        Product name: <b>{{ product.productName }}</b><hr>
        Product category: <b>{{ categories.filter(c => c.categoryId == product.categoryId)[0].categoryName }}</b><hr>
        Supplier: <b>{{ suppliers.filter(c => c.supplierId == product.supplierId)[0].companyName }}</b><hr>
        Quantity per unit: <b>{{ product.quantityPerUnit }}</b><hr>
        Unit price: <b>{{ product.unitPrice }}</b><hr>
        Units in stock: <b>{{ product.unitsInStock }}</b><hr>
        Units on order: <b>{{ product.unitsOnOrder }}</b><hr>
        Reorder level: <b>{{ product.reorderLevel }}</b><hr>
        Discontinued: <b>{{ product.discontinued }}</b><hr>
    </div>
</template>
<script >
export default {
    name:'ProductDetails',
    props:{
        product:Object,
        categories: Array,
        suppliers: Array,
    },
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
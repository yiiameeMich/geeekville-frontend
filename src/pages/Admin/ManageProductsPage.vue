<template>
<div class="manage-products">
  <div class="container">
    <div class="manage-products__content">
      <div v-for="(product, idx) in products" :key="idx" class="product" style="background-color: var(--light);">
        <h1 style="color: var(--dark)">{{ product.name }}</h1>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "ManageProductsPage",
  data: () => {
    return {
      products: [],
    }
  },
  mounted() {
    axios.get(`http://localhost:3000/products/all-products`)
        .then(res => {
          this.products = res.data
          console.log(this.products)
        })
        .catch(err => {
            console.log(err)
        })
  },
}
</script>

<style scoped>

</style>
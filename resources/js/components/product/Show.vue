<template>
  <div class="row mt-3 ">
    <div class="d-flex flex-row justify-content-around">
      <div class="col-md-6">
        <img :src="`/storage/${product.image}`" alt="product" class="img-fluid"/>
      </div>
      <div class="col-md-5" v-if="product">
        <h6 class="mb-2 text-muted">
          <span class="me-2" v-for="cat in product.categories" :key="cat.id">{{ cat.name }}
          </span>
        </h6>
        <h4 class="h4">{{ product.name }}</h4>
        <p class="text-justify">{{ product.description }}</p>

        <div class="d-flex justify-content-between align-items-center">
          <div class="text-success">
            <h5 class="mt-4">{{ formatCurrency(product.price) }}</h5>
          </div>
          <button class="btn btn-success" @click="$store.commit('addToCart', product)">Ajouter au panier</button>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      formatCurrency(amount){
        amount= amount/100;
        return amount.toLocaleString("en-us", { style: "currency", currency: "USD" });
      }

    },
    computed: {
      products() {
        return this.$store.state.products;
      },
      product(){
        return this.products.find(product=> product.slug === this.$route.params.slug)
      }
    }
  }
</script>
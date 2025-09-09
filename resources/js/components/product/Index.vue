<template>
  <div>
    <div class="row mt-3" v-if="products.length">
      <div class="col-md-4" v-for="product in products" :key="product.id">
        <div class="card mb-3">
          <div class="card-body">
            <router-link :to="{ name: 'product.show', params: { slug: product.slug } }">
              <img :src="`/storage/${product.image}`" alt="product" class="img-fluid"/>
            </router-link>
            <h4 class="card-title">{{ product.name }}</h4>
            <h6 class="card-subtitle mb-2 text-muted">
              <span class="me-2" v-for="cat in product.categories" :key="cat.id">{{ cat.name }}</span>
            </h6>
            <div class="d-flex justify-content-between align-items-center">
              <div class="text-success">
                <h5 class="mt-4">{{ formatCurrency(product.price) }}</h5>
              </div>
              <button class="btn btn-success" @click="$store.commit('addToCart', product)">Ajouter au panier</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-else>
      loading...
    </div>
  </div>

</template>

<script>
export default {
  methods: {
    formatCurrency(amount) {
      amount = amount / 100;
      return amount.toLocaleString("en-us", { style: "currency", currency: "USD" });
    }

  },
  computed: {
    products() {
      return this.$store.state.products;
    }


  }
}
</script>

<template>
  <div class="checkout">
    <div class="row d-flex justify-content-center">
      <div class="col-md-6 mt-5">
        <h4 class="text-muted small" v-text="'Transaction ID: ' + order.transaction_id"></h4>
        <h2 class="text-muted">Merci pour votre achat</h2>
        <table class="table">
          <thead>
            <tr class="table-success">
              <th scope="col">Article</th>
              <th scope="col">Quantité</th>
              <th scope="col">Prix</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in order.products" :key="item.id">
              <td class="p-4">{{ item.name }}</td>
              <td class="p-4">{{ item.pivot.quantity }}</td>
              <td class="p-4">{{ itemTotalPrice(item) }}</td>
            </tr>
            <tr>
              <td class="p-4 fw-bold">Total</td>
              <td class="p-4 fw-bold">{{ orderQuantity }}</td>
              <td class="p-4 fw-bold">{{ orderTotal }}</td>
              <td class="w-10 text-right"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    itemTotalPrice(item) {
      let amount = item.price * Number(item.pivot.quantity);
      amount = amount / 100;
      return amount.toLocaleString("en-us", { style: "currency", currency: "USD" });
    }
  },
  computed: {
    order() {
      return this.$store.state.order;
    },
    orderQuantity() {
      return this.$store.state.order.products.reduce((acc, item) => acc + Number(item.pivot.quantity), 0);
    },
    orderTotal() {
      let amount = this.$store.state.order.products.reduce((acc, item) => acc + item.price * Number(item.pivot.quantity), 0);
      amount = amount / 100;
      return amount.toLocaleString("en-us", { style: "currency", currency: "USD" });
    }
  }
};
</script>

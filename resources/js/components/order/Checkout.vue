<template>
  <div class="checkout">
    <div class="row d-flex justify-content-center">
      <div class="col-md-8 mt-5">
        <table class="table">
          <thead>
            <tr class="table-success">
              <th scope="col">Article</th>
              <th scope="col">Quantité</th>
              <th scope="col">Prix</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cart" :key="item.id">
              <td class="p-4">{{ item.name }}</td>
              <td class="p-4">{{ item.quantity }}</td>
              <td class="p-4">{{ itemTotalPrice(item) }}</td>
              <td class="p-4 text-right">
                <button class="btn btn-danger" @click="$store.commit('removeFromCart', index)">Retirer</button>
              </td>
            </tr>
            <tr>
              <td class="p-4 fw-bold">Total</td>
              <td class="p-4 fw-bold">{{ cartQuantity }}</td>
              <td class="p-4 fw-bold">{{ cartPrice }}</td>
              <td class="w-10 text-right"></td>
            </tr>
          </tbody>
        </table>

      </div>
      <div class="col-md-8 mt-5">
        <div class="row">
          <div class="col-md-6 form-group">
            <label for="first_name">Prénom</label>
            <input type="text" name="first_name" class="form-control" v-model="user.first_name"
              :disabled="paymentProcessing">
          </div>
          <div class="col-md-6 form-group">
            <label for="last_name">Nom</label>
            <input type="text" name="last_name" class="form-control" v-model="user.last_name"
              :disabled="paymentProcessing">
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <label for="email">Email</label>
            <input type="email" name="email" class="form-control" v-model="user.email" :disabled="paymentProcessing">
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <label for="address">Adresse</label>
            <input type="text" name="address" class="form-control" v-model="user.address" :disabled="paymentProcessing">
          </div>
          <div class="col-md-4">
            <label for="city">Ville</label>
            <input type="text" name="city" class="form-control" v-model="user.city" :disabled="paymentProcessing">
          </div>
          <div class="col-md-2">
            <label for="state">Region</label>
            <input type="text" name="state" class="form-control" v-model="user.state" :disabled="paymentProcessing">
          </div>
          <div class="col-md-2">
            <label for="zip_code">Code postal</label>
            <input type="text" name="zip_code" class="form-control" v-model="user.zip_code"
              :disabled="paymentProcessing">
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 form-group">
            <label for="card_element">Coordonnées de la carte</label>
            <div id="card_element"></div>
          </div>
        </div>
        <div class="text-center">
          <button class="btn btn-success ps-5 pe-5 mt-3" @click="processPayment">{{ paymentProcessing ? 'Traitement' :
            "Payer maintenant" }}</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { loadStripe } from '@stripe/stripe-js';

import axios from 'axios';
export default {
  data() {
    return {
      stripe: {

      },
      cardElement: {

      }
      ,
      user: {
        first_name: "",
        last_name: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip_code: ""
      },
      paymentProcessing: false
    }
  },

  async mounted() {
    this.stripe = await loadStripe('pk_test_51PBJDMP6KsQORzCLPbBamtq7G4bjHfMMUTtOUK9BkAJ8IoOzMVQgn2vIlgyeZZQLRt2lq0kh5Kedtn1d2unETSaC00bFLrYX8c');
    const elements = this.stripe.elements();
    this.cardElement = elements.create("card", {
      classes: {
        base: "form-control"
      }
    });
    this.cardElement.mount('#card_element');
  },

  methods: {
    itemTotalPrice(item) {
      let amount = item.price * item.quantity;
      amount = amount / 100;
      return amount.toLocaleString("en-us", { style: "currency", currency: "USD" });
    },
    async processPayment() {
      this.paymentProcessing = true;
      const { paymentMethod, error } = await this.stripe.createPaymentMethod(
        "card",
        this.cardElement,
        {
          billing_details: {
            name: this.user.first_name + " " + this.user.last_name,
            email: this.user.email,
            address: {
              line1: this.user.address,
              city: this.user.city,
              state: this.user.state,
              postal_code: this.user.zip_code
            }
          }
        },
        { return_url: { name: "order.summary" } }
      );
      if (error){
        this.paymentProcessing = false;
        console.log(error);
      }
      else{
        console.log(paymentMethod);
        this.user.payment_method_id = paymentMethod.id;
        this.user.amount = this.$store.state.cart.reduce(
          (acc , item)=> acc + item.price * item.quantity,
        0
        );
        this.user.cart = JSON.stringify(this.$store.state.cart);

        axios.post("api/checkout", this.user)
        .then(response => {
          this.paymentProcessing = false;
          console.log(response);
          this.$store.commit("setOrder", response.data);
          this.$store.dispatch("clearCart");
          this.$router.push({name: "order.summary"});
        })
        .catch(error =>{
          this.paymentProcessing = false;
          console.log(error);
        })
      }
    }
  },

  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartQuantity() {
      return this.$store.state.cart.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
    },
    cartPrice() {
      let amount = this.$store.state.cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      amount = amount / 100;
      return amount.toLocaleString("en-us", { style: "currency", currency: "USD" });

    }

  }
}
</script>
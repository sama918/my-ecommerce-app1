
import { createStore } from 'vuex'; 
import axios from 'axios';



export default createStore({
  state:{
    products:[],
    cart:[],
    order:{}
  },
  mutations:{
    setProducts(state, products){
      state.products= products;
    },
    addToCart(state,product){
      let checkProductInCart = state.cart.findIndex(item => item.id === product.id);
      if(checkProductInCart != -1){
        state.cart[checkProductInCart].quantity++;
        return ;
      }
      product.quantity = 1 ;
      state.cart.push(product);  
    },
    removeFromCart(state,index){
      state.cart.splice(index,1);
    },
    setCart(state, cart){
      state.cart= cart 
    },
    setOrder(state,order){
      state.order = order ;
    }
  },
  actions: {
    getProducts({ commit }){
      axios.get('/api/products')
      .then(response => {
        commit('setProducts' , response.data);
      })
      .catch( error=> {
        console.log(error);
      });
    },
    clearCart({ commit }){
      commit('setCart', []);
    }
  }
})


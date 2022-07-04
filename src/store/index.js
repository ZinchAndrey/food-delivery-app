import { createStore } from 'vuex';

import ProductsModule from './products.js';

const store = createStore({
  modules: {
    products: ProductsModule,
  },
  state() {
    return {
      userCart: [],
    }
  },
  getters: {
    userCart(state) {
      return state.userCart;
    }
  },
  mutations: {
    addProductToCart(state, product) {
      state.userCart.push(product);
    }
  }
});

export default store;
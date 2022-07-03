<template>
  <user-cart></user-cart>
  <base-container>
    <section class="products">
      <h2 class="products__caption">Popular dishes</h2>
      <products-filter @change-filter="changeFilter"></products-filter>
      <products-list :current-filter="currentFilter" @add-to-cart="addToCart"></products-list>
    </section>
  </base-container>
</template>

<script>
import ProductsFilter from "./ProductsFilter.vue";
import ProductsList from "./ProductsList.vue";
import UserCart from "../cart/UserCart.vue";

export default {
  components: {
    ProductsFilter,
    ProductsList,
    UserCart,
  },
  data() {
    return {
      currentFilter: "pizza",
    };
  },
  methods: {
    changeFilter(newFilter) {
      this.currentFilter = newFilter;
    },
    addToCart(product) {
      console.log(product);
    }
  },
};
</script>

<style scoped>
.products__caption {
  font-size: 48px;
  line-height: 59px;
  margin: 0 auto 50px;
}
</style>
<template>
  <div v-if="!!filteredProducts.length">
    <ul class="products">
      <li
        class="products__item"
        v-for="product in filteredProducts"
        :key="product.key"
      >
        <product-item :product="product"></product-item>
      </li>
    </ul>
    <product-more-button></product-more-button>
  </div>

  <div class="error" v-else>
    <h2 class="error__caption">Увы... <br> Таких продуктов нет в наличии</h2>
    <p class="error__text">Попробуйте выбрать другой фильтр</p>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
import ProductMoreButton from "./ProductMoreButton.vue";

export default {
  components: {
    ProductItem,
    ProductMoreButton
  },
  props: ["currentFilter"],
  data() {
    return {
      products: this.$store.getters.products,
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(
        (product) => product.category === this.currentFilter
      );
    },
  },
};
</script>

<style scoped>
.products {
  list-style: none;
  padding: 0;
  margin: 0;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.error {
  text-align: center;
}
.error__caption {
  font-size: 40px;
  line-height: 59px;
  font-weight: 700;
  margin: 0 0 30px;
}
.error__text {
  font-size: 18px;
  line-height: 140%;
  margin: 0;
}
</style>
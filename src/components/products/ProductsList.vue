<template>
  <transition mode="out-in" name="slide-no-delay">
    <div v-if="!!filteredProducts.length">
      <transition-group class="products" name="slide" tag="ul" mode="out-in">
        <li
          class="products__item"
          v-for="product in filteredProducts"
          :key="product.id"
        >
          <product-item :product="product"></product-item>
        </li>
      </transition-group>
      <product-more-button></product-more-button>
    </div>
    <div class="error" v-else>
      <h2 class="error__caption">
        Увы... <br />
        Таких продуктов нет в наличии
      </h2>
      <p class="error__text">Попробуйте выбрать другой фильтр</p>
    </div>
  </transition>
</template>

<script>
import ProductItem from "./ProductItem.vue";
import ProductMoreButton from "./ProductMoreButton.vue";
import products from "../../store/products.js";

export default {
  components: {
    ProductItem,
    ProductMoreButton,
  },
  props: ["currentFilter"],
  data() {
    return {
      products: products,
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
  grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
  gap: 10px 40px;
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

/* ANIMATION */

/* SLIDE */
.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: translateX(0);
  position: relative;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(1500px);
}

.slide-leave-to {
  opacity: 1;
  transform: translateX(-1500px);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-in;
}

.slide-enter-active {
  transition-delay: 0.3s;
}

/* SLIDE-NO-DELAY */
.slide-no-delay-enter-to,
.slide-no-delay-leave-from {
  opacity: 1;
  transform: translateX(0);
  position: relative;
}

.slide-no-delay-enter-from {
  opacity: 0;
  transform: translateX(1500px);
}

.slide-no-delay-leave-to {
  opacity: 1;
  transform: translateX(-1500px);
}

.slide-no-delay-enter-active,
.slide-no-delay-leave-active {
  transition: all 0.3s ease-in;
}

/* FADE */
/* .fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in;
} */
</style>
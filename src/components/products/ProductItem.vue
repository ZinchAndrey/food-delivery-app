<template>
  <div class="product">
    <!-- <img class="product__image" src="../../assets/products/pizza/image26-1.jpg" :alt="product.title"/> -->
    <img class="product__image" :src="require(`@/${product.img}`)" :alt="product.title"/>
    <div class="product__info">
      <h3 class="product__title">{{ product.title }}</h3>
      <span class="prosuct__size">{{ product.size}}</span>
    </div>
    <p class="product__description">
      {{ product.description }}
    </p>
    <div class="product__price">{{ product.price }} руб.</div>
    <span class="product__plate" v-if="product.hit"> Хит </span>
    <button class="product__add-to-cart" type="button" @click="addToCart"></button>
  </div>
</template>

<script>
const CART_CLICK_ANIMATION_TIMEOUT = 1000;

export default {
  props: ['product'],
  emits: ['add-to-cart'],
  // inject: ['addProductToCart'],
  methods: {
    addToCart(evt) {
      // const productId = evt.target.dataset.id;
      this.$emit('add-to-cart', this.product);
      this.addProductToCart(this.product);

      evt.target.classList.add('product__add-to-cart--active');
      setTimeout(() => {
        evt.target.classList.remove('product__add-to-cart--active');
      }, CART_CLICK_ANIMATION_TIMEOUT)
    }
  }
};
</script>

<style scoped>
.product {
  width: 260px;
  min-height: 415px;
  padding: 36px 15px 8px 25px;
  position: relative;

  /* border: 4px solid #eceef7;
  border-radius: 10px; */

  background: url('../../assets/products/pizza/product-bg.svg') no-repeat top center / 100% 100%;

  margin: 0 auto;
}
.product__image {
  display: block;
  width: 170px;
  height: auto;
  margin: 0 auto 30px;
}
.product__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto 8px;
}
.product__title {
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  margin: 0;
}
.prosuct__size {
  font-size: 12px;
  line-height: 140%;
}
.product__description {
  font-size: 12px;
  line-height: 140%;
  text-align: left;
  margin: 0 auto 19px;
}
.product__price {
  font-weight: 300;
  font-size: 24px;
  line-height: 140%;
  text-align: center;
  color: #121146;
  margin: 0 auto 18px;
}
.product__plate {
  font-weight: 600;
  font-size: 12px;
  line-height: 140%;
  text-align: center;
  color: #ffffff;
  padding: 4px;

  background: linear-gradient(116.88deg, #fe3326 -4.28%, #f26e0e 112.69%),
    #59aaf1;
  box-shadow: 0px 4px 8px rgba(205, 71, 41, 0.26);
  border-radius: 3px;

  width: 60px;
  display: block;
  position: absolute;
  top: 20px;
  left: 20px;
}

.product__add-to-cart {
  display: block;
  width: 33px;
  height: 33px;
  margin: 0 auto;
  border-radius: 50%;
  border: 2px solid #eceef6;
  background: url("../../assets/products/pizza/cart-icon.svg") no-repeat top 6px center;
  cursor: pointer;
  transition: all ease-in 0.1s;

  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.product__add-to-cart:not(.product__add-to-cart--active):hover {
  background: #F58656 url("../../assets/products/pizza/cart-icon-hover.svg") no-repeat top 6px center;
  box-shadow: 0px 4px 8px rgba(205, 71, 41, 0.26);
  border-color: #F58656;
}
.product__add-to-cart--active {
  background: rgb(39 208 66) url("../../assets/products/pizza/cart-icon-hover.svg") no-repeat top 6px center;
  box-shadow: 0px 4px 8px rgba(39, 208, 66, 0.26);
  border-color: rgb(39 208 66);
  transform: translateX(-50%) scale(1.1);
}
</style>
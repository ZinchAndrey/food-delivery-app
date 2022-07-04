<template>
  <section class="cart">
    <a href="#" class="cart__link">
      <span :class="cartCounterClasses">{{ amountOfProducts }}</span>
      <div class="cart__tooltip">=&nbsp;{{ cartSum }}&nbsp;₽</div>
    </a>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userCart: this.$store.getters.userCart,
      newProductWasAdded: false,
    };
  },
  computed: {
    amountOfProducts() {
      return this.userCart.length;
    },
    cartSum() {
      const sum = this.userCart.reduce((sum, currentProduct) => {
        return sum + parseInt(currentProduct.price);
      }, 0);
      return sum.toLocaleString();
    },
    cartCounterClasses() {
      return {
        'cart__counter': true,
        'cart__counter--active': this.newProductWasAdded,
      };
    },
  },
  watch: {
    amountOfProducts() {
      const ANIMATION_DELAY = 1000;
      this.newProductWasAdded = true;

      setTimeout(() => {
      this.newProductWasAdded = false;
      }, ANIMATION_DELAY)
    },
  },
};
</script>

<style scoped>
.cart {
  position: sticky;
  top: 20px;
  right: calc(50% - 740px);
  z-index: 2;

  width: fit-content;
  margin: 0 0 0 auto;
}

.cart__link {
  position: relative;
  display: block;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid #eceef6;
  background: #ffffff url("../../assets/cart/cart-icon.svg") no-repeat center /
    35px auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin: 0 20px 0 auto;
}

.cart__link:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.cart__counter {
  font-size: 16px;
  font-weight: 700;
  line-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background-color: #fb6939;
  /* display: inline-block; */
  width: 30px;
  height: 30px;
  border-radius: 50%;

  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(40%, 40%);

  transition: all 0.1s ease-in;
}

.cart__counter--active {
  background-color: #21a736;
  transform: translate(40%, 40%) scale(1.15);
}

.cart__tooltip {
  display: none;
  font-size: 18px;
  line-height: 120%;
  font-weight: 700;

  color: #ffffff;
  padding: 10px 15px;

  border-radius: 5px;
  background: #3f3f3f;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(calc(-100% - 20px), -50%);
}

.cart__link:hover .cart__tooltip {
  display: block;
}

.cart__tooltip::after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translate(100%, -50%);
  right: 2px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 12px 0 12px 12px;
  border-color: transparent transparent transparent #3f3f3f;
}
</style>
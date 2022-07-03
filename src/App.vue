<template>
  <the-header></the-header>
  <promo-block></promo-block>
  <products-block></products-block>
  <instagram-block></instagram-block>
  <callback-form></callback-form>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/layout/header/TheHeader.vue";
import PromoBlock from "./components/promo/PromoBlock.vue";
import ProductsBlock from "./components/products/ProductsBlock.vue";
import InstagramBlock from "./components/instagram/InstagramBlock.vue";
import CallbackForm from "./components/callbackForm/CallbackForm.vue";
import TheFooter from "./components/layout/footer/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    PromoBlock,
    ProductsBlock,
    InstagramBlock,
    CallbackForm,
    TheFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
}

.visually-hidden:not(:focus):not(:active),
input[type="checkbox"].visually-hidden,
input[type="radio"].visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  /* // -webkit-clip-path: inset(100%); */
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

body {
  font-family: "Montserrat", "Arial", sans-serif;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  color: #000000;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
}
</style>

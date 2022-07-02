<template>
  <section class="promo">
    <h2 class="promo__caption">Food delivery in Kovel</h2>
    <p class="promo__text">
      If you decide to relax or have unexpected guests, call us. We make sure
      that your vacation is comfortable, enjoyable and delicious
    </p>
    <!-- <img class="promo__image" src="../../assets/promo/pizza-slice.png" alt=""> -->
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.promo {
  position: relative;
  padding: 20px 20px 508px;
  text-align: center;

  background: #f0f5fb url("../../assets/promo/promo-block-bg.png") no-repeat top left;
}

.promo__caption {
  font-size: 48px;
  line-height: 59px;

  margin: 0 auto 18px;
}
.promo__text {
  font-size: 18px;
  line-height: 140%;
  margin: 0 auto;

  max-width: 620px;
}

.promo__image {
  display: block;
  position: absolute;


  bottom: -105px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
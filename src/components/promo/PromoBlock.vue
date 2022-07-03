<template>
  <section class="promo-wrapper">
    <div class="promo">
      <h2 class="promo__caption">Food delivery in Kovel</h2>
      <p class="promo__text">
        If you decide to relax or have unexpected guests, call us. We make sure
        that your vacation is comfortable, enjoyable and delicious
      </p>
    </div>
    <!-- <img class="promo__image" src="../../assets/promo/pizza-slice.png" alt=""> -->
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.promo-wrapper {
  position: relative;
  padding-bottom: 131px;
  background-color: #fff;
}
.promo {
  position: relative;
  padding: 20px 20px 486px;
  text-align: center;

  background: url("../../assets/promo/promo-block-bg-right.png") no-repeat top
      73px right,
    #f0f5fb url("../../assets/promo/promo-block-bg-left.png") no-repeat top left;
}

.promo-wrapper::before {
  content: "";
  position: absolute;
  width: 60px;
  height: 100px;
  background: url("../../assets/promo/shrimp.svg") no-repeat center;
  right: 60px;
  top: -90px;
  z-index: 1;
}
.promo-wrapper::after {
  content: "";
  position: absolute;
  width: 846px;
  height: 590px;
  background: url("../../assets/promo/pizza-slice.png") no-repeat bottom center;
  left: 50%;
  bottom: 0;
  transform: translateX(calc(-50% + 105px));
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
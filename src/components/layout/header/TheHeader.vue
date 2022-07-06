<template>
  <header>
    <base-container>
      <nav class="navigation">
        <ul class="navigation__list">
          <li class="navigation__item">
            <nav-button to="/payment">Payment</nav-button>
          </li>
          <li class="navigation__item">
            <nav-button to="/about">About Us</nav-button>
          </li>
          <li class="navigation__item">
            <nav-button to="/contacts">Contacts</nav-button>
          </li>
        </ul>
        <a href="" class="navigation__logo logo">
          <img
            class="logo__image"
            src="../../../assets/header/logo.png"
            alt="Сеть ресторанов Classic."
          />
        </a>
        <div class="navigation__info info">
          <span class="info__item info__item--wh">Daily 11am - 9pm</span>
          <a class="info__item info__item--tel" href="tel:8800330898"
            >8 800 33 08 98</a
          >
        </div>
      </nav>
    </base-container>
  </header>
</template>

<script>
import NavButton from "./NavButton.vue";
export default {
  components: {
    NavButton,
  },
};
</script>

<style scoped>
header {
  width: 100%;
  background: #F0F5FB;
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 26px;
}

.navigation__list {
  display: flex;
  list-style: none;
  padding: 0;
}

.logo {
  transition: all ease-in 0.1s;
}

.logo:hover {
  transform: scale(1.05);
}

.logo__image {
  display: block;
  width: 112px;
  height: auto;
}

.info {
  display: flex;
  align-items: center;
}

.info__item {
  text-decoration: none;
  color: inherit;
}

.info__item--wh {
  position: relative;
  margin-right: 40px;
  padding-left: 13px;
}

.info__item--wh::before {
  content: "";
  display: block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #46cb72;

  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.info__item--tel {
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;

  padding: 5px 5px 5px 50px;

  position: relative;
  transition: all ease-in 0.3s;
}

.info__item--tel::before {
  content: "";
  display: block;
  width: 33px;
  height: 33px;
  border-radius: 50%;

  background: url("../../../assets/header/phone-icon.svg") no-repeat center;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);

  box-shadow: 0px 4px 8px rgba(205, 169, 41, 0.26);
  transition: all ease-in 0.3s;
}

.info__item--tel:hover {
  color: #f97141;
}

.info__item--tel:hover::before {
  box-shadow: 0px 4px 16px rgba(205, 169, 41, 0.4);
}
</style>
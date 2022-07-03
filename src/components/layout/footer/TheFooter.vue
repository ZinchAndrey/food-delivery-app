<template>
  <footer class="footer">
    <base-container class="footer__container">
      <span class="footer__company"> © Classic Family Restaurant </span>
      <a class="footer__link" href="#">
        <img
          class="footer__logo"
          src="../../../assets/header/logo.png"
          alt="Classic."
        />
      </a>
      <span class="footer__developer">
        Made with delight by <b>harmuder</b>
      </span>
    </base-container>
  </footer>
</template>

<style scoped>
.footer {
  padding: 33px 0;
}

.footer__container {
  font-size: 16px;
  line-height: 140%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all ease-in 0.1s;
}

.footer__link:hover {
  transform: scale(1.05);
}

.footer__logo {
  display: block;
  width: 95px;
  height: auto;
}
</style>
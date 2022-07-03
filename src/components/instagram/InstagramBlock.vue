<template>
  <div class="insta">
    <!-- <img src="../../assets/instagram/Rectangle12.jpg" alt="" class="insta__img" /> -->
    <img
      src="../../assets/instagram/Rectangle13.jpg"
      alt=""
      class="insta__img"
    />
    <img
      src="../../assets/instagram/Rectangle10.jpg"
      alt=""
      class="insta__img"
    />
    <img
      src="../../assets/instagram/Rectangle11.jpg"
      alt=""
      class="insta__img"
    />
    <img
      src="../../assets/instagram/Rectangle13.jpg"
      alt=""
      class="insta__img"
    />
    <img
      src="../../assets/instagram/Rectangle9.jpg"
      alt=""
      class="insta__img"
    />
    <img
      src="../../assets/instagram/Rectangle13.jpg"
      alt=""
      class="insta__img"
    />
    <!-- <img src="../../assets/instagram/Rectangle14.jpg" alt="" class="insta__img" /> -->
    <a href="#" class="insta__link" target="_blank">
      Instagram: <b>@classic_kovel</b>
    </a>
  </div>
</template>

<style scoped>
.insta {
  padding: 120px 0 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
}

.insta__img {
  /* width: 260px;
  height: auto; */
  margin: 0 20px;
}

.insta__link {
  font-size: 24px;
  line-height: 29px;
  text-decoration: none;
  color: #fff;

  width: 480px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(45.04deg, #fd9924 -51.05%, #f65b16 134.89%);
  box-shadow: 0px 70px 90px rgba(253, 55, 36, 0.2),
    0px 35px 50px rgba(253, 55, 36, 0.2), 0px 20px 25px rgba(253, 55, 36, 0.2);
  border-radius: 15px;

  transition: box-shadow ease-in 0.3s;

  position: absolute;
}

.insta__link::after {
  content: "";
  display: block;
  width: 440px;
  height: 140px;
  background: transparent;
  opacity: 0.1;
  border: 2px solid #ffffff;
  border-radius: 15px;
  position: absolute;
  margin: auto;
}

.insta__link:hover {
  box-shadow: 0px 70px 90px rgba(253, 55, 36, 0.3),
    0px 35px 50px rgba(253, 55, 36, 0.2), 0px 20px 25px rgba(253, 55, 36, 0.3);
}
</style>
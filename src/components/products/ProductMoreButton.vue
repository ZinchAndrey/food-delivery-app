<template>
  <button class="btn"></button>
</template>

<style scoped>
.btn {
  display: block;
  width: 60px;
  height: 60px;
  margin: 66px auto 0;
  border: none;
  border-radius: 50%;
  background: url();
  background: url("../../assets/products/more-icon.svg") no-repeat center,
    linear-gradient(287.74deg, #f58656 8.52%, #fe5626 92.72%);
  box-shadow: 0px 4px 8px rgba(205, 169, 41, 0.26);
  transition: box-shadow 0.3s ease-in;
  cursor: pointer;
}

.btn:hover {
  box-shadow: 0px 4px 16px rgba(205, 169, 41, 0.5);
}
</style>
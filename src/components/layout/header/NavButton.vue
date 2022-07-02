<template>
  <!-- Поделючить Vue роутер и сделать тут норм ссылки -->
  <a :href="to">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: ["to"],
};
</script>

<style scoped>
a {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  color: inherit;
  text-decoration: none;
  padding: 10px 20px;

  transition: all ease-in 0.3s;
}

a:hover {
  /* opacity: 0.8; */
  color: #F97141;
}
</style>
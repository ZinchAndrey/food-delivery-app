<template>
  <div class="filter">
    <span class="filter-option">
      <input
        class="visually-hidden"
        type="radio"
        id="pizza"
        value="pizza"
        name="category"
        @change="setFilter"
        checked
      />
      <label for="pizza">Pizza</label>
    </span>
    <span class="filter-option">
      <input
        class="visually-hidden"
        type="radio"
        id="sushi"
        value="sushi"
        name="category"
        @change="setFilter"
      />
      <label for="sushi">Sushi</label>
    </span>
    <span class="filter-option">
      <input
        class="visually-hidden"
        type="radio"
        id="salad"
        value="salad"
        name="category"
        @change="setFilter"
      />
      <label for="salad">Salad</label>
    </span>
    <span class="filter-option">
      <input
        class="visually-hidden"
        type="radio"
        id="dessert"
        value="dessert"
        name="category"
        @change="setFilter"
      />
      <label for="dessert">Dessert</label>
    </span>
    <span class="filter-option">
      <input
        class="visually-hidden"
        type="radio"
        id="drinks"
        value="drinks"
        name="category"
        @change="setFilter"
      />
      <label for="drinks">Drinks</label>
    </span>
  </div>
</template>
<script>
export default {
  emits: [
    'change-filter'
  ],
  data() {
    return {
      currentFilter: 'pizza',
    }
  },
  methods: {
    setFilter(evt) {
      this.currentFilter = evt.target.value;
      this.$emit('change-filter', this.currentFilter);
    }
  }
};
</script>

<style scoped>
.filter {
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 50px;
}

label {
  font-weight: 600;

  display: block;
  padding: 16px;
  min-width: 135px;
  background: linear-gradient(0deg, #eceef6, #eceef6), #59aaf1;
  border-radius: 45px;

  cursor: pointer;
}

label:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

input:checked + label {
  background: #59AAF1;
  color: #ffffff;
}

.filter-option {
  margin: 0 15px;
}

.filter-option:first-child {
  margin: 0 15px 0 0;
}

.filter-option:last-child {
  margin: 0 0 0 15px;
}
</style>
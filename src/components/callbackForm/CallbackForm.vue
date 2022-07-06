<template>
  <section class="form-container">
    <h2 class="caption">Fill out the form and we will call you</h2>
    <form
      class="form"
      :class="{ error: isFormInvalid }"
      @submit.prevent="submitForm"
    >
      <input
        class="form__field"
        v-model="name"
        name="name"
        type="text"
        placeholder="Your name"
      />
      <input
        class="form__field"
        v-model="phone"
        name="phone"
        type="text"
        inputmode="tel"
        placeholder="Phone number"
      />
      <button class="form__submit">Call back</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      isFormValid: "pending",
    };
  },
  computed: {
    isFormInvalid() {
      return this.isFormValid === "invalid";
    },
  },
  methods: {
    submitForm() {
      if (!!this.name && !!this.phone) {
        this.isFormValid = "valid";
      } else {
        this.isFormValid = "invalid";
        return;
      }

      const userData = {
        name: this.name,
        phone: this.phone,
      }

      console.log(userData);
      this.name = this.phone = '';
    },
  },
};
</script>

<style scoped>
.form-container {
  padding: 82px 20px 260px;
  background: #f0f5fb;
  position: relative;
}

.form-container::after {
  content: "";
  position: absolute;
  width: 684px;
  height: 342px;
  background: url("../../assets/callback/car.png") no-repeat center;
  left: 50%;
  bottom: -70px;
  transform: translateX(-50%);
}

.caption {
  font-size: 48px;
  line-height: 150%;
  text-align: center;
  margin: 0 auto 42px;
  max-width: 510px;
}
.form {
  display: flex;
  width: 100%;
  max-width: 857px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form.error .form__field {
  border-color: #f23f0e;
}
.form__field {
  font-size: 14px;
  line-height: 140%;
  font-family: inherit;
  color: #000000;

  width: 260px;
  padding: 20px 30px;
  background: #ffffff;
  border: 2px solid #eceef7;
  border-radius: 57px;
}

.form__field:active,
.form__field:focus {
  outline: none;
  border: 2px solid #cfd1d9;
}

.form__field::placeholder {
  color: #222222;
}

.form__submit {
  font-family: inherit;
  font-size: 18px;
  line-height: 140%;
  color: #ffffff;
  text-align: left;

  position: relative;
  width: 260px;
  padding: 17px 58px 18px;
  background: linear-gradient(180deg, #fe5626 0%, #f23f0e 100%), #59aaf1;
  box-shadow: 0px 4px 8px rgba(205, 169, 41, 0.26);
  border-radius: 59px;
  border: none;
  cursor: pointer;

  transition: box-shadow ease-in 0.3s;
}

.form__submit::after {
  content: "";
  display: block;
  width: 33px;
  height: 10px;
  background: url("../../assets/callback/arrow-icon.svg") no-repeat center;

  position: absolute;
  right: 53px;
  top: 50%;
  transform: translateY(-70%);

  transition: all ease-in 0.1s;
}

.form__submit:hover {
  box-shadow: 0px 4px 16px rgba(205, 169, 41, 0.46);
}
.form__submit:hover::after {
  right: 48px;
}
</style>
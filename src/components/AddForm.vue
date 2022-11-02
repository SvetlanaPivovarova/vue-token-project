<template>
  <form class="form" @submit.prevent="onSubmit">
    <div class="form__container">
      <input
        class="form__text"
        type="url"
        placeholder="Название домена"
        v-model="url"
      />
      <button class="submit-btn" type="submit">Добавить</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      url: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.url.trim()) {
        const newUrl = this.url;
        this.$emit("create-token", newUrl);
        this.url = "";
      }
    },
  },
};
</script>

<style>
.form {
  max-width: 100%;
  font-family: 'Inter', Arial, sans-serif;
  align-items: center;
  margin: 70px 0;
  color: #ffffff;
  display: flex;
  flex-direction: column;
}

.form__container {
  padding: 0 0 13px 0;
  border-bottom: 1px solid rgba(66, 66, 66, 1);
  display: flex;
  justify-content: space-between;
}

.form__text {
  font-family: inherit;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  background-color: transparent;
  color: rgba(139, 139, 139, 1);
  border: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  flex-basis: 70%;
}

@media screen and (max-width: 568px) {
  .form {
    margin-top: 90px;
  }

  .form__text {
    font-size: 18px;
    line-height: 22px;
    flex-basis: auto;
    max-width: 212px;
  }
}
</style>
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

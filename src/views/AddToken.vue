<template>
  <section class="content page">
    <h2 class="content__heading">Добавить новый токен</h2>
    <AddForm @create-token="createToken" />
  </section>
</template>

<script>
import AddForm from "../components/AddForm.vue";
import { API_URL } from "../../utils/constances.js";
import router from "../router/index.js";
export default {
  components: {
    AddForm,
  },
  methods: {
    createToken(url) {
      console.log("put", { url: url });
      fetch(`${API_URL}/tokens`, {
        method: "POST",
        body: JSON.stringify({
          url: url,
        }),
        headers: {
          // Добавляем необходимые заголовки
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => {
          console.log("Успешно");
          router.push("/tokens");
          //this.tokens = result;
          //this.loading = false
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

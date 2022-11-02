<template>
  <div>
    <FormDelete @delete-token="deleteToken" />
  </div>
</template>

<script>
import FormDelete from "../components/FormDelete.vue";
import { useTokenStore } from "../stores/TokenStore.js";
import {API_URL} from "../../utils/constances";
import router from "../router";

const store = useTokenStore();

export default {
  data() {
    return {
      currentUrl: store.currentToken.url,
      currentId: store.currentToken.id
    };
  },
  components: { FormDelete },
  methods: {
    deleteToken(id) {
      console.log("удаляем", id);
      fetch(`${API_URL}/tokens/${id}/delete`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
          .then((response) => response.json())
          .then(() => {
            console.log("Токен удален");
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

<style scoped></style>

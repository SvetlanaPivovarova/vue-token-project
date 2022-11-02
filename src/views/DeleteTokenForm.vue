<template>
  <div>
    <FormDelete @delete-token="deleteToken" />
    <InfoTooltip v-if="this.isOpen" v-bind:message="this.message"/>
  </div>
</template>

<script>
import FormDelete from "../components/FormDelete.vue";
import InfoTooltip from "../components/InfoTooltip.vue";
import { useTokenStore } from "../stores/TokenStore.js";
import {API_URL} from "../../utils/constances";

const store = useTokenStore();

export default {
  data() {
    return {
      currentUrl: store.currentToken.url,
      currentId: store.currentToken.id,
      isOpen: false,
      message: ''
    };
  },
  components: { FormDelete, InfoTooltip },
  methods: {
    deleteToken(id) {
      fetch(`${API_URL}/tokens/${id}/delete`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
          .then((response) => response.json())
          .then(() => {

            this.isOpen = true;
            this.message = "Токен удален";

          })
          .catch((error) => {
            console.log(error);
          });
    },
  },
};
</script>

<style scoped></style>

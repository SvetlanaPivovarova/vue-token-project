<template>
  <section class="content page">
    <h2 class="content__heading">Добавить новый токен</h2>
    <AddForm @create-token="createToken" />
    <InfoTooltip v-if="this.isOpen" v-bind:message="this.message"/>
  </section>
</template>

<script>
import AddForm from "../components/AddForm.vue";
import { API_URL } from "../../utils/constances.js";
//import router from "../router/index.js";
import InfoTooltip from "../components/InfoTooltip.vue";


export default {
  components: {
    InfoTooltip,
    AddForm,
  },
  data() {
    return {
      isOpen: false,
      message: ''
    }
  },
  methods: {
    createToken(url) {
      fetch(`${API_URL}/tokens`, {
        method: "POST",
        body: JSON.stringify({
          url: url,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => {
          this.isOpen = true;
          this.message = "Токен добавлен";
          //router.push("/tokens");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

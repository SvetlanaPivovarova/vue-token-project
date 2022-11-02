<template>
  <section class="content">
    <TokenList
      v-if="tokens.length"
      v-bind:tokens="tokens"
      @confirm-deletion="confirmDeletion"
    />
    <p v-else class="token-list__message">Нет сохраненных токенов</p>
  </section>
</template>

<script>
import TokenList from "../components/TokenList.vue";
import { API_URL } from "../../utils/constances.js";
import router from "../router/index.js";
import { useTokenStore } from "../stores/TokenStore.js";

const store = useTokenStore();

export default {
  name: "app",
  data() {
    return {
      tokens: [],
      current: {},
    };
  },
  mounted() {
    this.$nextTick(function () {
      // Код, который будет запущен только после
      // отображения всех представлений
      fetch(`${API_URL}/tokens`)
        .then((response) => response.json())
        .then((result) => {
          this.tokens = result;
          //this.loading = false
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
  components: { TokenList },
  methods: {
    confirmDeletion(token) {
      store.currentToken = token;
      router.push({ name: "delete-token", params: { id: token._id } });
      console.log("переход", store.currentToken.url);
    },
  },
};
</script>

<style scoped>
.token-list__message {
  text-align: center;
}
</style>

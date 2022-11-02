<template>
  <section>
    <h2 class="content__heading">
      Вы точно хотите удалить данный токен для организации <span>{{this.currentUrl}}</span> ?
    </h2>
    <form class="form" @submit.prevent="onDelete">
      <div class="buttons-container">
        <button class="submit-btn" type="submit">Да</button>
        <button class="submit-btn" type="button" v-on:click="redirect">
          Отмена
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import router from "../router/index.js";
import { useTokenStore } from "../stores/TokenStore.js";

const store = useTokenStore();

export default {
  data() {
    return {
      currentUrl: store.currentToken.url,
      currentId: store.currentToken._id
    };
  },
  props: {
    current: {
      type: Object,
    },
  },
  methods: {
    redirect() {
      router.push("/tokens");
    },
    onDelete() {
      this.$emit("delete-token", this.currentId);
      console.log("delete", this.currentId);
    },
  },
};
</script>

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

<style>
.content__heading {
  border-bottom: 1px solid rgba(218, 218, 218, 1);
  margin: 0 0 20px;
  padding: 40px 0 23px;
  box-sizing: border-box;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: -0.04em;
  font-weight: 400;
  text-align: center;
}

.buttons-container {
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin: 30px auto;
}

@media screen and (max-width: 690px) {
  .content__heading {
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 568px) {
  .content__heading {
    font-size: 18px;
    line-height: 22px;
    padding-bottom: 28px;
  }
}
</style>

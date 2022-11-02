<template>
  <div>
    <ul class="token-list__container">
      <TokenItem
        v-for="token in tokens"
        :key="token._id"
        v-bind:token="token"
        v-on:confirm-deletion="confirmDeletion"
      />
    </ul>
  </div>
</template>

<script>
import TokenItem from "./TokenItem.vue";
export default {
  props: ["tokens"],
  components: {
    TokenItem,
  },
  methods: {
    confirmDeletion(token) {
      this.$emit("confirm-deletion", token);
    },
  },
};
</script>

<style scoped>
.token-list__container {
  display: flex;
  flex-direction: column;
  margin: 40px 0;
  padding: 0;
}
</style>

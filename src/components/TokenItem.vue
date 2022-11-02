<template>
  <li class="token-list__item">
    <p class="token-list__item-url">{{ token.url }}</p>
    <p class="token-list__item-token">{{ token.token }}</p>
    <button
      class="submit-btn"
      v-bind:token="token"
      v-on:click="$emit('confirm-deletion', token)"
    >
      Удалить
    </button>
  </li>
</template>

<script>
export default {
  props: {
    token: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.token-list__item {
  display: flex;
  justify-content: space-between;
  padding: 0 0 19px 0;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(66, 66, 66, 1);
  list-style: none;
  margin: 20px;
  max-width: 100%;
}

.token-list__item-url {
  margin: 0;
}

.token-list__item-token {
  flex-basis: 60%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 0 20px;
}

.submit-btn {
  min-width: 80px;
  height: 34px;
  font-size: 12px;
  box-sizing: border-box;
  border: 0;
  border-radius: 48px;
  background-color: hsla(160, 100%, 37%, 1);
  background-size: 15px 15px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  margin: 0;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.submit-btn:hover {
  opacity: 0.8;
}

.submit-btn:disabled {
  background-color: #e5e5e5;
}
</style>

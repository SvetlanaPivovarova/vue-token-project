<template>
  <div
      class="popup"
      v-bind:class="{ popup_opened: this.isOpen }"
  >
    <div class="popup__container">
      <button class="popup__close-btn" type="button" v-on:click="closePopup"></button>
      <p class="popup__message">{{this.message}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: true,
    };
  },
  props: ['message'],
  methods: {
    closePopup() {
      this.isOpen = false;
    }
  }
}
</script>

<style scoped>
.popup {
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, .5);
  justify-content: center;
  align-items: center;
  z-index: 2;
  opacity: 0;
  visibility: hidden;
  transition: visibility 1s, opacity 1s;
}

.popup_opened {
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, .5);
  justify-content: center;
  align-items: center;
  z-index: 2;
  opacity: 1;
  visibility: visible;
  transition:  visibility 1s, opacity 1s;
}

.popup__container {
  background-color: white;
  border-radius: 10px;
  width: 430px;
  display: flex;
  align-content: center;
  flex-direction: column;
  padding: 0 36px;
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
}

.popup__message {
  font-size: 24px;
  line-height: 29px;
  font-weight: 900;
  margin: 60px auto;
  padding: 0;
  color: #000000;
  text-align: center;
}

.popup__close-btn {
  position: absolute;
  top: -40px;
  right: -40px;
  border: none;
  width: 32px;
  height: 32px;
  background-image: url(../assets/close_icon.svg);
  background-color: transparent;
  background-size: 32px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  opacity: 1;
  cursor: pointer;
  transition: opacity .3s ease;
}

.popup__close-btn:hover {
  opacity: .6;
}

@media screen and (max-width: 568px) {
  .popup__container {
    width: 282px;
    padding-left: 22px;
    padding-right: 22px;
  }

  .popup__close-btn {
    top: -36px;
    right: 0;
    width: 20px;
    height: 20px;
    background-size: 20px;
  }
}

</style>
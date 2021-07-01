<template>
  <div class="nav-container">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <menuButton @click="openMenu" class="menuButton" />
    <div class="modal" v-if="menuOpen">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
import menuButton from "@/assets/menuButton.vue";

export default {
  components: {
    menuButton,
  },
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    openMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
.nav-container {
  background-color: wheat;
  height: 50px;
}

.menuButton {
  position: absolute;
  right: 18px;
  top: 20px;
  z-index: 10;
}

.modal {
  position: fixed;
  padding: 0;
  margin: 0;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: gray;
}

@media screen and (min-width: 480px) {
  .modal,
  .menuButton {
    display: none;
  }
}
</style>

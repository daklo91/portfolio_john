<template>
  <div class="nav-container">
    <div class="nav-links-big-screen">
      <router-link class="router-link" @click="closeMenu" to="/"
        >Home</router-link
      >
      <router-link class="router-link" @click="closeMenu" to="/blog"
        >Blog</router-link
      >
      <router-link class="router-link" @click="closeMenu" to="/work"
        >Work</router-link
      >
    </div>
    <menuButton @click="openMenu" class="menuButton" />
    <div class="modal" v-if="menuOpen">
      <div class="link-container">
        <router-link class="router-link" @click="closeMenu" to="/"
          >Home</router-link
        >
        <router-link class="router-link" @click="closeMenu" to="/blog"
          >Blog</router-link
        >
        <router-link class="router-link" @click="closeMenu" to="/work"
          >Work</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import menuButton from "@/assets/icons/menuButton.vue";

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
    closeMenu() {
      this.menuOpen = false;
    },
  },
};
</script>

<style scoped>
.nav-container {
  height: 50px;
}

.menuButton {
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 10;
  cursor: pointer;
}

.menuButton:hover {
  filter: brightness(200%);
  transform: skewY(5deg);
}

.nav-links-big-screen {
  float: right;
  margin: 27px 60px 0 0;
}

.nav-links-big-screen > .router-link {
  margin-left: 30px;
}

.router-link {
  font-size: 20px;
  font-weight: 500;
  color: var(--dark); /* it's black in the design file */
  text-decoration: none;
}

.router-link-active {
  color: var(--primary);
}

.modal {
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.93);
}

.link-container {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
}

.link-container > .router-link {
  margin: 10px auto 0 auto;
}

@media screen and (min-width: 481px) {
  .modal,
  .menuButton {
    display: none;
  }
}

@media screen and (max-width: 480px) {
  .nav-links-big-screen {
    display: none;
  }
}
</style>

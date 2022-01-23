<template>
  <Header />
  <transition name="fade" mode="out-in">
    <router-view />
  </transition>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import "./assets/styles/colors.css";
@import "./assets/styles/fonts.css";

::-moz-selection {
  background: var(--primary);
}
::selection {
  background: var(--primary);
}

body {
  padding: 0;
  margin: 0;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.15s ease-out;
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: all 0.15s ease-in;
}
</style>

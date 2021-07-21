<template>
  <Header />
  <router-view />
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

body {
  padding: 0;
  margin: 0;
}
</style>

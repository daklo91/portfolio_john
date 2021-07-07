<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
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

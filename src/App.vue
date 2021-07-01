<template>
  <NavLinks />
  <router-view />
</template>

<script>
import NavLinks from "@/components/NavLinks.vue";

export default {
  components: {
    NavLinks,
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>

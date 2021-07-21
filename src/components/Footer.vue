<template>
  <div class="container">
    <div>
      <facebook class="social-icons" />
      <instagram class="social-icons" />
      <twitter class="social-icons" />
      <linkedin class="social-icons" />
    </div>
    <p class="copyright-text">Copyright ©2020 All rights reserved</p>
  </div>
</template>

<script>
import facebook from "@/assets/icons/facebook.vue";
import instagram from "@/assets/icons/instagram.vue";
import twitter from "@/assets/icons/twitter.vue";
import linkedin from "@/assets/icons/linkedin.vue";

export default {
  components: {
    facebook,
    instagram,
    twitter,
    linkedin,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
}

.social-icons {
  margin: 0 12.5px 0 12.5px;
  padding: 0 5px 0 5px;
}

.copyright-text {
  font-weight: 500;
  font-size: 14px;
  color: var(--dark);
  margin-bottom: 55px;
}
</style>

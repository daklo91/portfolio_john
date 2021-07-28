<template>
  <div>
    <h1>{{ blogPost.title }}</h1>
  </div>
</template>

<script>
import store from "@/assets/data/store.js";

export default {
  data() {
    return {
      blogPosts: store.blogPosts,
      blogPost: "",
    };
  },
  mounted() {
    for (var i = 0; i < this.blogPosts.length; i++) {
      if (
        this.$route.params.title ===
        this.blogPosts[i].title.replace(/\s+/g, "-").toLowerCase()
      ) {
        this.blogPost = this.blogPosts[i];
      }
    }
  },
};
</script>

<style scoped></style>

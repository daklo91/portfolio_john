<template>
  <main class="container">
    <h1 class="blog-h1">Blog</h1>
    <div v-for="(blogPost, index) in blogPosts" :key="index">
      <BlogPostCard
        :title="blogPosts[index].title"
        :date="blogPosts[index].date"
        :types="blogPosts[index].type"
        :description="blogPosts[index].description"
      />
    </div>
  </main>
</template>

<script>
import store from "@/assets/data/store.js";
import BlogPostCard from "@/components/BlogPostCard.vue";

export default {
  name: "Blog",
  components: {
    BlogPostCard,
  },
  data() {
    return {
      blogPosts: store.blogPosts,
    };
  },
};
</script>

<style scoped>
.blog-h1 {
  font-size: 44px;
  color: var(--dark);
  margin-bottom: 10px;
}

.container {
  padding: 18px;
  max-width: 685px;
  margin: auto;
}

::v-deep(.rp-card) {
  margin-left: 0;
  margin-right: 0;
  box-shadow: none;
  border-bottom: solid 1.5px #e0e0e0;
}
::v-deep(.rp-title) {
  padding-left: 0;
  padding-right: 0;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: -15px;
  padding-top: 35px;
}
::v-deep(.rp-info) {
  padding-left: 0;
  padding-right: 0;
  font-size: 20px;
}

::v-deep(.rp-description) {
  margin-left: 0;
  margin-right: 0;
  margin-top: -10px;
  margin-bottom: 5px;
}

@media screen and (max-width: 901px) {
  .container {
    max-width: 470px;
  }

  .blog-h1 {
    font-size: 30px;
  }

  ::v-deep(.rp-info) {
    font-size: 16px;
  }

  ::v-deep(.rp-title) {
    font-size: 26px;
    padding-top: 18px;
    margin-bottom: -12px;
  }

  ::v-deep(.rp-description) {
    margin-bottom: 20px;
    margin-top: 0px;
    padding-bottom: 0;
  }
}
</style>

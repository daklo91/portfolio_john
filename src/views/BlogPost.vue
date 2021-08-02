<template>
  <div class="container">
    <h1 class="blog-title">{{ blogPost.title }}</h1>
    <div class="blog-info">
      <p class="blog-date">{{ blogPost.date }}</p>
      <svg
        width="2"
        height="21"
        viewBox="0 0 2 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="blog-divider"
      >
        <path d="M1 0V21" stroke="black" />
      </svg>
      <div class="blog-type">
        <div v-for="(singleType, index) in blogPost.type" :key="index">
          <p>
            {{ singleType
            }}<span v-if="index + 1 < blogPost.type.length">,&#160;</span>
          </p>
        </div>
      </div>
    </div>
    <p class="blog-description">
      {{ blogPost.description }}
    </p>
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

<style scoped>
.container {
  padding: 18px;
  max-width: 600px;
  margin: auto;
}

.blog-title {
  margin-top: 50px;
  margin-bottom: -10px;
}

.blog-info {
  display: flex;
  align-items: center;
  font-size: 18px;
}

.blog-divider {
  margin: 0 15px 0 15px;
}

.blog-type {
  display: flex;
  text-transform: capitalize;
  color: var(--light);
}

.blog-description {
  font-style: italic;
}

@media screen and (max-width: 470px) {
  .blog-title {
    margin-top: 50px;
    margin-bottom: -10px;
  }
}
</style>

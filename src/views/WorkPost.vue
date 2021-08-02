<template>
  <div class="container">
    <h1>{{ workPost.title }}</h1>
    <div class="date-type-container">
      <p class="date">{{ workPost.date }}</p>
      <p class="type">{{ workPost.types[0] }}</p>
    </div>
    <p>{{ workPost.description }}</p>
    <div class="image-crop">
      <img
        :src="require(`@/assets/${workPost.image[0].imageName}`)"
        :alt="workPost.image[1].alt"
      />
    </div>
  </div>
</template>

<script>
import store from "@/assets/data/store.js";

export default {
  data() {
    return {
      workPosts: store.workPosts,
      workPost: "",
    };
  },
  created() {
    for (var i = 0; i < this.workPosts.length; i++) {
      if (
        this.$route.params.title ===
        this.workPosts[i].title.replace(/\s+/g, "-").toLowerCase()
      ) {
        this.workPost = this.workPosts[i];
      }
    }
  },
};
</script>

<style scoped>
* {
  color: var(--dark);
}

.container {
  padding: 0 18px 18px 18px;
  max-width: 470px;
  margin: auto;
}

h1 {
  font-weight: 700;
  line-height: 40px;
  font-size: 30px;
  margin-bottom: 0;
}

.date-type-container {
  display: flex;
}

.date {
  font-size: 18px;
  background-color: var(--primary);
  font-weight: 900;
  color: #fff;
  width: 62px;
  height: 25px;
  text-align: center;
  border-radius: 1em;
  margin-right: 15px;
  margin-bottom: 10px;
}

.type {
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 10px;
}

img {
  width: 100%;
}
</style>

<template>
  <div class="container">
    <h1>{{ blogPost.title }}</h1>
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
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure vel quia
      provident aperiam corporis molestias voluptas ab qui? Facilis explicabo
      atque adipisci, sunt esse praesentium tenetur repellat consequatur illo?
      Eum minima maxime atque iste delectus quis at dolor porro, laborum ipsa
      alias voluptates voluptatibus commodi quas, placeat temporibus eveniet
      reiciendis.
    </p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias rerum,
      delectus debitis illo assumenda a. Vel, ullam perferendis. Totam, nihil ab
      blanditiis veritatis nam tempore?
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure vel quia
      provident aperiam corporis molestias voluptas ab qui? Facilis explicabo
      atque adipisci, sunt esse praesentium tenetur repellat consequatur illo?
      Eum minima maxime atque iste delectus quis at dolor porro, laborum ipsa
      alias voluptates voluptatibus commodi quas, placeat temporibus eveniet
      reiciendis.
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
  max-width: 470px;
  margin: auto;
}

h1 {
  font-weight: 700;
  line-height: 40px;
  font-size: 30px;
  margin-bottom: 0;
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

@media screen and (min-width: 901px) {
  .container {
    max-width: 650px;
  }

  h1 {
    font-size: 34px;
  }
}
</style>

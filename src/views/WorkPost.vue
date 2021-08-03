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
    <!-- Static content below. This would be data from an API -->
    <h2>Headline Lorem to the Ipsum</h2>
    <h3>Subheadline lorem</h3>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
      architecto reprehenderit impedit vel repudiandae. Dolorum numquam
      explicabo tempora maxime repellendus repellat nisi odio, magni dolorem
      rerum, aliquid veritatis reiciendis amet dolores perspiciatis fuga eos
      optio! Explicabo pariatur a quis laboriosam eaque ullam corporis quidem
      debitis, voluptatum doloremque ducimus quam. Recusandae animi nostrum
      expedita esse id iure maxime molestiae quasi dolorem, accusamus, nihil
      assumenda voluptatum voluptatibus, harum atque hic quidem. Officia quo
      velit nemo, quis animi error, aut incidunt quod necessitatibus officiis
      ullam harum exercitationem deserunt magni facere, tenetur repudiandae
      voluptates distinctio qui. Adipisci at eius veniam illum consequatur porro
      ea?
    </p>
    <img
      src="@/assets/884ac19526fd2491ea0b40e9bee97049.png"
      alt="Picture of lore content"
      class="content-image"
    />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
      reprehenderit. Dolore recusandae molestias quia facilis qui autem.
      Consequatur amet quasi quam tempora deserunt dignissimos suscipit velit.
      Natus quae expedita temporibus perspiciatis illum rem dolores beatae
      obcaecati iure excepturi esse, itaque officiis voluptates est? Esse
      voluptate cumque dignissimos et! Eligendi, commodi.
    </p>
    <img
      src="@/assets/252f22ce390e5bad81de4a04a3446a45.png"
      alt="Picture of lore content"
      class="content-image"
    />
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

h2 {
  font-weight: 500;
  font-size: 26px;
}

h3 {
  font-weight: 500;
  font-size: 20px;
  margin-top: -15px;
}

.date-type-container {
  display: flex;
  align-items: center;
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

.content-image {
  margin-top: 10px;
  margin-bottom: 30px;
}

@media screen and (min-width: 901px) {
  .container {
    max-width: 650px;
  }

  h1 {
    font-size: 34px;
  }

  .type {
    font-size: 20px;
  }

  h2 {
    font-size: 30px;
  }

  h3 {
    font-size: 24px;
  }
}
</style>

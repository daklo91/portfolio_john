<template>
  <div class="container">
    <div class="landing-page">
      <img
        class="profile-image"
        src="../assets/john_profile.png"
        alt="Profile Picture of John Smith"
      />
      <div class="intro-container">
        <h1 class="intro-headline">
          Hi, I am John,<br />
          Creative Technologist
        </h1>
        <p class="intro-description">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button class="intro-cta">Download Resume</button>
      </div>
    </div>
    <div class="rp-container">
      <h2 class="section-title">Recent Posts</h2>
      <div v-for="index in 2" :key="index">
        <BlogPostCard
          :title="blogPosts[index - 1].title"
          :date="blogPosts[index - 1].date"
          :types="blogPosts[index - 1].type"
          :description="blogPosts[index - 1].description"
        />
      </div>
    </div>
    <div class="fw-container">
      <p class="section-title">Featured works</p>
      <WorkCard
        :image="workPosts[0].image"
        :title="workPosts[0].title"
        :date="workPosts[0].date"
        :types="workPosts[0].types"
        :description="workPosts[0].description"
      />
    </div>
  </div>
</template>

<script>
import BlogPostCard from "@/components/BlogPostCard.vue";
import WorkCard from "@/components/WorkCard.vue";
import store from "@/assets/data/store.js";

export default {
  name: "Home",
  components: {
    BlogPostCard,
    WorkCard,
  },
  data() {
    return {
      blogPosts: store.blogPosts,
      workPosts: store.workPosts,
    };
  },
};
</script>

<style scoped>
.profile-image {
  object-fit: cover;
  border-radius: 50%;
  -webkit-box-shadow: -2px 5px 0px 3px var(--blue-bg);
  box-shadow: -4px 5px 0px 3px var(--blue-bg);
}

.intro-container {
  text-align: center;
}

.intro-headline {
  font-weight: 700;
  font-size: 2em;
  color: var(--dark);
  margin: auto;
  margin-top: 35px;
  padding: 0 30px 0 30px;
  line-height: 40px;
}

.intro-description {
  margin: auto;
  margin-top: 20px;
  padding: 0 20px 0 20px;
}

.intro-cta {
  width: 210px;
  height: 50px;
  margin-top: 30px;
  background-color: var(--primary);
  font-size: 20px;
  color: #fff;
  border: 0;
}

.intro-cta:hover {
  filter: brightness(115%);
  cursor: pointer;
}

.intro-cta:active {
  filter: brightness(130%);
}

.rp-container {
  background-color: var(--blue-bg);
  margin-top: 55px;
  padding-bottom: 20px;
}

.section-title {
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  padding-top: 17px;
  padding-bottom: 17px;
  margin: 0;
}

.fw-container {
  margin-bottom: 50px;
}

@media screen and (max-width: 900px) {
  .profile-image {
    height: 170px;
    width: 170px;
    margin: auto;
    margin-top: 35px;
    display: block;
  }

  .container {
    width: 470px;
    margin: auto;
  }
}

@media screen and (min-width: 901px) {
  .container {
    width: 850px;
    margin: auto;
  }

  .landing-page {
    display: flex;
    flex-flow: row-reverse;
    margin-top: 100px;
  }

  .intro-container {
    text-align: left;
    width: 500px;
  }

  .intro-headline {
    font-size: 44px;
    line-height: 60px;
    padding: 0;
  }

  .intro-description {
    padding: 0;
  }

  .profile-image {
    width: 243px;
    height: 243px;
    margin: auto;
    display: block;
  }

  .section-title {
    text-align: left;
    font-weight: 500;
    font-size: 22px;
  }

  .rp-container {
    width: 100vw;
    margin-left: -0%;
  }
}
</style>

<template>
  <div>
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
    <div class="rp-background">
      <div class="rp-container">
        <h2 class="section-title">Recent Posts</h2>
        <router-link class="view-work-link" to="/blog">View all</router-link>
        <div class="blog-post-card-container">
          <div v-for="index in 2" :key="index">
            <BlogPostCard
              :title="blogPosts[index - 1].title"
              :date="blogPosts[index - 1].date"
              :types="blogPosts[index - 1].type"
              :description="blogPosts[index - 1].description"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="fw-container">
      <p class="section-title">Featured works</p>
      <div v-for="index in 3" :key="index">
        <WorkCard
          :image="workPosts[index - 1].image"
          :title="workPosts[index - 1].title"
          :date="workPosts[index - 1].date"
          :types="workPosts[index - 1].types"
          :description="workPosts[index - 1].description"
        />
      </div>
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

.rp-background {
  background-color: var(--blue-bg);
  margin-top: 55px;
  padding-bottom: 35px;
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

  .fw-container,
  .rp-container,
  .landing-page {
    max-width: 470px;
    margin: auto;
  }

  .view-work-link {
    display: none;
  }
}

@media screen and (min-width: 901px) {
  .fw-container,
  .rp-container,
  .landing-page {
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
    margin-right: 0;
    display: block;
  }

  .section-title {
    text-align: left;
    font-weight: 500;
    font-size: 22px;
  }

  .view-work-link {
    float: right;
    margin-top: -43px;
    text-decoration: none;
    color: var(--secondary);
    margin-right: -5px;
  }
  .view-work-link:hover {
    filter: brightness(115%);
  }
  .view-work-link:active {
    filter: brightness(130%);
  }

  .blog-post-card-container {
    display: flex;
    flex-direction: row;
    margin-left: -10px;
  }

  ::v-deep(.rp-card) {
    min-height: 285px;
    min-width: 418px;
  }
  ::v-deep(.rp-title) {
    font-size: 26px;
  }
  ::v-deep(.rp-date) {
    font-size: 18px;
  }
  ::v-deep(.rp-type) {
    font-size: 18px;
  }

  ::v-deep(.fw-card) {
    display: flex;
    margin-left: 0px;
  }
  ::v-deep(.fw-image-crop) {
    margin-bottom: 25px;
  }
  ::v-deep(.fw-image) {
    height: 180px;
  }
  ::v-deep(.fw-info-container) {
    min-width: 560px;
    margin-left: 18px;
  }
  ::v-deep(.fw-title) {
    font-size: 30px;
    margin-top: -7px;
  }
  ::v-deep(.fw-date) {
    font-size: 18px;
    height: 25px;
  }
  ::v-deep(.fw-type) {
    font-size: 20px;
    margin-top: 17px;
  }
  ::v-deep(.fw-description) {
    margin-top: 0;
    margin-bottom: 25px;
  }
}
</style>

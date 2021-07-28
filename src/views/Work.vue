<template>
  <div class="container">
    <h1 class="work-h1">Work</h1>
    <div v-for="(workPost, index) in workPosts" :key="index">
      <WorkCard
        :image="workPosts[index].image"
        :title="workPosts[index].title"
        :date="workPosts[index].date"
        :types="workPosts[index].types"
        :description="workPosts[index].description"
      />
    </div>
  </div>
</template>

<script>
import WorkCard from "@/components/WorkCard.vue";
import store from "@/assets/data/store.js";

export default {
  components: {
    WorkCard,
  },
  data() {
    return {
      workPosts: store.workPosts,
    };
  },
};
</script>

<style scoped>
.container {
  padding: 0 18px 18px 18px;
  max-width: 470px;
  margin: auto;
}

.work-h1 {
  font-size: 30px;
  line-height: 60px;
  font-weight: bold;
  color: var(--dark);
}

::v-deep(.fw-card) {
  margin: 0 0 22px 0;
}

::v-deep(.fw-title) {
  margin-bottom: -5px;
  font-size: 24px;
  line-height: 30px;
  font-weight: bold;
}

::v-deep(.fw-description) {
  margin-top: 8px;
}

@media screen and (min-width: 901px) {
  .work-h1 {
    font-size: 44px;
  }

  .container {
    margin: auto;
    max-width: 685px;
  }

  ::v-deep(.fw-card) {
    display: flex;
  }

  ::v-deep(.fw-image) {
    width: 246px;
    height: 180px;
    margin-right: 18px;
  }

  ::v-deep(.fw-title) {
    margin: 0;
    margin-bottom: 5px;
    font-size: 30px;
    font-weight: 700;
  }

  ::v-deep(.fw-type) {
    font-size: 20px;
    font-weight: 400;
  }

  ::v-deep(.fw-date) {
    height: 26px;
    margin: auto 0 auto 0;
    font-size: 18px;
  }

  ::v-deep(.fw-description) {
    margin-top: -5px;
  }

  ::v-deep(.fw-card) {
    padding-bottom: 45px;
  }
}
</style>

<template>
  <div class="fw-card">
    <div class="fw-image-crop">
      <img
        class="fw-image"
        :src="require(`@/assets/${image[0].imageName}`)"
        :alt="image[1].alt"
      />
    </div>
    <h3 class="fw-title">{{ title }}</h3>
    <div class="fw-intro">
      <p class="fw-date">{{ date }}</p>
      <div v-for="(type, index) in types" :key="index">
        <p class="fw-type">
          {{ type }}<span v-if="index + 1 < types.length">,&#160;</span>
        </p>
      </div>
    </div>
    <p class="fw-description">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Array,
      default: function () {
        return ["no image", "no alt text"];
      },
    },
    title: {
      type: String,
      default: "empty",
    },
    date: {
      type: String,
      default: "empty",
    },
    types: {
      type: Array,
      default: function () {
        return ["empty1", "empty2"];
      },
    },
    description: {
      type: String,
      default: "empty",
    },
  },
};
</script>

<style scoped>
.fw-card {
  margin: 0 15px 15px 15px;
  border-bottom: 1px solid #e0e0e0;
}

.fw-image {
  width: 100%;
  height: auto;
  border-radius: 4px;
  object-fit: cover;
  margin: auto;
  display: block;
}

.fw-title {
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 0;
  margin-top: 15px;
  color: var(--dark);
}

.fw-intro {
  display: flex;
}

.fw-date {
  background-color: var(--dark-blue);
  font-weight: 900;
  color: #fff;
  width: 60px;
  text-align: center;
  border-radius: 1em;
  padding-top: 1px;
}

.fw-type {
  font-weight: 500;
  font-size: 1em;
  color: var(--light);
  margin-left: 20px;
}
</style>

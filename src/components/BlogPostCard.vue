<template>
  <div class="rp-card">
    <h3 class="rp-title" @click="linkToBlog">{{ title }}</h3>
    <div class="rp-info">
      <p class="rp-date">{{ date }}</p>
      <svg
        width="2"
        height="21"
        viewBox="0 0 2 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="rp-divider"
      >
        <path d="M1 0V21" stroke="black" />
      </svg>
      <div class="rp-type">
        <div v-for="(type, index) in types" :key="index">
          <p>{{ type }}<span v-if="index + 1 < types.length">,&#160;</span></p>
        </div>
      </div>
    </div>
    <p class="rp-description">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
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
  methods: {
    linkToBlog() {
      this.$router.push({
        name: "BlogPost",
        params: { title: this.title.replace(/\s+/g, "-").toLowerCase() },
      });
    },
  },
};
</script>

<style scoped>
.rp-card {
  background-color: #fff;
  margin: 0 10px 0 10px;
  border-radius: 4px;
  -webkit-box-shadow: 0px 4px 10px 0px rgba(187, 225, 250, 0.25);
  box-shadow: 0px 4px 10px 0px rgba(187, 225, 250, 0.25);
}

.rp-title {
  font-weight: 700;
  font-size: 22px;
  padding: 15px 15px 0 15px;
  margin-bottom: 0;
  margin-top: 0;
  color: var(--dark);
}

.rp-title:hover {
  cursor: pointer;
  text-decoration: underline;
}

.rp-info {
  display: flex;
  align-content: center;
  padding: 0 15px 0 15px;
}

.rp-date,
.rp-type {
  font-weight: 500;
  font: 1em;
  text-transform: capitalize;
}

.rp-type {
  display: flex;
  margin: auto 0 auto 0;
  color: var(
    --light
  ); /* in the design file, this is dark on the front page and light on the blog page, but I went for light on both for consistency */
}

@media screen and (max-width: 350px) {
  .rp-type {
    flex-direction: column;
  }

  .rp-type > div > p {
    margin: 0;
  }
}

.rp-divider {
  align-self: center;
  margin: 0 25px 0 25px;
}

.rp-description {
  font-weight: 500;
  font: 1em;
  margin: 0 15px 20px 15px;
  padding-bottom: 20px;
}
</style>

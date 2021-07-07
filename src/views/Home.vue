<template>
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
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. Exercitation veniam
      consequat sunt nostrud amet.
    </p>
    <button class="intro-cta">Download Resume</button>
  </div>
  <!-- "rp" short for Recent Posts -->
  <div class="rp-container">
    <h2 class="section-title">Recent Posts</h2>
    <div class="rp-card">
      <h3 class="rp-title">Making a design system from scratch</h3>
      <div class="rp-info">
        <p class="rp-date">12 Feb 2020</p>
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
        <p class="rp-type">Design, Pattern</p>
      </div>
      <p class="rp-description">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
    </div>

    <div class="rp-card">
      <h3 class="rp-title">Creating pixel perfect icons in Figma</h3>
      <div class="rp-info">
        <p class="rp-date">12 Feb 2020</p>
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
        <p class="rp-type">Design, Pattern</p>
      </div>
      <p class="rp-description">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
    </div>
  </div>

  <div class="fw-container">
    <div class="fw-card">
      <p class="section-title">Featured works</p>
      <div class="fw-image-crop">
        <img
          class="fw-image"
          src="../assets/featured_work_1.png"
          alt="Thumbnail of Designing Dashboards"
        />
      </div>
      <h3 class="fw-title">Designing Dashboards</h3>
      <div class="fw-intro">
        <p class="fw-date">2020</p>
        <p class="fw-type">Dashboard</p>
      </div>
      <p class="fw-description">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.profile-image {
  object-fit: cover;
  border-radius: 50%;
  -webkit-box-shadow: -2px 5px 0px 3px var(--blue-bg);
  box-shadow: -4px 5px 0px 3px var(--blue-bg);
}

@media screen and (max-width: 480px) {
  .profile-image {
    height: 170px;
    width: 170px;
    margin: auto;
    margin-top: 35px;
    display: block;
  }
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
}

.intro-description {
  margin: auto;
  margin-top: 20px;
  padding: 0 20px 0 20px;
}

.intro-cta {
  max-width: 210px;
  height: 50px;
  margin-top: 30px;
  background-color: var(--primary);
  font-size: 20px;
  color: #fff;
  border: 0;
}

.intro-cta:hover {
  filter: brightness(115%);
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
  padding-top: 25px;
  padding-bottom: 25px;
  margin: 0;
}

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

.rp-info {
  display: flex;
  align-content: center;
  padding: 0 15px 0 15px;
}

.rp-date,
.rp-type {
  font-weight: 500;
  font: 1em;
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

.fw-container {
  margin-bottom: 50px;
}

.fw-card {
  margin: 15px;
  border-bottom: 1px solid #e0e0e0;
}

.fw-image-crop {
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

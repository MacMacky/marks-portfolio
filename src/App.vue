<template>
  <router-view></router-view>
</template>

<script>
import Main from "./views/Main.vue";
export default {
  name: "App",
  components: {
    MainApp: Main
  }
};
</script>
<style>
@media screen and (max-width: 676px) {
  .nav-menu {
    display: none !important;
  }
}

.dark-text {
  color: #000 !important;
}

@media screen and (min-width: 678px) {
  #menu {
    display: none;
  }
}

.mt-large {
  margin-top: 160px;
}

.card-project,
.blog-card {
  border-radius: 8px;
}

.v-badge__badge {
  height: 25px;
  width: 25px;
}

.blog-card {
  margin-right: 15px;
}

svg.link {
  width: 30px;
  height: 30px;
}

path {
  transition: fill 0.3s ease-in-out;
}
svg.fa-facebook-square:hover path {
  fill: #496db9 !important;
}
svg.fa-github:hover path {
  fill: #000 !important;
}
svg.fa-linkedin:hover path {
  fill: #2b7ff5 !important;
}
html {
  scroll-behavior: smooth;
}
svg {
  width: 140px;
  height: 100px;
  transition: all 0.35s ease-in-out;
}
svg.small {
  width: 50px !important;
  height: 50px !important;
}
svg:hover:not(.link) {
  cursor: pointer;
  width: 160px;
  height: 130px;
}
</style>
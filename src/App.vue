<template>
  <v-app class="dark" dark>
    <v-navigation-drawer v-model="open" absolute temporary app mobile-break-point="1264">
      <v-list dense class="pt-0">
        <v-list-tile to="#what">
          <v-list-tile-content>
            <v-list-tile-title class="text-xs-center title">
              <v-icon class="pr-2">home</v-icon>Home
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="#what">
          <v-list-tile-content>
            <v-list-tile-title class="text-xs-center title">
              <v-icon class="pr-2">home</v-icon>Home
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Mark A</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-for="item in navData" :key="item.to" class="nav-menu" flat :href="item.to">
        <span class="mr-2">{{item.text}}</span>
      </v-btn>
      <v-btn flat id="menu" @click="open = !open">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      open: false,
      navData: [
        { to: "#home", text: "Home" },
        { to: "#skills", text: "Skills" },
        { to: "#timeline", text: "Timeline" },
        { to: "#projects", text: "Projects" },
        { to: "#about", text: "About" },
        { to: "#contact", text: "Contact" }
      ]
    };
  },
  methods: {
    handleResize(e) {
      const width =
        window.innerWidth ||
        document.documentElement.clientHeight ||
        document.body.clientWidth;
      if (width >= 678 && this.open) {
        this.open = false;
      }
    }
  },
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>
<style>
@media screen and (max-width: 676px) {
  .nav-menu {
    display: none !important;
  }
}

@media screen and (min-width: 678px) {
  #menu {
    display: none;
  }
}
</style>
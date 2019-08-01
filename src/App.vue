<template>
  <div>
    <v-app class="dark" dark>
      <v-navigation-drawer app v-model="open" clipped temporary mobile-break-point="1264">
        <v-list dense class="pt-5 mt-5">
          <sidebar-item
            v-for="item in sideBarItems"
            :key="item.label"
            :to="item.to"
            :label="item.label"
            :icon="item.icon"
          />
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

      <v-content id="home">
        <Home />
      </v-content>

      <Skills />

      <Timeline />

      <Projects />

      <About />

      <Contact />
      <portfolio-footer />
    </v-app>
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Skills from "./views/Skills.vue";
import Contact from "./views/Contact.vue";
import Timeline from "./views/Timeline.vue";
import Projects from "./views/Projects.vue";
import Linkedin from "@/components/svgs/Linkedin.vue";

import Footer from "@/components/Footer.vue";
import SideBarItem from "@/components/SideBarItem.vue";

export default {
  name: "App",
  components: {
    Home,
    About,
    Contact,
    Skills,
    Projects,
    Timeline,
    Linkedin,
    "sidebar-item": SideBarItem,
    "portfolio-footer": Footer
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
      ],
      sideBarItems: [
        {
          icon: "home",
          label: "Home",
          to: "#home"
        },
        {
          icon: "create",
          label: "Skills",
          to: "#skills"
        },
        {
          icon: "timeline",
          label: "Timeline",
          to: "#timeline"
        },
        {
          icon: "work",
          label: "Projects",
          to: "#projects"
        },
        {
          icon: "person",
          label: "About",
          to: "#about"
        },
        {
          icon: "phone",
          label: "Contact",
          to: "#contact"
        }
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

.mt-large {
  margin-top: 160px;
}

.card-project {
  border-radius: 8px;
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
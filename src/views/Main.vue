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
        <nav-item
          v-for="item in navData"
          :key="item.to"
          :isRouterLink="item.isRouterLink"
          :text="item.text"
          :to="item.to"
        ></nav-item>
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
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Skills from "@/views/Skills.vue";
import Contact from "@/views/Contact.vue";
import Timeline from "@/views/Timeline.vue";
import Projects from "@/views/Projects.vue";
import Linkedin from "@/components/svgs/Linkedin.vue";
import NavItem from "@/components/NavItem.vue";

import Footer from "@/components/Footer.vue";
import SideBarItem from "@/components/SideBarItem.vue";

export default {
  name: "Main",
  components: {
    Home,
    About,
    Skills,
    NavItem,
    Contact,
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
        { to: "/blog", text: "Blog", isRouterLink: true },
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
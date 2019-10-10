<template>
  <p class="title mb-1">
    <v-btn
      icon
      title="Linkedin"
      href="https://ph.linkedin.com/in/mark-abeto-080644177"
      target="__blank"
    >
      <linkedin />
    </v-btn>
    <v-btn icon title="Github" href="https://github.com/MacMacky" target="__blank">
      <github :classes="'link'" />
    </v-btn>
    <v-btn icon title="facebook" href="https://www.facebook.com/Mac2Macky" target="__blank">
      <facebook />
    </v-btn>
    <v-btn icon title="DEV" href="https://dev.to/macmacky" target="__blank">
      <dev />
    </v-btn>
  </p>
</template>
<script>
import Github from "@/components/svgs/Github.vue";
import Facebook from "@/components/svgs/Facebook.vue";
import Linkedin from "@/components/svgs/Linkedin.vue";
import Dev from "@/components/svgs/Dev.vue";

export default {
  name: "Links",
  components: {
    Github,
    Facebook,
    Linkedin,
    Dev
  }
};
</script>

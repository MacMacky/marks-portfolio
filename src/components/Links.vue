<template>
  <p class="title mb-1">
    <v-btn icon title="Linkedin">
      <linkedin />
    </v-btn>
    <v-btn icon title="Github">
      <github :classes="'link'" />
    </v-btn>
    <v-btn icon title="facebook">
      <facebook />
    </v-btn>
  </p>
</template>
<script>
import Github from "@/components/svgs/Github.vue";
import Facebook from "@/components/svgs/Facebook.vue";
import Linkedin from "@/components/svgs/Linkedin.vue";

export default {
  name: "Links",
  components: {
    Github,
    Facebook,
    Linkedin
  }
};
</script>

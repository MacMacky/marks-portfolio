<template>
  <v-btn :to="isRouterLink ? to : null" class="nav-menu" flat :href="isRouterLink ? null :to">
    <span class="mr-2">{{text}}</span>
  </v-btn>
</template>
<script>
export default {
  name: "NavItem",
  props: {
    to: {
      type: String,
      required: true
    },
    isRouterLink: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>
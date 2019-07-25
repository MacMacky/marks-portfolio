<template>
  <v-card :color="color" :ripple="isRipple">
    <v-card-title
      :class="`headline text-xs-center d-block white--text ${title === '' ? 'pt-0' : ''}`"
    >{{title}}</v-card-title>
    <v-card-text class="text-xs-center">
      <slot></slot>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "CardSkill",
  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    isRipple: {
      type: Boolean,
      default: true
    }
  }
};
</script>


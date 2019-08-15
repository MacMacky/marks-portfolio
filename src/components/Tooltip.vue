<template>
  <v-tooltip bottom color="white" class="text-xs-center">
    <template v-slot:activator="{on}">
      <i v-on="on" class="mb-2">
        <slot></slot>
      </i>
    </template>
    <span class="black--text text-xs-center d-block">{{label}}</span>
    <!-- <div class="text-xs-center">
      <v-progress-circular size="45" color="cyan darken-1" :value="mastery">{{mastery}}%</v-progress-circular>
    </div> -->
  </v-tooltip>
</template>
<script>
export default {
  name: "TooltipS",
  props: {
    label: {
      type: String,
      required: true
    },
    mastery: {
      type: [Number, String],
      required: true
    }
  },
  computed: {}
};
</script>

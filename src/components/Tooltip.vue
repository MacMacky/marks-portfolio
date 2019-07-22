<template>
  <v-tooltip bottom :color="tooltipBackground" class="text-xs-center">
    <template v-slot:activator="{on}">
      <i v-on="on" class="mb-2">
        <slot></slot>
      </i>
    </template>
    <span :class="`${tooltipTextColor} text-xs-center d-block`">{{label}}</span>
    <div class="text-xs-center">
      <v-progress-circular size="45" color="cyan darken-1" :value="mastery">{{mastery}}%</v-progress-circular>
    </div>
  </v-tooltip>
</template>
<script>
import { mapGetters } from "vuex";

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
  computed: {
    ...mapGetters(["tooltipBackground", "tooltipTextColor"])
  }
};
</script>

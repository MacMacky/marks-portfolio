<template>
  <v-list-tile :href="to" :key="label">
    <v-list-tile-content>
      <v-list-tile-title class="text-xs-center title">
        <v-icon class="pr-2">{{icon}}</v-icon>
        {{label}}
      </v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>
<script>
export default {
  name: "SideBarItem",
  props: {
    to: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
};
</script>


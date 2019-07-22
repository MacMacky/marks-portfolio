<template>
  <v-flex xs12 md12 lg12 class="mb-5" :style="style">
    <v-layout pa-2 column fill-height class="lightbox white--text text-xs-center home">
      <v-flex class="mt-5">
        <v-avatar color="grey lighten-4" :size="'256px'">
          <v-img :src="require('../assets/wtf.svg')" />
        </v-avatar>
        <v-layout justify-center class="pt-2">
          <v-flex xs12 md6 lg4>
            <v-card color="grey darken-3">
              <v-card-text id="what">
                <p class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p class="title">Eaque, porro atque. Totam fugiat saepe dolor, laboriosam amet,</p>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
import backgroundImage from "@/assets/js-background.jpeg";

export default {
  name: "HelloWorld",
  data() {
    return {
      style: {
        background: `url(${backgroundImage})`,
        width: "100%",
        height: "130%",
        backgroundSize: "cover"
      }
    };
  }
};
</script>
<style>
</style>

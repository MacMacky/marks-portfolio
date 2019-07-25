<template>
  <v-card color="white" style="border-radius:6px" class="ma-3">
    <v-img :src="require('../assets/ezgif.com-gif-maker.gif')" height="200px"></v-img>
    <v-card-text class="blue-grey lighten-5 pb-0">
      <div>
        <div class="headline black--text">{{projectName}}</div>
        <span class="title blue-grey--text darken-4">
          Role:
          <span class="subheading">{{role}}</span>
        </span>
      </div>
      <h5 class="title font-weight-regular black--text text-xs-center mt-2">Technologies Used</h5>
      <v-layout row class="mt-3" justify-space-between>
        <v-flex xs5>
          <p class="body-2 black--text text-xs-center">Front</p>
          <v-layout row class="mt-3">
            <v-flex xs3 sm4 md6 v-for="(comp,index) in frontTechnologies[0]" :key="index">
              <component :is="comp" :classes="'link'"></component>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs3 sm4 md6 v-for="(comp,index) in frontTechnologies[1]" :key="index">
              <component :is="comp" :classes="'link'"></component>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs5>
          <p class="body-2 black--text text-xs-center">Back</p>
          <v-layout row class="mt-3">
            <v-flex xs3 sm4 md6 v-for="(comp,index) in backTechnologies[0]" :key="index">
              <component :is="comp" :classes="'link'"></component>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs3 sm4 md6 v-for="(comp,index) in backTechnologies[1]" :key="index">
              <component :is="comp" :classes="'link'"></component>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-text class="blue-grey lighten-5 pt-1 pb-1">
      <v-layout row mt-1 pt-1>
        <v-flex xs6 md6 justify-center>
          <p class="text-xs-center mb-0">
            <v-btn icon target="__blank">
              <v-icon color="grey darken-4">open_in_browser</v-icon>&nbsp;
              <span class="black--text">&nbsp; View</span>
            </v-btn>
          </p>
        </v-flex>
        <v-flex xs6 md6 justify-center>
          <p class="text-xs-center mb-0">
            <v-btn flat href="https://www.google.com" target="__blank">
              <v-icon color="grey darken-4">code</v-icon>
              <span class="black--text">&nbsp; Source Code</span>
            </v-btn>
          </p>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "CardProject",
  props: {
    role: {
      type: String,
      required: true
    },
    projectName: {
      type: String,
      required: true
    },
    frontTechnologies: {
      type: Array,
      default: () => []
    },
    backTechnologies: {
      type: Array,
      default: () => []
    }
  }
};
</script>

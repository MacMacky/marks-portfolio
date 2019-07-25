<template>
  <div id="projects" class="pt-5 mt-3">
    <h4 class="display-1 text-xs-center mt-4">Projects</h4>
    <v-container>
      <v-layout wrap row justify-center>
        <v-flex xs12 md5 lg4>
          <card-project
            :projectName="'ML Shop Merchant'"
            :role="'Full Stack'"
            :frontTechnologies="mlshopmerchantFront"
            :backTechnologies="mlshopadmin"
          ></card-project>
        </v-flex>
        <v-flex xs12 md5 lg4>
          <card-project
            :role="'Back-End'"
            :projectName="'ML Shop Admin'"
            :backTechnologies="mlshopadmin"
          ></card-project>
        </v-flex>
        <v-flex xs12 md5 lg4>
          <card-project
            :role="'Back-End'"
            :projectName="'ML Shop Admin'"
            :backTechnologies="mlshopadmin"
          ></card-project>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import CardProject from "@/components/CardProject.vue";

import Jest from "@/components/svgs/Jest.vue";
import Sass from "@/components/svgs/Sass.vue";
import React from "@/components/svgs/React.vue";
import Mysql from "@/components/svgs/Mysql.vue";
import Redux from "@/components/svgs/Redux.vue";
import Nodejs from "@/components/svgs/NodeJS.vue";
import Express from "@/components/svgs/Express.vue";
import Typescript from "@/components/svgs/Typescript.vue";
import Javascript from "@/components/svgs/Javascript.vue";
import MaterialUI from "@/components/svgs/MaterialUI.vue";

export default {
  name: "Projects",
  data: () => {
    return {
      mlshopadmin: [[Nodejs, Express, Mysql, Jest], [Typescript]],
      mlshopmerchantFront: [
        [React, MaterialUI, Redux, Sass],
        [Jest, Typescript, Javascript]
      ]
    };
  },
  components: {
    Jest,
    Sass,
    Redux,
    Mysql,
    React,
    Nodejs,
    Express,
    CardProject,
    "material-ui": MaterialUI,
    Javascript,
    Typescript
  }
};
</script>


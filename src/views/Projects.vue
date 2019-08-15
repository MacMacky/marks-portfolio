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
            :backTechnologies="walletuploadweb"
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
            :projectName="'Wallet Batch Upload Partners'"
            :backTechnologies="walletuploadweb"
          ></card-project>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import CardProject from "@/components/CardProject.vue";

import Chai from "@/components/svgs/Chai.vue";
import Jest from "@/components/svgs/Jest.vue";
import Sass from "@/components/svgs/Sass.vue";
import React from "@/components/svgs/React.vue";
import MySQL from "@/components/svgs/Mysql.vue";
import Mocha from "@/components/svgs/Mocha.vue";
import Redux from "@/components/svgs/Redux.vue";
import Nodejs from "@/components/svgs/NodeJS.vue";
import Express from "@/components/svgs/Express.vue";
import TypeScript from "@/components/svgs/Typescript.vue";
import Javascript from "@/components/svgs/Javascript.vue";
import MaterialUI from "@/components/svgs/MaterialUI.vue";

export default {
  name: "Projects",
  data: () => {
    return {
      mlshopadmin: [[Nodejs, Express, MySQL], [Mocha, Chai, TypeScript]],
      walletuploadweb: [[Nodejs, Express, MySQL], [TypeScript, Jest]],
      mlshopmerchantFront: [
        [React, MaterialUI, Redux, Sass],
        [Jest, TypeScript, Javascript]
      ]
    };
  },
  components: {
    CardProject
  }
};
</script>


<template>
  <div id="skills" class="pt-5 mt-large">
    <h4 class="display-1 text-xs-center mt-4">Skills</h4>
    <v-container>
      <v-layout row justify-space-around>
        <v-flex xs12 md5 lg5>
          <card-skill :title="'Main Skills'" :color="'blue darken-3'">
            <tooltip :label="'JavaScript'" :mastery="80">
              <javascript />
            </tooltip>
            <tooltip :label="'React'" :mastery="85">
              <react />
            </tooltip>
            <tooltip :label="'Express.js'" :mastery="70">
              <express />
            </tooltip>
            <tooltip :label="'TypeScript'" :mastery="70">
              <typescript />
            </tooltip>
            <tooltip :label="'Node.js'" :mastery="70">
              <nodejs />
            </tooltip>
            <tooltip :label="'Python'" :mastery="65">
              <python />
            </tooltip>
            <tooltip :label="'HTML5'" :mastery="65">
              <htmll />
            </tooltip>
            <tooltip :label="'CSS3'" :mastery="65">
              <css />
            </tooltip>
          </card-skill>
        </v-flex>
        <v-flex xs12 md5 lg5>
          <card-skill :title="'Sub-skills'" :color="'light-blue lighten-2'">
            <tooltip :label="'jQuery'" :mastery="85">
              <jquery />
            </tooltip>
            <tooltip :label="'Redux'" :mastery="75">
              <redux />
            </tooltip>
            <tooltip :label="'MySQL'" :mastery="55">
              <mysql />
            </tooltip>
            <tooltip :label="'Material-UI'" :mastery="70">
              <materialui />
            </tooltip>
            <tooltip :label="'Webpack'" :mastery="50">
              <webpack />
            </tooltip>
            <tooltip :label="'Jest'" :mastery="75">
              <jest />
            </tooltip>
            <tooltip :label="'Vue.js'" :mastery="60">
              <vue />
            </tooltip>
            <tooltip :label="'Sass'" :mastery="55">
              <sass />
            </tooltip>
            <tooltip :label="'Bootstrap'" :mastery="75">
              <bootstrap />
            </tooltip>
            <tooltip :label="'Git'" :mastery="50">
              <git />
            </tooltip>
            <tooltip :label="'Github'" :mastery="40">
              <github />
            </tooltip>
            <tooltip :label="'Vuetify'" :mastery="70">
              <vuetify />
            </tooltip>
          </card-skill>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import CardSkill from "@/components/CardSkill";
import Tooltip from "@/components/Tooltip";

import Javascript from "@/components/svgs/Javascript";
import React from "@/components/svgs/React";
import Express from "@/components/svgs/Express";
import Typescript from "@/components/svgs/Typescript";
import Nodejs from "@/components/svgs/NodeJS";
import Python from "@/components/svgs/Python";
import Htmll from "@/components/svgs/HTML5";
import Css from "@/components/svgs/CSS3";

import Webpack from "@/components/svgs/Webpack";
import Bootstrap from "@/components/svgs/Bootstrap";
import Vue from "@/components/svgs/Vuejs";
import Jest from "@/components/svgs/Jest";
import Redux from "@/components/svgs/Redux";
import Mysql from "@/components/svgs/Mysql";
import Materialui from "@/components/svgs/MaterialUI";
import Sass from "@/components/svgs/Sass";
import Jquery from "@/components/svgs/jQuery";
import Git from "@/components/svgs/Git";
import Github from "@/components/svgs/Github";
import Vuetify from "@/components/svgs/Vuetify";

export default {
  name: "Skills",
  components: {
    Git,
    Vue,
    Sass,
    Css,
    Jest,
    Htmll,
    Mysql,
    Redux,
    React,
    Github,
    Jquery,
    Python,
    Nodejs,
    Vuetify,
    Webpack,
    Express,
    Tooltip,
    Bootstrap,
    CardSkill,
    Javascript,
    Typescript,
    Materialui
  }
};
</script>

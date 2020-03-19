<template>
  <div id="skills" class="pt-5 mt-large">
    <h4 class="display-1 text-xs-center mt-4">Skills</h4>
    <v-container>
      <v-layout row justify-space-around>
        <v-flex xs12 md5 lg5>
          <card-skill :title="'Main Skills'" :color="'blue darken-3'">
            <tooltip
              v-for="item in mainSkills"
              :label="item.label"
              :key="item.label"
              :mastery="item.mastery"
            >
              <component :is="item.component"></component>
            </tooltip>
          </card-skill>
        </v-flex>
        <v-flex xs12 md5 lg5>
          <card-skill :title="'Sub-skills'" :color="'light-blue lighten-2'">
            <tooltip
              v-for="item in subSkills"
              :label="item.label"
              :key="item.label"
              :mastery="item.mastery"
            >
              <component :is="item.component"></component>
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
import Restify from "@/components/svgs/Restify";
import Nodejs from "@/components/svgs/NodeJS";
import Python from "@/components/svgs/Python";
import Htmll from "@/components/svgs/HTML5";
import Css from "@/components/svgs/CSS3";
import ES6 from "@/components/svgs/ES6";

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
import Mocha from "@/components/svgs/Mocha";
import Chai from "@/components/svgs/Chai";
import Flask from "@/components/svgs/Flask";
import RethinkDB from "@/components/svgs/RethinkDB";

export default {
  name: "Skills",
  components: {
    ES6,
    Git,
    Vue,
    Css,
    Chai,
    Sass,
    Jest,
    Flask,
    Htmll,
    Mysql,
    Mocha,
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
    Materialui,
    Restify
  },
  computed: {
    mainSkills() {
      return [
        { component: Javascript, mastery: 80, label: "Javascript" },
        { component: React, mastery: 85, label: "React" },
        { component: Express, mastery: 70, label: "Express.js" },
        { component: Typescript, mastery: 70, label: "TypeScript" },
        { component: Nodejs, mastery: 70, label: "Node.js" },
        { component: Python, mastery: 65, label: "Python" },
        { component: Htmll, mastery: 65, label: "HTML5" },
        { component: Css, mastery: 65, label: "CSS3" },
        { component: ES6, mastery: 80, label: "ES6" },
        { component: Restify, mastery: 80, label: "Restify" }
      ];
    },
    subSkills() {
      return [
        { component: Jquery, mastery: 85, label: "jQuery" },
        { component: Redux, mastery: 75, label: "Redux" },
        { component: Mysql, mastery: 55, label: "MySQL" },
        { component: Materialui, mastery: 70, label: "Material-UI" },
        { component: Webpack, mastery: 50, label: "Webpack" },
        { component: Jest, mastery: 75, label: "Jest" },
        { component: Vue, mastery: 60, label: "Vue.js" },
        { component: Sass, mastery: 55, label: "Sass" },
        { component: Bootstrap, mastery: 75, label: "Bootstrap" },
        { component: Git, mastery: 50, label: "Git" },
        { component: Github, mastery: 40, label: "Github" },
        { component: Vuetify, mastery: 70, label: "Vuetify" },
        { component: Chai, mastery: 45, label: "Chai" },
        { component: Mocha, mastery: 55, label: "Mocha" },
        { component: RethinkDB, mastery: 55, label: "RethinkDB" }
        // { component: Flask, mastery: 55, label: "Flask" }
      ];
    }
  }
};
</script>

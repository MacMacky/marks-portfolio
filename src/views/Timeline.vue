<template>
  <div id="timeline" class="pt-5 mt-3">
    <h4 class="display-1 text-xs-center mt-4">Timeline</h4>
    <v-layout justify-center mt-1>
      <v-flex xs9>
        <v-timeline>
          <time-line-item
            v-for="item in timelineItems"
            :key="item.date"
            :date="item.date"
            :color="item.color"
            :title="item.title"
            :imgSrc="item.src"
            :card-message="item.cardMessage"
          ></time-line-item>
        </v-timeline>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import TimeLineItem from "@/components/TimelineItem.vue";
import MLLogo from "@/assets/mlhuillier_logo.jpg";
import CITLogo from "@/assets/school_logo.jpg";

export default {
  name: "Timeline",
  components: {
    TimeLineItem
  },
  data() {
    return {
      timelineItems: [
        {
          color: "red darken-4",
          src: MLLogo,
          date: "2019 October",
          title: "Resigned after two years",
          cardMessage: `My responsibilities were developing several fast RESTful APIs using used by several projects in our team.
          designed and developed an Ecommerce web application in our company and deployed in production and improve the performance of the web application by using memoization 
          a technique that optimizes a pure functions performance. Collaborating with the QA team during the testing phases for troubleshooting
          or debugging, writing scripts for logging error and other useful informations in different testing phases and production for easy troubleshooting.
          Interface with other development teams in the organization for projects that have common problems and diagnose them.`
        },
        {
          color: "red darken-4",
          src: MLLogo,
          date: "2017 September",
          title: "Started Working at MLhuillier",
          cardMessage: `Finally have a Job in a great company as a Software Developer.`
        },
        {
          color: "#E7C800",
          src: CITLogo,
          date: "2017 March",
          title: "College Journey Ended",
          cardMessage: `I have a lot of memorable experiences on my five years
          studying in CIT-U, the sleepless nights, playing Dota 2 with my classmates, the classroom teasing and drama.
          I'm gonna miss my classmates and everything about that school. It's sad but when one journey ends
          another one starts. 
          `
        },
        {
          src: CITLogo,
          title: "Started Studying Computer Engineering",
          cardMessage: `Didnt attend my first two subjects in my first day because classroom names
            where weird, numbers with letters I was lost a lot and I was embarrassed to asked because I didn't speak Cebuano and my Tagalog accent was funny.`
        }
      ]
    };
  }
};
</script>

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
          cardMessage: [
            "Performing unit testing for several Restful API's and avoided several system failures.",
            `Handling Full Stack programming tasks for the development of a Ecommerce web app using Reactjs,
              MySQL, Nodejs and Improve coding practices for the project for maintainability and optimizing the performance by using memoization.`,
            `Troubleshooting & Bugs Fixing for several projects in different testing phases and 
                          avoided Production errors.`,
            `Maintaining Web application Legacy Systems utilizing ASP.NET.`
          ]
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

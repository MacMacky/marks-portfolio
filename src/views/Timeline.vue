<template>
  <v-layout justify-center mt-1>
    <v-flex xs9>
      <v-timeline>
        <time-line-item
          v-for="item in timelineItems"
          :key="item.color"
          :color="item.color"
          :imgSrc="item.src"
          :date="item.date"
        ></time-line-item>
      </v-timeline>
    </v-flex>
  </v-layout>
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
        { color: "red darken-4", src: MLLogo },
        { color: "#E7C800", src: CITLogo, date: "2017 March" },
        { src: CITLogo }
      ]
    };
  }
};
</script>

<template>
  <v-timeline-item :color="color">
    <template v-slot:icon>
      <v-avatar>
        <img :style="{content:`url(${imgSrc})`}" />
      </v-avatar>
    </template>
    <template v-slot:opposite>
      <span class="headline font-weight-bold" v-text="date"></span>
    </template>
    <v-card :color="color" dark>
      <v-card-title class="title">{{title}}</v-card-title>
      <v-card-text class="white black--text">
        <template v-if="Array.isArray(cardMessage)">
          <ul>
            <li v-for="(item, index) in cardMessage" :key="index">{{item}}</li>
          </ul>
        </template>
        <template v-else>
          <p>{{cardMessage}}</p>
        </template>
      </v-card-text>
    </v-card>
  </v-timeline-item>
</template>
<script>
export default {
  name: "Timeline-Item",
  props: {
    date: {
      type: String,
      default: "2012 June"
    },
    color: {
      type: String,
      default: "#8F303B"
    },
    imgSrc: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: "Lorem ipsum dolor"
    },
    cardMessage: {
      type: [String, Array],
      default:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora distinctio dolorem omnis, beatae dicta pariatur molestiae, voluptate possimus ipsum ipsam consequatur illo! Dignissimos deleniti totam tempora optio doloremque vitae eius."
    }
  }
};
</script>

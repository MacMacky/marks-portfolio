<template>
  <v-timeline-item :color="color">
    <template v-slot:icon>
      <v-avatar>
        <img :src="imgSrc" />
      </v-avatar>
    </template>
    <template v-slot:opposite>
      <span class="headline font-weight-bold" v-text="date"></span>
    </template>
    <v-card :color="color" dark>
      <v-card-title class="title" v-text="title"></v-card-title>
      <v-card-text class="white black--text">
        <p v-text="cardMessage"></p>
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
      default: "Lorem Ipsum Dolor"
    },
    cardMessage: {
      type: String,
      default:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora distinctio dolorem omnis, beatae dicta pariatur molestiae, voluptate possimus ipsum ipsam consequatur illo! Dignissimos deleniti totam tempora optio doloremque vitae eius."
    }
  }
};
</script>


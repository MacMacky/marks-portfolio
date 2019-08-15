<template>
  <v-flex xs12 sm6 md4>
    <v-card color="white" class="blog-card ma-3" :href="url" target="__blank">
      <v-img :src="imgSrc ? imgSrc : NotFoundImage" position="center"></v-img>
      <v-card-title>
        <div class="text-xs-center headline black--text">{{title}}</div>
      </v-card-title>
      <v-layout align-center justify-center pb-3>
        <v-icon large color="red">favorite</v-icon>
        <span class="subheading mr-2 dark-text">{{likes}}</span>
        <v-icon large color="blue">comment</v-icon>
        <span class="subheading mr-2 dark-text">{{commentsCount}}</span>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<script>
import NotFoundImage from "@/assets/not_found_image.jpg";

export default {
  name: "BlogItem",
  data() {
    return {
      NotFoundImage
    };
  },
  props: {
    imgSrc: {
      type: String,
      default: () => NotFoundImage
    },
    title: {
      type: String,
      required: true
    },
    likes: {
      type: Number,
      required: true
    },
    commentsCount: {
      type: Number,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
};
</script>

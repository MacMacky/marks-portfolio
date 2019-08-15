<template>
  <div>
    <v-app class="dark" dark>
      <v-toolbar app>
        <v-toolbar-title to="/" class="headline text-uppercase">
          <span class="font-weight-light">Mark A</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="nav-menu" flat to="/">
          <span class="mr-2">Home</span>
        </v-btn>
      </v-toolbar>
      <v-container>
        <h1 class="font-weight-medium">Blog</h1>
        <v-layout row justify-center wrap>
          <blog-item
            v-for="blog in blogs"
            :key="blog.title"
            :title="blog.title"
            :imgSrc="blog.cover_image"
            :likes="blog.positive_reactions_count"
            :commentsCount="blog.comments_count"
            :url="blog.url"
          ></blog-item>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>
<script>
import BlogItem from "@/components/BlogItem.vue";

export default {
  name: "Blog",
  data() {
    return {
      blogs: []
    };
  },
  async created() {
    const resp = await fetch("https://dev.to/api/articles?username=macmacky");
    const data = await resp.json();
    this.blogs = data;
  },
  components: {
    BlogItem
  }
};
</script>

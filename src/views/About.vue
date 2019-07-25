<template>
  <div id="about" class="pt-5 mt-3">
    <h4 class="display-1 text-xs-center mt-4">About</h4>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm12 md4 lg4 class="text-xs-center">
          <v-avatar color="grey lighten-4 mb-2" :size="'256px'">
            <v-img :src="require('../assets/man.png')" />
          </v-avatar>
        </v-flex>
        <v-flex xs12 sm12 md8 lg8>
          <p
            class="subheading text-xs-left"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta quos qui maiores exercitationem, modi culpa sint omnis, quisquam praesentium nulla delectus at, enim corporis. Repudiandae delectus necessitatibus numquam ducimus?</p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "About"
};
</script>

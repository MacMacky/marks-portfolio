<template>
  <v-container>
    <v-layout row>
      <v-flex xs4 sm4 md4 lg4>
        <v-avatar color="grey lighten-4" :size="'256px'">
          <v-img :src="require('../assets/man.png')" />
        </v-avatar>
      </v-flex>
      <v-flex xs8 sm8 md8 lg8>
        <p
          class="subheading text-xs-left"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta quos qui maiores exercitationem, modi culpa sint omnis, quisquam praesentium nulla delectus at, enim corporis. Repudiandae delectus necessitatibus numquam ducimus?</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "About"
};
</script>

<template>
  <v-container class="py-0">
    <v-layout row justify-center>
      <v-flex xs6>
        <card-skill :color="'grey lighten-4'" :title="''" :isRipple="false">
          <v-layout row justify-space-around>
            <v-flex xs5>
              <v-text-field label="Name" outline full-width light append-icon="person" />
            </v-flex>
            <v-flex xs5>
              <v-text-field
                label="Email"
                type="email"
                outline
                full-width
                light
                append-icon="email"
              />
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs11>
              <v-text-field label="Location" outline full-width light append-icon="place" />
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs11>
              <v-textarea label="Message" outline light value="asd" append-icon="message"></v-textarea>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs11>
              <v-btn color="blue" block dark @click="handleSendMessage" :loading="isSending">Send</v-btn>
            </v-flex>
          </v-layout>
        </card-skill>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import CardSkill from "@/components/CardSkill";
import { setTimeout } from "timers";

export default {
  name: "Contact",
  data: () => {
    return {
      isSending: false
    };
  },
  components: {
    CardSkill
  },
  methods: {
    handleSendMessage() {
      this.isSending = true;
      setTimeout(() => {
        this.isSending = false;
      }, 3000);
    }
  }
};
</script>

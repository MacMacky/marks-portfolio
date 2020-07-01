<template>
  <div id="contact" class="mt-5 pt-5">
    <h4 class="display-1 text-xs-center">Contact</h4>
    <v-container class="py-0">
      <v-layout row justify-center>
        <v-flex xs10 sm10 md8 lg7>
          <card-skill :color="'grey lighten-4'" :title="''" :isRipple="false">
            <v-layout row justify-space-around>
              <v-flex xs5>
                <v-text-field
                  light
                  outline
                  full-width
                  label="Name"
                  v-model="name"
                  :rules="nameRules"
                  append-icon="person"
                />
              </v-flex>
              <v-flex xs5>
                <v-text-field
                  light
                  outline
                  full-width
                  type="email"
                  label="Email"
                  v-model="email"
                  :rules="emailRules"
                  append-icon="email"
                />
              </v-flex>
            </v-layout>
            <v-layout justify-center>
              <v-flex xs11>
                <v-text-field
                  light
                  outline
                  full-width
                  label="Location"
                  v-model="location"
                  append-icon="place"
                  :rules="locationRules"
                />
              </v-flex>
            </v-layout>
            <v-layout justify-center>
              <v-flex xs11>
                <v-textarea
                  light
                  outline
                  label="Message"
                  v-model="message"
                  :rules="messageRules"
                  append-icon="message"
                ></v-textarea>
              </v-flex>
            </v-layout>
            <v-layout justify-center>
              <v-flex xs11>
                <v-btn color="blue" dark @click="handleSendMessage" :loading="isSending">Send</v-btn>
              </v-flex>
            </v-layout>
          </card-skill>
        </v-flex>
      </v-layout>
    </v-container>
    <v-snackbar
      :color="snackbarProps.color"
      bottom
      right
      absolute
      v-model="snackbarProps.open"
    >{{snackbarProps.message}}</v-snackbar>
  </div>
</template>
<script>
import CardSkill from '@/components/CardSkill.vue';
import { setTimeout } from 'timers';

export default {
  name: 'Contact',
  data: () => {
    return {
      isSending: false,
      email: '',
      location: '',
      name: '',
      message: '',
      hasValidValues: [false, false, false, false],
      snackbarProps: {
        open: false,
        message: 'adfafa',
        color: 'green',
      },
    };
  },
  created() {
    emailjs.init('user_mEN2ctZPReJpsfh9aVI8i');
  },
  components: {
    CardSkill,
  },
  computed: {
    emailRules() {
      return [
        v =>
          (this.setValidity(0, true), !!v) ||
          (this.setValidity(0, false), 'Email is Required'),
        v => /.+@.+\.{1}.{2,}/.test(v) || 'Please provide a valid Email',
      ];
    },
    messageRules() {
      return [
        v =>
          (this.setValidity(1, true), !!v) ||
          (this.setValidity(1, false), 'Message is Required'),
        v => (v && v.length > 10) || 'Please provide a valid Message',
      ];
    },
    locationRules() {
      return [
        v =>
          (this.setValidity(2, true), !!v) ||
          (this.setValidity(2, false), 'Location is Required'),
        v =>
          (this.setValidity(2, true), v && v.length > 3) ||
          (this.setValidity(2, false), 'Please provide a valid Location'),
      ];
    },
    nameRules() {
      return [
        v =>
          (this.setValidity(3, true), !!v) ||
          (this.setValidity(3, false), 'Name is Required'),
        v =>
          (this.setValidity(3, true), v && v.length > 3) ||
          (this.setValidity(3, false), 'Please provide a valid Name'),
      ];
    },
  },
  methods: {
    async handleSendMessage() {
      if (this.hasValidValues.some(value => !value)) {
        this.updateSnackbarProps(
          true,
          'Please provide values in the following fields',
          'red',
        );
      } else {
        try {
          this.isSending = true;
          const resp = await emailjs.send(
            'default_service',
            'template_GNsxgOTU',
            {
              to_name: 'Mark',
              from_name: this.name,
              message_html: this.message,
              from_location: this.location,
              from_email: this.email,
            },
          );
          this.isSending = false;
          this.updateSnackbarProps(
            true,
            'Your message has been sent Successfully.',
            'green',
          );
          this.clearFields();
        } catch (e) {
          this.isSending = false;
          var error = 'message in e'
            ? e.message
            : 'text' in e
            ? e.text
            : 'Something went wrong.';
          this.updateSnackbarProps(true, error, 'red');
        }
      }
    },
    updateSnackbarProps(open, message, color) {
      this.snackbarProps = {
        open,
        message,
        color,
      };
    },
    setValidity(index, isValid) {
      this.hasValidValues[index] = isValid;
    },
    clearFields() {
      (this.message = ''),
        (this.location = ''),
        (this.email = ''),
        (this.name = '');
    },
  },
};
</script>

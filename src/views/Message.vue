<template>
  <div class="about main-container">
    <v-btn @click="message('test')" class="mr-4">send message</v-btn>
    <v-btn @click="message('test', '1000')">send message (show 1s)</v-btn>
  </div>
</template>

<script>
import message from "@/utils/message";

export default {
  methods: {
    message,
  },
};
</script>

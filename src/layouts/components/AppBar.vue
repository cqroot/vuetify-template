<template>
  <v-app-bar
    app
    flat
    absolute
    color="white"
    style="border-bottom: 1px solid #d2d2d2 !important"
  >
    <v-app-bar-nav-icon @click="setDrawer(!drawer)"></v-app-bar-nav-icon>

    <v-toolbar-title
      class="hidden-sm-and-down font-weight-light"
      v-text="$route.name"
    />

    <v-spacer></v-spacer>

    <v-btn icon @click="setNight(!night)">
      <v-icon v-if="night">mdi-weather-night</v-icon>
      <v-icon v-else>mdi-weather-sunny</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["drawer", "night"]),
  },
  methods: {
    ...mapMutations(["setDrawer", "setNight"]),
  },
};
</script>

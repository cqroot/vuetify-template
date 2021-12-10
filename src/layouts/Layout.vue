<template>
  <v-app>
    <Sidebar> </Sidebar>

    <v-app-bar
      app
      flat
      absolute
      color="white"
      style="border-bottom: 1px solid #d2d2d2 !important"
    >
      <v-app-bar-nav-icon @click="setSidebar(!sidebar)"></v-app-bar-nav-icon>

      <v-toolbar-title
        class="hidden-sm-and-down font-weight-light"
        v-text="$route.name"
      />
    </v-app-bar>

    <v-main>
      <div class="main-container">
        <slot> </slot>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Sidebar from "./components/Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
  computed: {
    ...mapState(["sidebar"]),
  },
  methods: {
    ...mapMutations(["setSidebar"]),
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  margin: 20px;
  padding: 20px;
  background-color: white;
}
</style>

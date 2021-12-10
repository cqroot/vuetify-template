<template>
  <v-navigation-drawer
    app
    width="260"
    disable-resize-watcher
    class="app-navigation-menu"
    v-model="drawer"
    :dark="night"
  >
    <v-list-item style="min-height: 63px">
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Vuetify Template
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.link">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", link: "/dashboard" },
        { title: "About", icon: "mdi-help-box", link: "/about" },
      ],
    };
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("setDrawer", val);
      },
    },
    night: {
      get() {
        return this.$store.state.night;
      },
      set(val) {
        this.$store.commit("setNight", val);
      },
    },
  },
};
</script>

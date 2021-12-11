<template>
  <v-app>
    <Drawer> </Drawer>

    <AppBar> </AppBar>

    <v-main>
      <div style="margin: 20px">
        <slot> </slot>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Drawer from "./components/Drawer.vue";
import AppBar from "./components/AppBar.vue";

export default {
  components: {
    Drawer,
    AppBar,
  },
};
</script>

<style lang="scss" scoped></style>

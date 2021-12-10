<template>
  <v-app>
    <Drawer> </Drawer>

    <AppBar> </AppBar>

    <v-main>
      <div class="main-container">
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

<style lang="scss" scoped>
.main-container {
  margin: 20px;
  padding: 20px;
  background-color: white;
}
</style>

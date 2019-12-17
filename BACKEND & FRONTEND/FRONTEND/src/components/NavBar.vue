<template>
  <div>
    <v-toolbar id="navBar">
      <img src="../assets/Pinguin2.png" width="4%" style="margin-top: 15px; margin-left: 10px" />&nbsp;&nbsp;&nbsp;
      <v-toolbar-title
        style="color:white; font-weight: bold; font-size: 2em; margin-top: 15px"
      >Creasy</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items style="margin-top: 15px">
        <slot name="navBtn"></slot>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getLink() {
      this.$router.push("/Levels");
    }
  }
};
</script>
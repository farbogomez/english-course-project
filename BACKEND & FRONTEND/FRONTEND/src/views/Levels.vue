<template>
  <div id="level" class="boxing" bgcolor="blue">
    <navBar>
      <div slot="navBtn" style="margin-top: -15px; margin-right: -15px">
        <v-container fluid style="width:100%">
          <v-expansion-panels id="panel" popout>
            <v-expansion-panel hide-actions>
              <v-expansion-panel-header>
                <v-avatar size="36">
                  <img
                    alt="Avatar"
                    style="transform: translatex(-10px)"
                    src="../assets/login.jpg"
                    width="100px"
                  />
                </v-avatar>
                <span style="font-weight:bold">{{userLog}}</span>
              </v-expansion-panel-header>
              <v-expansion-panel-content id="n1">
                <v-divider></v-divider>
                <v-card-text
                  @click="logout"
                  style="font-weight:bold; cursor: pointer"
                  v-text="cerrarSesion"
                ></v-card-text>
              </v-expansion-panel-content>
              <v-divider></v-divider>
              <v-expansion-panel-content id="n2">
                <v-card-text style="font-weight:bold; cursor: pointer" v-text="profile"></v-card-text>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-container>
      </div>
    </navBar>
    <div class="box2">
      <h1
        class="motivation-box text text-section text--blueLight"
        style="padding-top: 50px; color: #424242"
      >Welcome !Play Now!</h1>
    </div>
    <div class="level-box">
      <div class="icon-level">
        <levelIcon />
        <!-- <a href="/topics">topics</a> -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import levelIcon from "../components/icons/level-icon.vue";
import NavBar from "../components/NavBar.vue";

export default {
  components: {
    levelIcon,
    NavBar
  },
  data: () => ({
    cerrarSesion: "Cerrar sesión",
    profile: "Perfíl"
  }),
  methods: {
    logout() {
      this.$store.commit("logueo", false);
      this.$store.commit("control", true);
      this.$router.push("/");
    }
  },
  computed: mapGetters(["userLog"])
};
</script> 

<style>
.box2 {
  padding-top: 3em;
  text-align: center;
  margin-bottom: 0.5em;
}

#level {
  background-image: url("../assets/bg_levels.svg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
}

#n1 .v-expansion-panel-content__wrap {
  padding-bottom: 2px;
}

#n1:hover {
  background-color: rgba(113, 174, 209, 0.26);
}

#n2 .v-expansion-panel-content__wrap {
  padding-bottom: 2px;
}

#n2:hover {
  background-color: rgba(113, 174, 209, 0.26);
}

#panel.v-expansion-panels .v-expansion-panel {
  width: 227px;
}
</style>-->
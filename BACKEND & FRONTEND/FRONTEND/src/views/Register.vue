<template>
  <div>
    <NavBar>
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
        <!-- <v-btn color="white black--text" dark>Salir</v-btn>&nbsp;&nbsp; -->
      </div>
    </NavBar>
    <div class="box1">
      <div @click="next1" class="start">
        <div></div>
      </div>
      <div @click="next2" class="test">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { mapGetters } from "vuex";

export default {
  components: { NavBar },
  data: () => ({
    cerrarSesion: "Cerrar sesión",
    profile: "Perfíl"
  }),
  methods: {
    next1() {
      this.$router.push("/levels");
    },
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
</style>

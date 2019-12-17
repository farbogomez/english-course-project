<template>
  <v-app>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- ----------------------------------------------------------------------------- -->
    <!-- ALERTS -->

    <v-flex class="modal3" v-if="alert == true">
      <div>
        <v-alert
          id="alerta"
          border="right"
          colored-border
          type="error"
          transition="scale-transition"
          elevation="2"
        >
          Usuario o contraseña incorrectos
          <span id="x" @click="cerrar">&times;</span>
        </v-alert>
        <!-- <v-btn depressed id="acceptar" @click="cerrar" class="white--text">ACEPTAR</v-btn> -->
      </div>
    </v-flex>

    <v-flex class="modal3" v-if="alert2 == true">
      <div>
        <v-alert
          id="alerta"
          border="right"
          colored-border
          type="warning"
          transition="scale-transition"
          elevation="2"
        >
          Complete todos los campos
          <span id="x2" @click="cerrar2">&times;</span>
        </v-alert>
        <!-- <v-btn depressed id="acceptar" @click="cerrar" class="white--text">ACEPTAR</v-btn> -->
      </div>
    </v-flex>

    <!-- ----------------------------------------------------------------------------- -->
    <!-- ----------------------------------------------------------------------------- -->
    <!-- NAVBAR -->

    <NavBar
      bgcolor="background-color: rgba(0, 0, 0, 0.397);position:fixed;box-shadow:none; height: 80px;"
    >
      <div slot="navBtn" style="margin-top: 13px; margin-right: 10px">
        <v-btn rounded @click="showAndClose2" color="white black--text" dark>Login</v-btn>&nbsp;&nbsp;
        <v-btn rounded @click="showAndClose" color="white black--text" dark>Sign in</v-btn>
      </div>
    </NavBar>

    <Banner></Banner>

    <!-- ----------------------------------------------------------------------------- -->
    <!-- ----------------------------------------------------------------------------- -->

    <!-- LOGIN -->

    <v-container class="start" v-if="verLogin == true">
      <div class="modal2">
        <div class="login">
          <v-card>
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Login</v-toolbar-title>
              <span class="close2" @click="showAndClose2">&times;</span>
              <v-spacer />
              <v-tooltip bottom></v-tooltip>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="User"
                  v-model="nickname"
                  name="user"
                  autofocus
                  required
                  prepend-icon="mdi-account"
                  type="text"
                />

                <v-text-field
                  id="password"
                  label="Password"
                  required
                  v-model="pass"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                />
              </v-form>
            </v-card-text>
            <v-card-actions style="margin-top: -20px; margin-left:140px">
              <v-btn style="width:140px" @click="login" color="primary">Login</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </v-container>

    <!-- ----------------------------------------------------------------------------- -->
    <!-- ----------------------------------------------------------------------------- -->

    <!-- REGISTER -->

    <v-container class="registro" v-if="verRegistro == true">
      <div class="modal">
        <div class="registrarse">
          <v-toolbar id="barRegistro">
            <h1>Register User</h1>
            <span class="close" @click="showAndClose">&times;</span>
          </v-toolbar>

          <v-form id="formRegistro">
            <div id="nombre">
              <v-text-field v-model="name" label="Name" autofocus box required></v-text-field>
            </div>

            <div id="last">
              <v-text-field v-model="lastname" label="Lastname" box required></v-text-field>
            </div>

            <div id="user">
              <v-text-field v-model="user" label="User" box required></v-text-field>
            </div>

            <div id="password2">
              <v-text-field
                v-model="password"
                label="Password"
                required
                box
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'password' : 'text'"
                @click:append="show = !show"
              ></v-text-field>
            </div>

            <v-btn id="registrar" @click="register" color="white--text">Sign in</v-btn>
          </v-form>
        </div>
      </div>
    </v-container>

    <v-container id="title">
      <h1>HOW TO PLAY?</h1>
    </v-container>

    <HelloWorld></HelloWorld>

    <!-- ----------------------------------------------------------------------------- -->
    <!-- ----------------------------------------------------------------------------- -->

    <!-- FOOTER -->

    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="blue">
          <div style="margin-left:480px">
            <v-btn class="mx-4" dark icon>
              <v-icon size="28px">mdi-facebook-box</v-icon>
            </v-btn>
            <v-btn class="mx-4" dark icon>
              <v-icon size="28px">mdi-gmail</v-icon>
            </v-btn>
            <v-btn class="mx-4" dark icon>
              <v-icon size="28px">mdi-instagram</v-icon>
            </v-btn>
            <v-btn class="mx-4" dark icon>
              <v-icon size="28px">mdi-whatsapp</v-icon>
            </v-btn>
            <v-btn class="mx-4" dark icon>
              <v-icon size="28px">mdi-twitter</v-icon>
            </v-btn>
          </div>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} —
          <strong>&copy; Todos los derechos reservados</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import axios from "axios";
import NavBar from "@/components/NavBar.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Banner from "@/components/Banner.vue";

export default {
  components: {
    NavBar,
    HelloWorld,
    Banner
  },
  data() {
    return {
      verRegistro: false,
      verLogin: false,
      alert: false,
      alert2: false,

      nickname: "",
      pass: "",
      userLog: "",

      name: "",
      lastname: "",
      user: "",
      password: "",
      show: true
    };
  },
  methods: {
    cerrar() {
      this.alert = false;
    },
    cerrar2() {
      this.alert2 = false;
    },
    showAndClose() {
      if (this.verRegistro == false) {
        this.verRegistro = true;
      } else {
        this.verRegistro = false;
      }
    },
    showAndClose2() {
      if (this.verLogin == false) {
        this.verLogin = true;
      } else {
        this.verLogin = false;
      }
    },
    login() {
      /* var vm = this;
      var cont = 0;
      axios.get(`http://localhost:8601/usuarios`).then(response => {
        response.data.allUsers.forEach(element => {
          if (vm.nickname == element.usuario && vm.pass == element.password) {
            cont++;
          }
        });
        if (cont > 0) {
          vm.$router.push("/register");
          this.verLogin = false;
          this.image = false;
        } else {
          alert("no");
        }
      }); */
      if (this.nickname !== "" && this.pass !== "") {
        axios
          .post(`http://localhost:8601/login`, {
            usuario: this.nickname,
            password: this.pass
          })
          .then(response => {
            console.log(response.data.login);
            if (response.data.login == null) {
              this.alert = true;
            } else {
              this.userLog =
                response.data.login.nombre_1 +
                " " +
                response.data.login.apellido_1;
              this.$store.commit("userLog", this.userLog);
              this.$store.commit("logueo", true);
              this.$store.commit("control", false);
              this.nickname = "";
              this.pass = "";
              this.$router.push("/register");
            }
          })
          .catch(err => {
            console.error(err);
          });
      } else {
        this.alert2 = true;
      }
    },
    register() {
      this.verRegistro = false;

      axios
        .post(`http://localhost:8601/usuarios`, {
          nombre_1: this.name,
          apellido_1: this.lastname,
          usuario: this.user,
          password: this.password
        })
        .then(response => {
          console.log(response.data);
          this.userLog =
            response.data.newUser.nombre_1 +
            " " +
            response.data.newUser.apellido_1;
          this.logueo = true;
          this.$store.commit("userLog", this.userLog);
          this.$store.commit("logueo", true);
          this.$store.commit("control", false);
          this.name = "";
          this.lastname = "";
          this.user = "";
          this.password = "";
          this.$router.push("/register");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>








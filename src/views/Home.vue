<template>
  <div class="home">
    <h1 class="my-4">Bienvenido</h1>
    <button class="btn btn-info" @click="logout">Cerrar sesión</button>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Home",
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
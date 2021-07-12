<template>
  <div>
    <Navbar :user="user" @logout="logout" />
    <b-container fluid>
      <router-view :user="user" />
    </b-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Firebase from "firebase";
// eslint-disable-next-line no-unused-vars

export default {
  name: "App",
  components: {
    Navbar,
  },
  data: function () {
    return {
      user: null,
    };
  },
  methods: {
    logout: function () {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.user = null;
          this.$router.push("login");
        });
    },
  },
  mounted() {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user.email;
      }
    });
  },
};
</script>

<style lang="scss">
</style>

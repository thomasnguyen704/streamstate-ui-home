<template>
  <div>
    <Navbar :user="user" />
    <b-container fluid>
      <router-view :user="user" />
    </b-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

// eslint-disable-next-line no-unused-vars
import Firebase from 'firebase';
import db from './db.js';

export default {
  name: 'App',
  components: {
    Navbar
  },
  data: function() {
    return {
      user: null
    };
  },
  mounted() {
    db.collection('users').doc('aZStNTjz6IcGqhphUylE').get().then( snapshot => { this.user = snapshot.data().name; })
  }
}
</script>

<style lang="scss">
</style>

<template>
  <div>
    <b-card title="Login" class="login-form">
      <b-card-text>
        <b-alert show variant="danger" v-if="error">{{ error }}</b-alert>
        <b-form @submit.prevent="login">
          <b-form-group id="input-group-email" label="Email Address" label-for="input-email">
            <b-form-input
              id="input-email"
              type="email"
              placeholder="Enter email"
              required
              v-model="email"
            />
          </b-form-group>
          <b-form-group id="input-group-password" label="Password" label-for="input-password">
            <b-form-input
              id="input-password"
              type="password"
              placeholder="Enter password"
              required
              v-model="password"
            />
          </b-form-group>
          <b-button type="submit">Login</b-button>
        </b-form>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Firebase from 'firebase';

export default {
  name: 'Login',
  data: function(){
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    login: function(){
      const info = {
        email: this.email,
        password: this.password
      }
      Firebase.auth()
        .signInWithEmailAndPassword(info.email, info.password)
        .then(
          ()=> { this.$router.push('/') }, 
          error => {
            this.error = error.message;
          }
        )
    }
  }
}
</script>

<style>
  .login-form {
    width: 30%;
  }
</style>
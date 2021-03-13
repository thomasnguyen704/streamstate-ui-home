<template>
  <nav class="small mb-3">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">Stream State</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-container fluid>
        <b-collapse id="nav-collapse" is-nav>

          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            
            <b-nav-item-dropdown right>
              <template #button-content>User Options</template>
              <b-dropdown-item disabled>{{user}}</b-dropdown-item>
              <b-dropdown-item to="/login">Login</b-dropdown-item>
              <b-dropdown-item to="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['user']
}
</script>

<style lang="scss" scoped>
</style>
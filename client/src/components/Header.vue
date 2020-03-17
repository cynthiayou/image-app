<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info" style="background-color: #eee;" >
    <b-navbar-brand href="#"><img src="../assets/logo.png" id="logo" alt=""></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item href="/login" v-if="!$store.state.isUserLoggedIn" >Login</b-nav-item>
        <b-nav-item href="/signup" v-if="!$store.state.isUserLoggedIn" >Signup</b-nav-item>
        <b-nav-item @click="logout" href="/" v-if="$store.state.isUserLoggedIn" >Logout</b-nav-item>
        <b-nav-item href="/upload" v-if="!$store.state.isUserLoggedIn" >Upload</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" v-bind="keyword" value="keyword" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button @click="search"  size="sm" class="my-2 my-sm-0" type="submit" >Search</b-button>
        </b-nav-form>        
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      alert("log out")
    },
    search (){
      
    }
  }
}
</script>

<style scoped>
.nav-link, button{
  color:#5e5e5e;
}
#logo{
  height:30px;
}

</style>
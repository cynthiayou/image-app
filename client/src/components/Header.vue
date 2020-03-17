<template>
<nav style="background-color: #eee;" class="navbar navbar-expand-lg">
  <a class="navbar-brand" href=""><img src="../assets/logo.png" id="logo" alt=""></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/" >Home <span class="sr-only">(current)</span></a>
      </li>
      <li v-if="!$store.state.isUserLoggedIn" class="nav-item">
        <a class="nav-link" href="/login">Login</a>
      </li>
      <li v-if="!$store.state.isUserLoggedIn" class="nav-item">
        <a class="nav-link" href="/signup">Signup</a>
      </li>
      <li v-if="$store.state.isUserLoggedIn" class="nav-item">
        <a @click="logout" class="nav-link" href="/">Logout</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/upload">Upload</a>        
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</template>



<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      alert("log out")
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
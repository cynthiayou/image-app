<template>
  <div class="form-row">   
    <div class="col-md-4 mb-3" style="margin: auto">
      <div id="error-message" v-bind="errorMessage">{{ errorMessage }}</div>
      <div class="form-group">
        <input class="form-control" type="email" name="email" v-model="email" v-on:input="email=$event.target.value" @focus="errorMessage=''" placeholder="Email" />
      </div>
      <div class="form-group">
        <input class="form-control" type="password" name="password" v-model="password" @focus="errorMessage=''" placeholder="Password" />
      </div>
      <div @click="login" class="form-group">
          <button class="btn btn-lg btn-light btn-block" style="background-color: #e3f2fd;">Log in</button>
      </div>
    </div>     
  </div>
</template>

<script>
import $ from 'jquery'
import ApiServices from '@/services/ApiServices'
export default {
  data () {
    return {
      errorMessage: '',
      email: '',
      password: ''
    }
  },
  methods:{
    async login () {
      try{
        if (this.email && this.password){
          const response = await ApiServices.login({
            email: this.email,
            password: this.password
          })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
          alert("You've successfully logged in")
          this.$router.push('/') 
        }     
        
      } catch (error){
        this.errorMessage = error.response.data.error
      }     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
  font-style: italic;
}
span {
  float:left;
}
.form-row {
  margin-top:60px;
}
#error-message{
  color: red;
  font-style: italic;
  margin-bottom: 40px;
}
</style>

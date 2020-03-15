<template>
  <div class="form-row">   
    <div class="col-md-4 mb-3" style="margin: auto">
      <h1 style="text-align: center">Create account</h1>
      <div class="form-group">          
        <input class="form-control" type="text" name="username" v-model="username" placeholder="username" @blur="checkName" /> 
        <span id="nameSpan"></span>          
      </div>
      <div class="form-group">
        <input class="form-control" type="email" name="email" v-model="email" placeholder="email" @blur="checkEmail" />
        <span id="emailSpan"></span>
      </div>
      <div class="form-group">
          <input class="form-control" type="password" name="password" v-model="password" placeholder="password" @blur="checkPwd" />
          <span id="pwdSpan"></span>
      </div>
      <div class="form-group">
          <input class="form-control" type="password" name="password2" v-model="password2" placeholder="Repeat password" @blur="checkPwd2" />
          <span id="pwdSpan2"></span>
      </div>
      <div @click="signup" class="form-group">
          <button class="btn btn-lg btn-primary btn-block">Sign Up!</button>
      </div>
    </div>     
  </div>
</template>

<script>
import $ from 'jquery'
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      username: '',
      email: '',
      password: '',
      password2: '',
      validUsername: false,
      validEmail: false,
      validPwd: false,
      validPwd2: false
    }
  },
  methods:{
    async signup () {
      if (this.validUsername && this.validEmail && this.validPwd && this.validPwd2){
        const response = await AuthenticationService.signup({
          username: this.username
        })
        console.log(response.data)}     
        alert("You have succefully signed up!")
        // this.$router.push('/') 
      
      
    },

    checkName(){
      if (this.username && /^[a-zA-Z0-9]+$/.test(this.username) ){
        $("#nameSpan").hide();
        this.validUsername = true;
      }else{
        $("#nameSpan").text("! Enter a valid username").attr("class", "error").show();
        this.validUsername = false;
      }
    },
    async checkEmail(){
      if (this.email && (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]{3,3}$/.test(this.email))){
        const response = await AuthenticationService.checkEmail({
          email: this.email,
        })
        if (response.data.state==='0'){
          this.validEmail = true;
          $("#emailSpan").hide();
        }else{
          $("#emailSpan").text("! Email already exists").attr("class", "error").show();
          this.validEmail = false;
        }
      }else{
        $("#emailSpan").text("! Enter a valid email").attr("class", "error").show();
        this.validEmail = false;
      }
    },
    checkPwd(){
      console.log(this.password)
      if (this.password && this.password.length > 5 ){
        $("#pwdSpan").hide();
        this.validPwd = true;
      } else{
        $("#pwdSpan").text("Password has to be at least 6 characters long").attr("class", "error").show();
        this.validPwd = false;
      }
    },
    checkPwd2(){
      console.log(this.password2)
      if (this.password2 && this.password2 === this.password){
        $("#pwdSpan2").hide();
        this.validPwd2 = true;
      } else {
        $("#pwdSpan2").text("Passwords don't match").attr("class", "error").show();
        this.validPwd2 = false;
      }
    },
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
</style>

<template>
  <div>
    <input type="text" name="username" v-model="username" />
    <br>
    <button @click="signup">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      username: ''
    }
  },
  methods:{
    async signup () {
      const response = await AuthenticationService.signup({
        username: this.username
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

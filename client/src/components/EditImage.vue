<template>
  <div class="form-row">   
    <div class="col-md-4 mb-3" style="margin: auto">

        <div class="form-group">
          <label for="imgTitle">New Title:</label>
          <input type="text" class="form-control" id="imgTitle" v-model="title" name="title" placeholder="Enter the title for your image">
        </div>
        <div class="form-group">
          <button @click="cancel" class="btn btn-sm btn-light">Cancel</button>
          <button @click="edit" class="btn btn-sm btn-light">Confirm</button>
        </div>
    </div>
  </div>
</template>



<script>
import ApiServices from '@/services/ApiServices'
export default {
  data () {
    return {
      title: '',
    }
  },
  methods: {
    cancel(){
      this.$router.push("/")
    },
    async edit(){
       try{
        if (!this.$store.state.isUserLoggedIn){
           this.$router.push({
            name: 'login'
          })   
        }else if (this.title){
          const response = await ApiServices.edit({
            title: this.title,
            id: this.$route.params.id
          })
          console.log(response.data)
          alert("Image successfully edited")    
        }  
      } catch (error){
        console.log(error)
      }     
    }

  } 
}
</script>

<style scoped>
.form-row {
  margin-top:40px;
}

</style>
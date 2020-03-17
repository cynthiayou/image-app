<template>
  <div class="form-row">   
    <div class="col-md-4 mb-3" style="margin: auto">
      <div id="error-message" v-bind="errorMessage">{{ errorMessage }}</div>
        <div class="form-group">
          <label for="imgTitle">Title:</label>
          <input type="text" class="form-control" id="imgTitle" v-model="title" name="title" @focus="errorMessage=''" placeholder="Enter the title for your image">
        </div>
        <div class="form-group">
          <label for="image">Image:</label>
          <input type="file" @change="onFileChanged" class="form-control-file" @focus="errorMessage=''" id="image" name="image">
        </div>
        <div @click="onUpload" class="form-group">
          <button class="btn btn-lg btn-light btn-block">Upload Image</button>
        </div>
    </div>
  </div>
</template>



<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      errorMessage: '',
      title: '',
      selectedFile: null
    }
  },
  methods: {
    onFileChanged (event){
      console.log("file clicked")
      this.selectedFile = event.target.files[0]

      // console.log(this.selectedFile)

    },
    async onUpload () {
      try{
        if (!this.$store.state.isUserLoggedIn){
           this.$router.push({
            name: '/login'
          })   
        }else {
          const response = await AuthenticationService.addImage({
            file: this.selectedFile
          })
          console.log(response.data)
          alert("Image successfully added")    
        }  
      } catch (error){
        this.errorMessage = err.reponse.data.error
      }     
    }
  } 
}
</script>

<style scoped>
.form-row {
  margin-top:60px;
}
#error-message{
  color: red;
  font-style: italic;
  margin-bottom: 40px;
}
</style>
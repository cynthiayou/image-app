<template>
  <div class="form-row">   
    <div class="col-md-4 mb-3" style="margin: auto">
      <div id="error-message" v-bind="errorMessage">{{ errorMessage }}</div>
        <div class="form-group">
          <label for="imgTitle">Title:</label>
          <input type="text" class="form-control" id="imgTitle" v-model="title" name="title" @focus="errorMessage=''" placeholder="Enter the title for your image">
        </div>
        <div class="form-group">
          <label for="image">Image <span style="font-style:italic; font-size:12px;">(< 800KB):</span></label>
          <input type="file" @change="onFileChanged" class="form-control-file" @focus="errorMessage=''" id="image" name="image">
        </div>
        <div @click="onUpload" class="form-group">
          <button class="btn btn-lg btn-light btn-block">Upload Image</button>
        </div>
    </div>
  </div>
</template>



<script>
import ApiServices from '@/services/ApiServices'
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
      this.selectedFile = event.target.files[0]
      // console.log(this.selectedFile)
    },
    async onUpload () {
      try{
        if (!this.$store.state.isUserLoggedIn){
           this.$router.push({
            name: 'login'
          })   
        }else {
          let formData = new FormData()
          formData.append('file', this.selectedFile);
          formData.append('title', this.title);
          formData.append('userId', this.$store.state.user.id);
          // console.log(formData)
          const response = await ApiServices.addImage(
            formData
          )
          console.log(response.data)
          alert("Image successfully added")    
        }  
      } catch (error){
        this.errorMessage = error.reponse.data.error
      }     
    }
  } 
}
</script>

<style scoped>
.form-row {
  margin-top:40px;
}
#error-message{
  color: red;
  font-style: italic;
  margin-bottom: 20px;
}
</style>
<template>
    <div class="row" style="margin-top:20px;">
        <div class="col-md-8">
          <img v-bind:src="'/static/' +imageUrl" style="width:100%;" alt="">
        </div>
        <div class="col-md-4">
          <div class="inline">
              <div class="row">
                  <div class="col-md-2">
                      <img src="http://www.solidbackgrounds.com/images/2880x1800/2880x1800-tiffany-blue-solid-color-background.jpg" width="50" height="50" alt="..." class="rounded-circle">
                  </div>
                  <div class="col-md-10">
                      <p v-bind="postedBy" class="text-success">{{ postedBy }}  <small v-bind="postedAt">  {{ postedAt }}</small></p>
                      <span class="glyphicon glyphicon-heart" v-bind="title">{{ title }}</span> 
                  </div>
              </div>
              <hr/>
              <input class="form-control" type="text" name="newComment" style="height:100px" v-model="newComment" placeholder="Please share your opinion:" />
              <button @click="addComment" class="btn btn-sm btn-primary pull-right" style="margin-top:5px; margin-bottom:10px;">Save</button>
              <div v-for="comment in comments">
                <p class="text-success">{{ comment.user.username }}   <small class="text-mute">   {{ comment.updatedAt }}:</small></p>
                <p style="margin-left:8px;">{{ comment.text }}</p>
                </br>
              </div>
            </div>
         </div>
    </div>  
</template>

<script>
import ApiServices from '@/services/ApiServices'
export default {
  name: 'ImageDetails',
  data () {
    return {
      postedBy: '',
      postedAt: '',
      title: '',
      comments: [],
      imageUrl: '',
      newComment: ''
    }
  },
  mounted: function(){
    this.getImageDetails();
  },
  methods:{
    async getImageDetails(){
      const id = this.$route.params.id
      const response = await ApiServices.getImageDetails(id)
      this.imageUrl = response.data.image.url
      this.postedBy = response.data.image.user.username
      this.postedAt = response.data.image.updatedAt.replace("T"," ").replace(".000Z","") 
      this.title = response.data.image.title
      this.comments = response.data.comments
      this.comments.forEach((comment)=>{
        comment.updatedAt = comment.updatedAt.replace("T"," ").replace(".000Z","")
      })
    },
    async addComment(){
      try{
        const response = await ApiServices.addComment({
          text: this.newComment,
          imageId: this.$route.params.id,
          userId: this.$store.state.user.id
        })
        alert("Thank you for your comment")
      } catch (error){
        console.log(error)
      }        
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  margin-top:20px;

}
p{
  margin-bottom: 3px;
}


</style>


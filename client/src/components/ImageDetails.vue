<template>
  <div class="container">
    <div class="row">
        <div class="col-md-8">
          <img src="/static/food.jpg" style="width:100%;" alt="">
        </div>
        <div class="col-md-4">
          <div class="inline">
              <div class="row">
                  <div class="col-md-3">
                      <img src="http://www.solidbackgrounds.com/images/2880x1800/2880x1800-tiffany-blue-solid-color-background.jpg" width="50" height="50" alt="..." class="rounded-circle">
                  </div>
                  <div class="col-md-9">
                      <small>Text Text Text Text</small>
                      <small>Text Text Text Text</small>
                      <small>Text Text Text Text</small>
                      <br/>
                      <span class="glyphicon glyphicon-heart"></span> Icon
                  </div>
              </div>
              <hr/>
              <input placeholder="Please write your opinion:" type="text" style="height:100px" class="form-control" />
              <button class="btn btn-sm btn-primary pull-right" style="margin-top:5px; margin-bottom:10px;">Save</button>
              <p class="text-success">Text Text Text</p>
              <p>TextTextText</p>
              <p class="text-mute">TextTextText</p>
              <br/>                               
              <p class="text-success">Text Text Text</p>
              <p>TextTextText</p>
              <p class="text-mute">TextTextText</p>
              <br/>

              
            </div>
         </div>
    </div>
  </div>

     
</template>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'ImageDetails',
  data () {
    return {
    }
  },
  mounted: function(){
    this.getImageDetails();
  },
  methods:{
    async getImageDetails(){
      
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  margin-top:20px;

}


</style>


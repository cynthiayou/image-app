<template>
  <div>
    <header class="jumbotron" style="margin-top: 15px; margin-bottom: 20px;"><!-- for header tag, no difference but a div except semantic meaning-->
    <div class="container"> <!--This inside container will give the text inside the jumbotron some space rather than being squeezed against the edge when minimize-->
        <h1>Welcome to CaptureLife !</h1>
        <p>Gorgeous scenery, unique insights and more.</p>
        <p>
            <a class="btn btn-primary btn-large" href="/upload">Upload a photo</a>
        </p>
    </div>
    </header>
    <div class="row text-center" style="display:flex; flex-wrap: wrap">
      <div v-for="image in images" class = "col-sm-6 col-md-3">
              <div class='thumbnail'>
                <a v-bind:href="'/image/'+ image.id">
                  <img style="width:100%;" v-bind:src="'/static/' +image.url" v-bind:alt ="image.title">
                </a>
                <div style="padding:5px;">
                  <h4>{{image.title}}</h4>
                </div>
              </div>
      </div>
      </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Images',
  data () {
    return {
      images:'',
      page: 1,
      imgFolder: '../static/',
      pageSize: 8

    }
  },
  mounted: function(){
    this.getImages();
  },
  methods:{
    // pageRefresh() {
    //   this.page = 1;
    //   this.getImages();
    // },
    async getImages(){
      const response = await AuthenticationService.getImages({
        page: this.page,
        pageSize: this.pageSize
      })
      this.images = response.data
      console.log(this.images)
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pic {
  height:200px;
  width:200px;
}
</style>

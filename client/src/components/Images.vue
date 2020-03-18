<template>
  <div>
    <header class="jumbotron" style="margin-top: 15px; margin-bottom: 0px;"><!-- for header tag, no difference but a div except semantic meaning-->
    <div class="container"> <!--This inside container will give the text inside the jumbotron some space rather than being squeezed against the edge when minimize-->
        <h1>Welcome to CaptureLife!</h1>
        <p>Gorgeous scenery, unique insights and more.</p>
        <p>
            <a class="btn btn-primary btn-large" href="/upload">Upload a photo</a>
        </p>
    </div>
    </header>
    <div>
      <b-navbar toggleable="lg"  style="background color:light;">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <span>Sort by:</span>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav style="margin-right:30px;">
            <b-nav-item @click="selectByDate">Date</b-nav-item>
            <b-nav-item @click="selectByName">Name</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav>
          <b-nav-item @click="viewAll" style="margin-right:20px;">View All</b-nav-item>
          <b-nav-item @click="viewMy">My Images</b-nav-item>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
              <b-form-input size="sm" v-model="keyword" name="keyword" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button @click="search" size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
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
import ApiServices from '@/services/ApiServices'
export default {
  name: 'Images',
  data () {
    return {
      images:'',
      keyword: '',
      tag: 'all'
    }
  },
  mounted: function(){
    this.getImages();
  },
  methods:{
    async getImages(){
      const response = await ApiServices.getImages(this.tag)
      this.images = response.data
    },
    async search(){
      try{
        console.log(this.keyword)
        const response = await ApiServices.search({
          keyword: this.keyword
        })
        this.images = response.data
      } catch (error){
        console.log(error)
      }        
    },
    viewAll(){
      this.tag = 'all'
      this.getImages()
    },
    viewMy(){
      if (!this.$store.state.isUserLoggedIn){
          this.$router.push({
          name: 'login'
        })   
      }else {
        this.tag = this.$store.state.user.id
        this.getImages()
      }
    },
    selectByDate(){
      this.images.sort((a, b) => {
        const dateA = a.updatedAt;
        const dateB = b.updatedAt;

      let comparison = 0;
      if (dateA > dateB) {
        comparison = 1;
      } else if (dateA < dateB) {
        comparison = -1;
      }
      return comparison;
      })
    },
    selectByName(){
      this.images.sort((a, b) => {
        const nameA = a.title;
        const nameB = b.title;

        let comparison = 0;
        if (nameA > nameB) {
          comparison = 1;
        } else if (nameA < nameB) {
          comparison = -1;
        }
        return comparison;
      })
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

<template>
  <div class="movie-view has-header">
    <scroller title="影院热映" type="hasCover" :items="hotmovie"></scroller>
    <scroller title="免费在线观影" type="hasCover" :items="topMovies"></scroller>
    <scroller title="新片速递" type="hasCover" :items="movieTags"></scroller>
    <scroller title="发现好电影" type="onlyString" :items="newMovies"></scroller>
    <types></types>
    <download-app></download-app>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Scroller from '../components/scroller'
import Types from '../components/types'
import DownloadApp from '../components/DownloadApp'

export default {
  components: { Scroller,Types,DownloadApp},
  name: 'movieview',
  data () {
    return {
        hotmovie:"",
        topMovies:'',
        movieTags:'',
    }
  },
  computed:{
      ...mapState({
      //       hotMovies: state => state.movie.hotMovies,
      //       topMovies: state => state.movie.topMovies,
      //       newMovies: state => state.movie.newMovies,
            newMovies: state => state.movie.movieTags
          })
  },
  methods: {
      getMovie: function () {
        this.$store.dispatch('getMovie')
      }
  },
  created(){
      this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters?count=8',{},{headers: {},emulateJSON: true }).then(function(response){
        this.hotmovie = response.data.subjects;
    });
    this.$http.jsonp('https://api.douban.com/v2/movie/coming_soon?count=8').then(function(response){
      this.topMovies = response.data.subjects;
      });
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=8').then(function(response){
        this.movieTags = response.data.subjects;
    });
      // this.$http.get('https://api.douban.com/v2/movie/in_theaters?count=8',{},{headers: {},emulateJSON: true }).then((response) => {
      //      this.hotmovie = response.data.subjects;
      //      console.log(this.hotmovie);
      // });
      // this.$http.get('https://api.douban.com/v2/movie/coming_soon?count=8',{},{headers: {},emulateJSON: true }).then((response) => {
      //      this.topMovies = response.data.subjects;
      //      console.log(this.topMovies);
      // });
      // this.$http.get('https://api.douban.com/v2/movie/top250?count=8',{},{headers: {},emulateJSON: true }).then((response) => {
      //      this.movieTags = response.data.subjects;
      //      console.log(this.movieTags);
      // });
  },
}
</script>

<style scoped>


</style>

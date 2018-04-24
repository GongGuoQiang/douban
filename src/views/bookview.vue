<template>
  <div class="movie-view has-header">
      <Scroller title="最受关注图书 | 虚构类" type="hasCover" :items="novel"></Scroller>
      <Scroller title="最受关注图书 | 非虚构类" type="hasCover" :items="reality"></Scroller>
      <Scroller title="豆瓣纸书" type="hasCover" :items="travel"></Scroller>
      <div class="promItem" slot="promItem">
        <img class="corver" src="../assets/book_zw.jpg" alt="">
        <div class="content">
          <span class="price">¥ 68</span>
          <p class="name">造物</p>
          <p class="info">改变世界的万物图典，3000幅图里的发明与冒险</p>
        </div>
      </div>
      <scroller title="发现好书" type="onlyString" :items="bookTags"></scroller>
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
  name: 'bookview',
  components:{Scroller, Types, DownloadApp},
  data () {
    return {
        novel:"",
        reality:"",
        travel:"",
    }
  },
  methods: {

  },
  created(){
      this.$http.jsonp('https://api.douban.com/v2/book/search?q=虚构类&count=8',{},{headers: {},emulateJSON: true }).then(function(response){
        this.novel = response.data.books;
        console.log(this.novel)
    });
    this.$http.jsonp('https://api.douban.com/v2/book/search?q=非虚构类&count=8',{},{headers: {},emulateJSON: true }).then(function(response){
      this.reality = response.data.books;
      console.log(this.reality)
    });
    this.$http.jsonp('https://api.douban.com/v2/book/search?q=旅行&count=8',{},{headers: {},emulateJSON: true }).then(function(response){
      this.travel = response.data.books;
      console.log(this.travel)
  });
},
computed:{
    ...mapState({
      bookTags: state => state.book.bookTags
    })
}
}
</script>

<style scoped>
  .promItem img{float: left;width: 10rem;}
  .content{overflow: hidden;margin-right: 1rem;}
  .content .price{float: right;font-size: 1.6rem;color: #e76648;line-height: 2.2rem;}
  .content .name{
    font-size: 2rem;
    color: #494949;
    margin: 1rem;
    max-width: 100%;
    line-height: 2.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}
.info {
    font-size: 1.3rem;
    font-weight: 300;
    line-height: 1.5;
    color: #9b9b9b;
}
.promItem{
    overflow: hidden;
    margin: 1.6rem 1.8rem .8rem 1.6rem;
}
</style>

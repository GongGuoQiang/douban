<template>
  <div class="scroller">
    <div class="header">
      <h2>{{title}}</h2>
      <a href="#">更多</a>
    </div>
    <div class="content">
      <slot name="promItem"></slot>
      <ul class="hasCover" v-if="type === 'hasCover'">
        <li v-for="item in items">
          <router-link :to="'subject/' + item.id" append>
            <img v-if="item.images" :src="item.images.large" alt="">
            <span class="title">{{item.title}}</span>
            <rating v-if="item.rating" :rating="item.rating"></rating>
          </router-link>
        </li>
      </ul>
      <ul class="onlyString" v-if="type === 'onlyString'">
        <li v-for="item in items" style="border-color: #FFAC2D;">
          <a :href="item.href" v-if="!item.line" :style="{color: item.color}">{{item.title}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Rating from './rating'

export default {
  name: 'scroller',
  props: ['title', 'type', 'items'],
  components: { Rating },
  data () {
    return {

    }
    },
}
</script>

<style scoped>
.scroller {
  padding-top: 1rem;
}

.header {
  height: 2.6rem;
  line-height: 2.6rem;
  padding: 0 1.6rem;
}
.header h2{float: left;}
.header a{float: right;color: #42bd56;font-size: 1.44rem}
.content {
  box-sizing: content-box;
}
.content ul {
    padding: 0.8rem 0;
  }
.hasCover {
    overflow-x: auto;
    white-space: nowrap;
    text-align: center;
}
.hasCover .title {
  display: block;
  max-width: 100%;
  margin-top: 1rem;
  line-height: 1.6rem;
  font-size: 1.6rem;
  color: #111;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.onlyString{
    overflow-x: auto;
    white-space: nowrap;
}
.onlyString li{
    display: inline-block;
    margin: 0 0 .8rem 1.6rem;
    font-size: 1.6rem;
    border: .1rem solid;
    border-radius: .4rem;
    vertical-align: middle;
}
.onlyString a {
    height: 5rem;
    line-height: 5rem;
    padding: 0 2.4rem;
    letter-spacing: .16rem;
    overflow: auto;
    display: block;
    text-align: center;
}
.onlyString li:empty {
    width: 100%;
    display: block;
    height: .1rem;
    border: 0;
    margin: 0;
}
.hasCover img {
    height: 15rem;
    width: 100%;
}
.hasCover li {
    display: inline-block;
    width: 10rem;
    margin-left: 1rem;
}
</style>

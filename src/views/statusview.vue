<template>
  <div class="status has-header">
    <banner></banner>
    <user-bar></user-bar>
    <div class="content-list">
      <card mold="quote" v-for="item in items" :key="item"></card>
      <a class="list-link" href="#">显示更多广播</a>
    </div>
    <download-app></download-app>
  </div>
</template>

<script>
import Banner from '../components/Banner'
import DownloadApp from '../components/DownloadApp'
import UserBar from '../components/UserBar'
import Card from '../components/Card'
export default {
    name: 'status',
    components:{Banner,DownloadApp,UserBar,Card},
    data () {
        return {
            items: new Array(10)
        }
    },

}
</script>
<style scoped>
.list-link {
  display: block;
  padding: 1.5rem 0;
  font-size: 1.6rem;
  line-height: 1.8rem;
  text-align: center;
  color: #42bd56;
}
</style>

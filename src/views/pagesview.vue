<template>
  <div class="pages-view">
     <Header @showTalion="open"></Header>
     <router-view ></router-view>
     <talionview v-show="talion" @closeTalion="close"></talionview>
  </div>
</template>

<script>
import Header from '../components/header'
import talionview from '../views/talionview'

export default {
    name:'pagesview',
  components: { Header,talionview },
  data () {
    return {
      talion: false
    }
  },
  methods: {
    open:function(){
        this.talion = true
    },
    close: function () {
      this.talion = false
    }
}
}
</script>

<style scoped>

</style>

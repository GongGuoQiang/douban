<template>
  <div class="home-view has-header">
    <SubNav mold="quickNav"></SubNav>
    <List mold="thumbnail" :items="events"></List>
    <InfiniteLoading :on-infinite="onInfinite" ref="infiniteLoading">
      <Loading slot="spinner"></Loading>
    </InfiniteLoading>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import InfiniteLoading from 'vue-infinite-loading'
import SubNav from '../components/subnav'
import List from '../components/list'
import Loading from '../components/loading'

export default {
  name: 'homeview',
  components: { SubNav,List,InfiniteLoading,Loading},
  data () {
    return {}
  },
  computed: {
    // Getting Vuex State from store/modules/activities
    ...mapState({
      events: state => state.activities.events
  })
  },
  created(){
    console.log(this.events)
  },
  methods: {
    // Using vue-infinite-loading
    onInfinite () {
      setTimeout(() => {
        this.loadMore()
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
    }, 3000)
    },
    // Dispatching Actions
    ...mapActions([
      'loadMore'
    ])
  }
}
</script>

<style scoped>
.sub-nav {
  margin: 0 1.8rem;
  padding-top: 0.2rem;
}
</style>

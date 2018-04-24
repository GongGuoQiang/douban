import Vue from 'vue'
import Vuex from 'vuex'

import movie from './module/movie'
import activities from './module/activities'
import book from './module/book'
import subject from './module/subject'
import group from './module/group'
import search from './module/search'
import user from './module/user'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        movie,
        activities,
        book,
        subject,
        group,
        search,
        user
    }
})

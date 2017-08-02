import Vue from 'vue'
import Router from 'vue-router'
import NewsList from '../components/NewsList.vue'
import NewsDetail from '../components/NewsDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'NewsList',
      component: NewsList
    },

    {
      path: '/detail/:id',
      // name: 'NewsDetail',
      component: NewsDetail
    }
  ]
})

<template>
  <div>
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in banner" :key="item.id">
        <router-link :to="`detail/${item.id}`" >
          <img :src="item.image"/>
        </router-link>
      </mt-swipe-item>
    </mt-swipe>

    <div v-for="item in datas">
      <router-link :to="`detail/${item.id}`">
        <div class="news-item">
          <img :src="item.images[0]"/>
          <p>{{item.title}}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'news-list',
  data () {
    return {
      banner: [],
      datas: []
    }
  },

  created () {
    this.loadData()
  },

  methods: {
    loadData () {
      console.log('loadData')
      Axios.get('/zhihu/api/4/news/latest')
        .then(response => {
          console.log(response.data)
          this.banner = response.data.top_stories
          this.datas = response.data.stories
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .mint-swipe{
    width:100%;
    height:20rem;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .news-item {
    display: flex;
    flex-flow:row;
    background-color: #ebeef5;
    width: auto;
    height: 7rem;
    margin-top: 1rem;
    padding: 1rem;

    img {
      flex: 0 0 7rem;
      width: 7rem;
      height: 7rem;
    }

    p {
      flex: 1 0 0;
      font-size: 1.6rem;
      color: black;

      margin-left: 1rem;
    }
  }
</style>

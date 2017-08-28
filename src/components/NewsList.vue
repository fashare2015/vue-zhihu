<template>
  <div>
    <el-carousel height="20rem">
      <el-carousel-item v-for="item in banner" :key="item.id">
        <img :src="item.image"/>
      </el-carousel-item>
    </el-carousel>

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
  .el-carousel__item{
    width:100%;
    height:100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .news-item {
    background-color: #ebeef5;
    width: auto;
    height: 7rem;
    margin-top: 1rem;
    padding: 1rem;

    img {
      width: 7rem;
      height: 7rem;
      position: absolute;
      left: 0;
      margin-left: 1rem;
    }

    p {
      font-size: 1.6rem;
      color: black;
      margin-left: 8rem;
    }
  }
</style>

<template>
  <div>
    <el-carousel height="300px">
      <el-carousel-item v-for="item in banner" :key="item.id">
        <img :src="item.image"/>
      </el-carousel-item>
    </el-carousel>

    <div v-for="item in datas">
      <router-link :to="`detail/${item.id}`">
        <div>
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
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>

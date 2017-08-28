<!--<style src="../assets/zhi.css"></style>-->
<template>
  <div>
    <img :src="this.datas.image"/>
    <div v-html="this.datas.body"></div>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'news-detail',
  data () {
    return {
      datas: {}
    }
  },

  created () {
    this.loadData(this.$route.params.id)
  },

  methods: {
    loadData (id) {
      console.log('loadData')
      Axios.get(`/zhihu/api/4/news/${id}`)
        .then(response => {
          console.log(response.data)
          this.datas = response.data
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../assets/zhi.css";

  img {
    width: 100%;
    height: 20rem;
  }
</style>

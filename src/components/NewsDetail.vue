<style src="../assets/zhi.css"></style>
<template>
  <div class="hello">
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
</style>

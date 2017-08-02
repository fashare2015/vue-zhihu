<template>
  <div class="hello">
    <div v-for="item in datas">
      <router-link to="/detail/1747159">
        <img :src="item.images[0]"/>
        <p>{{item.title}}</p>
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
</style>

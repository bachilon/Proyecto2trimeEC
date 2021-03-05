<style >
  .center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  
}
</style>
<template>
<div>
  <div v-if="!loading">
     <h3 class="p-3 mb-2 bg-success text-white text-center">Competiciones en : {{country}}</h3>
     <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre de la competición</th>
            <th>Detalles</th>
          </tr>
      </thead>
        <tbody>
          <tr v-for="data in datas" :key="data.id">
            <th></th>
            <td>{{data.name}}</td>
            <th>
              <router-link :to="'/team/'+country+'/'+data.id+'/'+data.name">  <div class="app"><vs-button>Dale!!</vs-button></div></router-link>
            </th>
          </tr>
        </tbody>
      </table>
  </div>
    <div v-else class="container">
      <img class="center" src="https://media.tenor.com/images/d5015577b1133a47299b149b6fab1aaa/tenor.gif" alt="loading">
    </div>
  </div>
  
</template>

<script>
/* eslint-disable */ 
import axios from 'axios'
export default {
    props:{
        id:String,
        country:String
    },
  data(){
    return{
        datas: [],
        loading:false,
        search:''

    }
  },
  mounted() {
  
    this.showliga()
  },
  methods: {
      showliga(id){
        this.loading=true
        const reqHeaders = {
        'headers':{
          'X-Auth-Token': '63693617bd0c4e58aab113bd552aafcf'
        }
      }
        axios.get('https://api.football-data.org/v2/competitions?areas='+this.id,reqHeaders).then(res => {
        this.datas = res.data.competitions
        this.loading = false
      }).catch ((err) => {
        console.log(err);
        
      })
    },
    computed:{
    filteredDatas:function(){
      return this.datas.filter((data)=>{
        return data.name.toLowerCase().match(this.search.toLowerCase())
      })
    }
  }
  }
}
</script>

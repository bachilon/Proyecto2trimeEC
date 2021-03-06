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
  
  <div v-if="!loading" class="container">
      <h3 class="p-3 mb-2 bg-warning text-white text-center">Información del equipo</h3>
      <p>Nombre del equipo: <b>{{datas.name}}</b></p>
      <p>Dirección: <b>{{datas.address}}</b></p>
      <p>Número de teléfono: <b>{{datas.phone}}</b></p>
      <p>Web oficial: <b>{{datas.website}}</b></p>
      <p>Año de fundación: <b>{{datas.founded}}</b></p>
      <p>Nombre del estadio: <b>{{datas.venue}}</b></p><br>
      <h4 class="text-center">Lista de jugadores</h4>
      <div class="input-group mb-12">
        <input v-model="search" type="text" class="form-control" placeholder="Busca al jugador que quieras ..." aria-label="Username"/>
        
      </div>
      <p>Búsqueda por: <b>{{search}}</b></p>
     <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre del jugador</th>
            <th>Más información</th>
          </tr>
      </thead>
        <tbody>
          <tr v-for="squad in filteredDatas" :key="squad.id">
            <th></th>
            <td>{{squad.name}}</td>
            <th>
              <router-link :to="'/player/'+squad.id+'/'+squad.name">   <div class="app"><vs-button>Dale!!</vs-button></div></router-link>
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
import axios from 'axios'
export default {
    props:{
        id:String,
        teamname:String
    },
  data(){
    return{
        datas: [],
        squads:[],
        loading:false,
        search:''
        
    }
  },
  mounted() {
  
    this.showdetails()
  },
  methods: {
      showdetails(id){
        this.loading=true
        const reqHeaders = {
        'headers':{
          'X-Auth-Token': '	63693617bd0c4e58aab113bd552aafcf'
        }
      }
        axios.get('https://api.football-data.org/v2/teams/'+this.id,reqHeaders).then(res => {
        this.datas = res.data
        this.squads = res.data.squad
        this.loading = false

      }).catch ((err) => {
        console.log(err);
        
      })
        console.log(id)
    }
  },
    computed:{
    filteredDatas:function(){
      return this.squads.filter((squad)=>{
        return squad.name.toLowerCase().match(this.search.toLowerCase())
      })
    }
  }
}
</script>
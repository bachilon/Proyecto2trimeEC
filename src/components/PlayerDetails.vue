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
      <h3 class="p-3 mb-2 bg-dark text-white text-center">Información</h3>
      <p>Nombre: <b>{{datas.name}}</b></p>
      <p>Fecha de nacimiento: <b>{{datas.dateOfBirth}}</b></p>
      <p>País de nacimiento: <b>{{datas.countryOfBirth}}</b></p>
      <p>Nacionalidad: <b>{{datas.nationality}}</b></p>
      <p>Posición: <b>{{datas.position}}</b></p>
      <p>Dorsal: <b>{{datas.shirtNumber}}</b></p>
     
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
        playername:String
    },
  data(){
    return{
        datas: [],
        loading:false
        
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
        axios.get('https://api.football-data.org/v2/players/'+this.id,reqHeaders).then(res => {
        this.datas = res.data
        this.loading=false
       

      }).catch ((err) => {
        console.log(err);
        
      })
        console.log(id)
    },
  }
}
</script>
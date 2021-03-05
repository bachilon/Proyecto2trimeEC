import Vue from 'vue'
import Router from 'vue-router'
import AllCountry from '@/components/AllCountry'
import Competition from '@/components/Competition'
import Team from '@/components/Team'
import TeamDetails from '@/components/TeamDetails'
import PlayerDetails from '@/components/PlayerDetails'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' 
  Vue.use(Vuesax, {
    // options here
  })


Vue.use(Router)

export default new Router({
    routes:[
        {   
            path:'/',
            name: 'Country',
            component: AllCountry
        },
        {   
            path:'/country/:id/:country',
            name: 'Show Liga',
            component: Competition,
            props: true
        },
        {   
            path:'/team/:country/:id/:liganame',
            name: 'Show Liga',
            component: Team,
            props: true
        },
        {   
            path:'/teamdetails/:id/:teamname',
            name: 'Show Liga',
            component: TeamDetails,
            props: true
        },
        {   
            path:'/player/:id/:playername',
            name: 'Show Liga',
            component: PlayerDetails,
            props: true
        }

        
    ]
})
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue';
import TeamsList from "@/components/teams/TeamsList";
import UsersList from "@/components/users/UsersList";
import TeamMembers from "@/components/teams/TeamMembers";


const app = createApp(App);

const routes = [
    {
        path: '/team',
        name: 'TeamsList',
        component: TeamsList
    },
    {
        path: '/users',
        name: 'UsersList',
        component: UsersList
    },
    {
        path: '/team/:teamId',
        name: 'TeamMembers',
        component: TeamMembers,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    // linkActiveClass: 'fire'
})

app.use(router);
app.mount('#app');


export default router; 
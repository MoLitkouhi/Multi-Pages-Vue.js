import { createApp } from 'vue';
import { createRouter, createHistory } from 'vue-router'

import App from './App.vue';
import TeamsList from "@/components/teams/TeamsList";
import UsersList from "@/components/users/UsersList";

const app = createApp(App);
const router = createRouter({
    history: createHistory(),
    routes: [
        {path: '/team', component: TeamsList},
        {path: '/users', component: UsersList}
    ]
})

app.use(router);
app.mount('#app');

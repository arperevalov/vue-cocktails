import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router';
import Home from './routes/Home.vue';
import Cocktail from './routes/Cocktail.vue';

const pinia = createPinia();
const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/', component: Home,
        },
        {
            path: '/cocktail/:name', component: Cocktail,
        }
    ]
})

createApp(App)
.use(pinia)
.use(router)
.mount('#app')

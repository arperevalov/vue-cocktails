import { createApp } from 'vue'
import './assets/css/app.sass'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router';
import Cocktail from './routes/Cocktail.vue';
import Error from './routes/Error.vue';

const pinia = createPinia();
const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/', 
            redirect: '/cocktail/margarita',
        },
        {
            path: '/cocktail/:name', 
            component: Cocktail,
        },
        {
            path: '/404', 
            component: Error,
        }
    ]
})

createApp(App)
.use(pinia)
.use(router)
.mount('#app')

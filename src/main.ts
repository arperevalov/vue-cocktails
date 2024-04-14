import { createApp } from 'vue'
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
            component: Cocktail,
        },
        {
            path: '/cocktail/:name', 
            component: Cocktail,
        },
        {
            path: '/:pathMatch(.*)*', 
            component: Error,
        }
    ]
})

createApp(App)
.use(pinia)
.use(router)
.mount('#app')

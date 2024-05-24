import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './routes/Home.vue'
import OverView from './routes/OverView.vue'
import Plot from './routes/Plot.vue'
import Form from './routes/Form.vue'
import './index.css';
const routes = [
    { path: '/', component: Home },
    { path: '/overview', component: OverView },
    { path: '/plot', component: Plot },
    { path: '/form', component: Form },
  ]
const router = createRouter({
    history: createWebHistory(),
    routes,
  })
const app = createApp(App);
app.use(router)
app.mount('#root');
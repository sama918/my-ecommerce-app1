import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import {routes} from './routes';
import App from './components/App.vue';
import store from './store';

const app = createApp(App);
app.config.devtools = true;

const router = createRouter({
  history: createWebHistory(),
  routes
});
store.dispatch('getProducts');
app.use(store);
app.use(router);
app.mount('#app'); 
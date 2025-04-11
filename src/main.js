import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import HeaderPrincipal from './components/HeaderPrincipal.vue';

Vue.component('HeaderPrincipal', HeaderPrincipal);

/* Importar o componente asincrono globalmente 
  Vue.component('HeaderPrincipal', () => import('./components/HeaderPrincipal.vue'));
*/

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

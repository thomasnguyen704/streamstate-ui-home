import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import VuePrismEditor from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";
Vue.component("prism-editor", VuePrismEditor);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

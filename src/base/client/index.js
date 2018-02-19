import Vue from 'vue';
import App from 'app/App';
import router from '../routes';
import store from '../store';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});
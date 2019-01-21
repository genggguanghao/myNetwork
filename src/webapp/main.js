
import App from './App.vue';
 import router from './routes';
 import './assets/css/default.css';
 import './assets/css/normalize.css';
 import 'css-doodle';
  //Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


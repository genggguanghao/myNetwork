// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
 import router from './routes';
 import './assets/css/default.css';
 import './assets/css/normalize.css';
import ElementUI from 'element-ui';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
 import 'element-ui/lib/theme-chalk/index.css';
import 'css-doodle';
// import store from './store';
// import iView from 'iview';
// import MyPlugin from './plugin/MyPlugin'
// import 'iview/dist/styles/iview.css';
// import './assets/style/markdown.css';
// import './assets/style/example.css';

Vue.use(mavonEditor)
 Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// 注册全局前置守卫
// router.beforeEach((to, from, next) => {
//     console.log(to.name)
//     console.log(to.path)
//     console.log(router.path)
    
// })

import Vue from 'vue'
import Router from 'vue-router'
import login from '../page/index/loginStart.vue'
import home from '../page/home/home.vue'
import container from '../page/home/container.vue'
import cssDoodle from '../page/home/cssDoodle.vue'
import articleList from '../page/learn/index/passageList.vue'
import js_style from '../page/learn/js_style/js_style.vue'
import nginx from '../page/learn/nginx/nginx.vue'
import http from '../page/learn/http/http.vue'


Vue.use(Router);
var routers = [
	{
		path: '/',
		name: '基础介绍',
		component: login,
	},
	{
		path: '/home',
		// redirect: '/M001/M0010101',
		component: home,
		children: [
			{path: '/', name: '内容', component: container},
			{path: 'cssDoodle', name: 'cssdoodle', component: cssDoodle},
			// {path: 'xmind', name: '前端架构知识体系', component: xmind},
			{path: 'learn', name: '学习园地', component: articleList},
			{path: 'article/:id', name: '文章详情', redirect: to => {
				const { hash, params, query } = to
				if (params.id) {
				  return `/article/${params.id}`
				} else {
				  return '/home'
				}  
			  }}
		]
	},
	{
		path: '/article',
		name: '文章详情',
		component: home,
		children: [
			{path: 'js_style', name: 'js规范', component: js_style},
			{path: 'nginx', name: 'nginx反向代理', component: nginx},
			{path: 'http', name: 'http协议', component: http},
		]
	}
]
export default new Router({
	routes: routers
})

// var routeMenuMap={};
// module.exports={
// 	routeMenuMap
// }

export const routeMenuMap = routers;
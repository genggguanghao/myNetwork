
<template>
<div class="w_header">
			<div class="container">
				<div class="w_header_top">
					<a href="#" class="w_logo"></a>
					<span class="w_header_nav">
					<ul>
						<!-- to后面的路径如果是/开头表示从根路径开始不写的表示从当前路径出发 -->
						<li><router-link  to="/home">首页</router-link ></li>
						<li><a href="http://94.191.23.210">个人简历</a></li>
						<li><router-link  to="/home/xmind">知识体系图</router-link ></li>
						<li><router-link  to="/home/learn">学习杂谈</router-link ></li>
						<li><router-link to="/home/cssDoodle">留言</router-link></li>
					</ul>
				</span>
					<SearchBar :getSearchDate="getSearchDate"></SearchBar>
				</div>
			</div>
		</div>
</template>

<script>
import SearchBar from '../../components/searchBar/searchBar.vue';
export default {
	name: 'head',
	data() {
		return {
			getSearchDate: [
				{
					id: '1',
					name: 'nginx',
					describ: 'nginx负载均衡以及配置',
					url:'/article/nginx'
				},
				{
					id: '2',
					name: 'http',
					describ: '请求头的含义以及keep-alive的含义',
					url:'/article/http'
				},
				{
					id: '3',
					name: 'JavaScript',
					describ: '你所被老大骂过的那些js',
					url:'/article/js_style'
				},
				{
					id: '4',
					name: 'Java',
					describ: 'java是一门面向对象的语言',
					url:'/'
				},
				{
					id: '5',
					name: 'houdini',
					describ: '哥',
					url:'/article/js_style'
				},
				{
					id: '6',
					name: 'Css',
					describ: '大',
					url:'/article/js_style'
				},
				{
					id: '7',
					name: 'Cssdoodle',
					describ: '哥',
					url:'/article/js_style'
				},{
					id: '8',
					name: 'Css-less',
					describ: '哥',
					url:'/article/js_style'
				},{
					id: '9',
					name: 'Css-sass',
					describ: '哥',
					url:'/article/js_style'
				}
				,{
					id: '10',
					name: 'Babel',
					describ: '哥',
					url:'/article/js_style'
				}
				,{
					id: '11',
					name: 'ajax',
					describ: '哥',
					url:'/article/js_style'
				},{
					id: '12',
					name: 'https',
					describ: '哥',
					url:'/article/http'
				}
				,{
					id: 'httpserver',
					name: 'ajax',
					describ: '哥',
					url:'/article/http'
				}
			],
		};
	},
	methods: {},
	components: {
		SearchBar,
	},
};
</script>
<style scoped>
.w_header {
	height: 55px;
	margin-bottom: -55px;
	padding: 0 130px;
	/*position:relative;*/
	position: fixed;
	z-index: 999;
	width: 100%;
	background: #222;
	box-shadow: 1px 3px 5px #39f;
	opacity: 0.9;
}
.w_header_top {
	height: 55px;
	min-width: 910px;
}
.w_logo {
	width: 220px;
	height: 55px;
	background-image: url(../../assets/img/logoo.png);
	background-repeat: no-repeat;
	background-position: center;
	float: left;
}
/*.w_slogan{
	display: inline-block;
	font-size: 30px;
	font-weight: 800;
	margin-top: 30px;
	margin-left: 20px;
}*/

.w_header_nav {
	/*display: inline-block;*/
	/*font-weight: 800;*/
	margin-top: 20px;
	/*margin-left: 20px;*/
}
.w_header_nav > ul {
	padding: 0px;
	margin: 0px;
}
.w_header_nav > ul > li {
	float: left;
	display: inline;
	/*position:relative;*/
	padding: 17.5px 0px;
}
.w_header_nav > ul > li > a {
	/*margin: 17.5px 0px;*/
	color: #eee;
	font-size: 14px;
	/*font-weight:bold;*/
	text-transform: uppercase;
	line-height: 10px;
	height: 10px;
	width: 80px;
	display: inline-block;
	text-align: center;
	font-family: 'Microsoft Yahei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
.w_header_nav > ul > li:hover {
	background: #999;
}
.w_header_nav > ul > li > a.active {
	color: #619d21;
}
</style>
<template>
<div>
     <div class="contentList" v-for="item in articleList" :key="item.id">
									<div class="panel panel-default" >
										<div class="panel-body">
											<div class="contentleft">
												<h4><router-link class="title" :to="item.url" >{{item.tittle}}</router-link></h4>
												<p>
													<a class="label label-default">{{item.label1}}</a>
													<a class="label label-default">{{item.label2}}</a>
												</p>
												<p class="overView">{{item.content}}</p>
												<p><span class="count"><i class="el-icon-edit"></i><a href="#">admin</a></span> <span class="count"><i class="el-icon-view"></i>阅读:{{item.readNum}}</span><span class="count"><i class="el-icon-view"></i>评论:{{item.diss}}</span><span class="count"><i class="el-icon-view"></i>{{item.data}}</span></p>
											</div>
											<div class="contentImage">
												<div class="row">
													<a href="#" class="thumbnail w_thumbnail">
														<img :src="item.imgUrl" alt="...">
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
                                </div>
</template>
<script>
export default {
	data() {
		return {
		 articleList:[{
                "url":"article/js_style",
                "id":"1",
                "tittle":"你所被老大骂的那些js",
                "content":"你有没有写过被老大骂的狗血的js代码，本文从函数，变量等多个方面进行代码的规范与整理，邪王能够对大家有帮助",
                "imgUrl":"img/slider/Aj6bieY.jpg",
                 "label1":"javaScript",
                 "label2":"规范",
                 "readNum":"666",
                 "diss":"20",
                 "data":"2018-08-02"
            },{
                "url":"article/nginx",
                "id":"2",
                 "tittle":"http的报文头含义 以及tcp的三次握手四次挥手",
                "content":"我们知道http协议采用的是 ’请求-应答‘ 模式，当使用普通模式非keep-alive，每个请求应答客户都要和服务器重新建立连接，挖成之后立即断开连接；当使用keep-alive模式，keep-Alive功能使客户端到服务器持续连接有效，提高效率",
                "imgUrl":"img/article/http.jpg",
                 "label1":"nginx",
                 "label2":"负载均衡",
                 "readNum":"666",
                 "diss":"20",
                 "data":"2018-08-02"
            },{
                "url":"article/http",
                "id":"3",
                 "tittle":"nginx反向代理及nginx的负载均衡",
                "content":"　总结来说：正向代理 是一个位于客户端和原始服务器(origin server)之间的服务器，为了从原始服务器取得内容，客户端向代理发送一个请求并指定目标(原始服务器)，然后代理向原始服务器转交请求并将获得的内容返回给客户端。客户端必须要进行一些特别的设置才能使用正向代理。",
                 "imgUrl":"img/article/nginx.jpg",
                 "label1":"nginx",
                 "label2":"node服务部署",
                 "readNum":"666",
                 "diss":"20",
                 "data":"2018-08-02"
            }]
		};
	},
	methods: {
		
	},
};
</script>
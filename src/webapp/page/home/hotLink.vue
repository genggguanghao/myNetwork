<template>
  <!--左侧开始-->
					<div class="w_main_right">

						<div class="panel panel-default sitetip">
							<a href="article_detail.html">
								<strong>站点公告</strong>
								<h3 class="title">学无止境</h3>
								<p class="overView">本站点仅作为个人学习以及记录心得的网站，前端的发展日异月新，只有不断的接收新的知识才能赶上时代的潮流。也欢迎大家踊跃发言探讨技术。</p>
							</a>
						</div>

						<div class="panel panel-default">
							<div class="panel-heading">
								<h3 class="panel-title">热门标签</h3>
							</div>
							<div class="panel-body">
								<div class="labelList">
									<a class="label label-default">Javascript</a>
									<a class="label label-default">Typescript</a>
									<a class="label label-default">Vue</a>
									<a class="label label-default" href="/tag/jQuery">jQuery</a>
									<a class="label label-default" href="/tag/jQuery选择器">React</a>
									<a class="label label-default" href="/tag/linux">linux</a>
									<a class="label label-default" href="/tag/Nginx">Nginx</a>
									<a class="label label-default" href="/tag/linux文件类型">Webpack</a>
									<a class="label label-default" href="/tag/chrome请求两次">chrome</a>
									<a class="label label-default" href="/tag/Redis">Gulp</a>
									<a class="label label-default" href="/tag/spring">CSS3d</a>
									<a class="label label-default" href="/tag/tomcat">Docker</a>
									<a class="label label-default" href="/tag/SyntaxHighlighter">PM2</a>
								</div>
							</div>
						</div>
					</div>
</template>

<script>
// import AppHeader from './head.vue'
// import AppFooter from './footer.vue'
export default {
  name: 'hotLink',
  components: {
    // AppHeader,
    // AppFooter,

  }
}
</script>
<style type="text/css">
  .w_container{
	min-height: 100%;
	padding: 55px 0px 40px 0px;
}
.w_main_row{
	/*padding-left: 15px;
	padding-right: 15px;*/

}
.w_main_left{
	margin: 20px 0px;
	/*padding: 0px 10px 0px 0px;*/

}
.w_main_right{
	margin: 20px 0px;
	/*padding: 0px 0px 0px 10px;*/

}

/*.w_carousel{
	margin-bottom: 20px;
}*/
.w_carousel .carousel-inner img{
	width: 100%;
	height: 350px;
}
/*博主置顶*/
.contenttop:hover{
	border: 1px #FF5E52 solid;
}
.contenttop>a{
	display: block;
	padding: 0px 15px 15px 20px;
}
.contenttop strong{
    background-color: #FF5E52;
    margin: -1px 0 0 0;
    display: inline-block;
    padding: 4px 15px;
    color: #fff;
    font-size: 14px;
    font-weight: normal;
}
.contenttop .title{
    color: #FF5E52;
    font-size: 20px;
    font-weight: normal;
    margin-top: 14px;
}
.contenttop .overView{
	color: #999;
    margin-bottom: 0;
}
/*公告*/
.sitetip:hover{
	border: 1px #8EC55F solid;
}
.sitetip>a{
	display: block;
	padding: 0px 15px 15px 20px;
}
.sitetip strong{
    background-color: #8EC55F;
    margin: -1px 0 0 0;
    display: inline-block;
    padding: 4px 15px;
    color: #fff;
    font-size: 14px;
    font-weight: normal;
}
.sitetip .title{
    color: #8EC55F;
    font-size: 20px;
    font-weight: normal;
    margin-top: 14px;
}
.sitetip .overView{
	color: #999;
    margin-bottom: 0;
}

.contentList .title{
	font-size: 16px;
	color: #333;
	font-weight:600;
}
.contentList a.title:hover{
	color: #337AB7;
}
.contentList .label{
	margin-right: 10px;
}

.contentList .overView{
	color: #555;
	line-height:1.5;
	color: #5f5f5f;
}
.count{
	margin-right: 10px;
	font-size:12px;
}
.count>i{
	margin-right: 5px;
}
.count>a{
	color: #5f5f5f;
}
.contentleft{
	width:75%;
	float: left;
}
.contentList .contentImage{
	float: right;
}
.contentList .contentImage .row{
	margin: 0px;
}
.contentList .contentImage .row .thumbnail{
	margin: 0px;
	padding: 0px;
}
.contentList .contentImage img{
    width: 160px;
    height: 160px;
}

.labelList{
	padding: 0px;
}
.labelList .label{
	float: left;
	margin: 5px;
	font-size: 14px;
}
.list-unstyled{
	padding-left:0px;
	list-style:none;
	margin-top:0px;
	margin-bottom:10px;
}
.sidebar li{
	border-bottom:1px solid #d8e6f8;
	padding:5px 0px;
}
.sidebar li a{
	font-size:14px;
	color:#000;
}
.sidebar li a:hover{
	color: #337AB7;
}
.shiplink li{
	background: #F3F3F3;
	border-radius: 50%;
    text-align: center;
    border-bottom: none;
}

.contentList .panel-body{
	box-shadow: 0px 8px 18px rgba(0,0,0,0.06);
	transition: all .2s ease-out;
}
.contentList .panel-body:hover{
	box-shadow: 0px 8px 18px rgba(0,0,0,0.15);
	transition: all .2s ease-out;
}


/*标签*/
.label {
    display: inline;
    padding: .2em .6em .3em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25em;
}
.labelList .label {
    float: left;
    margin: 5px;
    font-size: 14px;
}
.label-default {
    background-color: #777;
}
  </style>
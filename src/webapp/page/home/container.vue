
<template>

	<el-container>
			<div class="container">
				<div class="row w_main_row">
					
                 	
    <el-row>
       <el-col :span="18">
<!--滚动图开始-->
					<div class="w_main_left">
						<!--滚动图开始-->
						<div class="panel panel-default">
							<Swiper></Swiper>
						</div>

						<div class="panel panel-default contenttop">
							<a href="article_detail.html">
								<strong>博主置顶</strong>
								<h3 class="title">站点公告</h3>
								<p class="overView">目前本站点的功能仍在开发完善当中,简陋的功能还请谅解</p>
							</a>
						</div>

						<div class="panel panel-default">
							<div class="panel-heading">
								<h3 class="panel-title">最新发布</h3>
							</div>

							<div class="panel-body">
								<!--文章列表开始-->
								<PageList  ></PageList>
								<!--文章列表结束-->

							</div>
						</div>
					</div>

	  
  </el-col>
  <el-col :span="6">
	  <HotLink></HotLink>
  </el-col>	
</el-row>


				</div>
			</div>
			</el-container>

</template>
<script>
import Swiper from './swiper.vue';
import HotLink from './hotLink.vue';
import PageList from '../learn/index/pageList.vue';
export default {
	name: 'container',
	data() {
		return {
			
		};
	},
	components: {
		Swiper,
		HotLink,
		PageList,
	},
};
</script>
<style>
.w_container {
	min-height: 100%;
	padding: 55px 0px 40px 0px;
	width: 1170px;
	margin: 0 auto;
	position: relative;
	z-index: 2;
}
.w_main_row {
	/*padding-left: 15px;
	padding-right: 15px;*/
}
.w_main_left {
	margin: 20px 0px;
	/*padding: 0px 10px 0px 0px;*/
}
.w_main_right {
	margin: 20px 20px;
	/*padding: 0px 0px 0px 10px;*/
}
.panel {
	margin-bottom: 20px;
	background-color: #fff;
	border: 1px solid transparent;
	border-radius: 4px;
	-webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
	overflow: hidden;
}
.panel-default {
	border-color: #ddd;
}
/*.w_carousel{
	margin-bottom: 20px;
}*/
.w_carousel .carousel-inner img {
	width: 100%;
	height: 350px;
}
/*博主置顶*/
.contenttop:hover {
	border: 1px #ff5e52 solid;
}
.contenttop > a {
	display: block;
	padding: 0px 15px 15px 20px;
}
.contenttop strong {
	background-color: #ff5e52;
	margin: -1px 0 0 0;
	display: inline-block;
	padding: 4px 15px;
	color: #fff;
	font-size: 14px;
	font-weight: normal;
}
.contenttop .title {
	color: #ff5e52;
	font-size: 20px;
	font-weight: normal;
	margin-top: 14px;
}
.contenttop .overView {
	color: #999;
	margin-bottom: 0;
}

/*公告*/
.sitetip:hover {
	border: 1px #8ec55f solid;
}
.sitetip > a {
	display: block;
	padding: 0px 15px 15px 20px;
}
.sitetip strong {
	background-color: #8ec55f;
	margin: -1px 0 0 0;
	display: inline-block;
	padding: 4px 15px;
	color: #fff;
	font-size: 14px;
	font-weight: normal;
}
.sitetip .title {
	color: #8ec55f;
	font-size: 20px;
	font-weight: normal;
	margin-top: 14px;
}
.sitetip .overView {
	color: #999;
	margin-bottom: 0;
}

.contentList .title {
	font-size: 16px;
	color: #333;
	font-weight: 600;
}
.contentList a.title:hover {
	color: #337ab7;
}
.contentList .label {
	margin-right: 10px;
}

.contentList .overView {
	color: #555;
	line-height: 1.5;
	color: #5f5f5f;
}
.count {
	margin-right: 10px;
	font-size: 12px;
}
.count > i {
	margin-right: 5px;
}
.count > a {
	color: #5f5f5f;
}
.contentleft {
	width: 75%;
	float: left;
}
.contentList .contentImage {
	float: right;
}
.contentList .contentImage .row {
	margin: 0px;
}
.contentList .contentImage .row .thumbnail {
	margin: 0px;
	padding: 0px;
}
.contentList .contentImage img {
	width: 160px;
	height: 160px;
}

.labelList {
	padding: 0px;
}
.list-unstyled {
	padding-left: 0px;
	list-style: none;
	margin-top: 0px;
	margin-bottom: 10px;
}
.sidebar li {
	border-bottom: 1px solid #d8e6f8;
	padding: 5px 0px;
}
.sidebar li a {
	font-size: 14px;
	color: #000;
}
.sidebar li a:hover {
	color: #337ab7;
}
.shiplink li {
	background: #f3f3f3;
	border-radius: 50%;
	text-align: center;
	border-bottom: none;
}

.contentList .panel-body {
	box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.06);
	transition: all 0.2s ease-out;
}
.contentList .panel-body:hover {
	box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.15);
	transition: all 0.2s ease-out;
}

.panel-default > .panel-heading {
	color: #333;
	background-color: #f5f5f5;
	border-color: #ddd;
}
.panel-heading {
	padding: 10px 15px;
	border-bottom: 1px solid transparent;
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
}
.panel-title {
	margin-top: 0;
	margin-bottom: 0;
	font-size: 16px;
	color: inherit;
}
.panel-body {
	padding: 15px;
	overflow: hidden;
}
</style>
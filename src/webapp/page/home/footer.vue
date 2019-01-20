
<template>
     <div class="w_foot">
			<div class="w_foot_copyright">Copyright &copy; 2018-2020, www.gengguanghao.com. All Rights Reserved. <span>|</span>
				<a target="_blank" href="http://gengguanghao.com/" rel="nofollow">豫ICP备18038021号-1</a>
			</div>
		</div>
</template>
<script>
export default {
	name: 'footer',
	data() {
		return {
			userName: '',
      password: '',
      loginInfo:{
        userName:"gengguanghao",
        password:"123456"
      }
		};
	},
	methods: {
		
	},
};
</script>
<style scoped>
.w_foot{
	height: 40px;

	margin-top: -40px;
}
.w_foot_link{
	height: 110px;
	background: #DDD;
	text-align: center;
	font-family: "微软雅黑";
	padding-top: 10px;
}
.w_foot_copyright{
	height: 40px;
	text-align: center;
	padding-top: 10px;
	background: #414141;
	color:#b2bcc5;
	font-size:13px;
}
.w_foot_copyright>a{
	color:#b2bcc5;
	text-decoration:none;
	font-size:13px;
}

</style>
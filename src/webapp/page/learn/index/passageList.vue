<template>
               <div class="panel panel-default">
							<div class="panel-heading">
								<h3 class="panel-title">最新发布</h3>
							</div>

							<div class="panel-body">
								<!--文章列表开始-->
								<PageList ></PageList>
								<!--文章列表结束-->

							</div>
						</div>


</template>
<script>
import pageList from './pageList.vue';
export default {
	data() {
		return {
		
		};
    },
    components:{
       "PageList":pageList
    },
	methods: {
		changeData(value, render) {
			console.log(render);
		},
	},
};
</script>
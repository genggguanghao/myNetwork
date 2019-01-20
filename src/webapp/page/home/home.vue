<template>
  <div class="app">
    <AppHeader name="default"/>
    <div class="w_container">
     <router-view></router-view>
     </div>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from './head.vue'
import AppFooter from './footer.vue'
export default {
  name: 'contaier',
  components: {
    AppHeader,
    AppFooter,

  },
  computed: {
    name () {
      return this.$route.name
    },

    list () {
      return this.$route.matched
    }
  }
}
</script>
<style scoped>
.app{
  height: 100%;
  background: #ededed;
  text-align: left;
}
*{
	box-sizing: border-box;
	-moz-box-sizing:border-box;
	-webkit-box-sizing: border-box;
}
a,a:hover{
	text-decoration: none;
	color: #333;
}
  </style>
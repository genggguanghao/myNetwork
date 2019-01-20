<template>
    <div v-bind:style="articleClass">
    <mavon-editor v-html="value" :subfield="false" :defaultOpen="defaultData" :toolbarsFlag="false" :boxShadow="false" @change="changeData" />
    </div>
</template>
<script>
import README from './js-style.md';
export default {
    data() {
        return {//value的值是经过markdown解析后的文本，可使用`@change="changeData"`在控制台打印显示
            value: README,
            defaultData: "preview",
            articleClass:{
                padding:"20px",
                background: "#ffffff",
            }
        };
    },
    methods: {
        changeData(value, render) {
            console.log(render);
        }
    }
};
</script>
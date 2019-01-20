import IndexModels from "../models/indexModel";
import safeRequest from "../lib/safeRequest.js";

const indexCtroller = {
  indexAction() {
    return async (ctx, next) => {
      const indexModle = new IndexModels();
      const result = await indexModle.getDate();
      //const result2 = result+aaa;//如果是同步为定义变量的话，try...catch就会捕捉到。
      ctx.body = await ctx.render("boke/pages/test.html", { "data": result })
    }
  },
  testAction() {
    return async (ctx, next) => {
     // ctx.body ="你好朋友"
      ctx.body = await ctx.render("index.html", {})
      //ctx.body = await ctx.render("index/pages/test.html")
    }
  },
  indexUpdate() {
    return async (ctx, next) => {
      //获取出数据
      console.log(ctx.request.body) //经过中间件处理 可以获取请求报问体
      //数据拼装
      var options = {
        method: ctx.request.method,
        uri: 'http://122.112.234.44:8080/Test1/login.do',
        body:ctx.request.body,
        json: true // Automatically stringifies the body to JSON
      };
      //创建请求对象
      var safeR = new safeRequest();
      safeR.updateNum(options)
        .then(function (data) {
          ctx.message = data;
        }).catch(function (error) {
          ctx.throw('body parse error', error);
        })
      //  const indexModle = new IndexModels();
      //  const result = await indexModle.update(ctx.request.body);

      // ctx.body =await ctx.render("index/pages/test.html")
    }
  }
}
export default indexCtroller;
import koa from "koa";  //框架的大狗可以参考YII
import config from "./config/index";
import routes from "./routes/routesinit";
import router from "koa-simple-router";
import errorHandler from "./middwares/errorHandler";
import render from "koa-swig";
import co from "co";
import serve from "koa-static"
import log4js from 'log4js';
import bodyParser from 'koa-bodyparser';//处理post请求
log4js.configure({
  appenders: { cheese: { type: 'file', filename: __dirname + '/logs/yideng.log' } },//filename文件夹位置
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});
const logger = log4js.getLogger('cheese');
const app = new koa();
app.use(bodyParser());
//初始化路由
errorHandler.error(app, logger);
routes.init(app, router);
//初始化静态目录
app.use(serve(config.staticDir))
app.context.render = co.wrap(render({
  root: config.viewsDir,
  autoescape: true,
  cache: 'memory', // disable, set to false
  ext: 'html',
  writeBody: false
}));
app.listen(config.port, () => {
  console.log(`server is run this port is${config.port}`)
})
"use strict";

var _koa = require("koa");

var _koa2 = _interopRequireDefault(_koa);

var _index = require("./config/index");

var _index2 = _interopRequireDefault(_index);

var _routesinit = require("./routes/routesinit");

var _routesinit2 = _interopRequireDefault(_routesinit);

var _koaSimpleRouter = require("koa-simple-router");

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _errorHandler = require("./middwares/errorHandler");

var _errorHandler2 = _interopRequireDefault(_errorHandler);

var _koaSwig = require("koa-swig");

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _co = require("co");

var _co2 = _interopRequireDefault(_co);

var _koaStatic = require("koa-static");

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _log4js = require("log4js");

var _log4js2 = _interopRequireDefault(_log4js);

var _koaBodyparser = require("koa-bodyparser");

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//处理post请求
_log4js2.default.configure({
  appenders: { cheese: { type: 'file', filename: __dirname + '/logs/yideng.log' } }, //filename文件夹位置
  categories: { default: { appenders: ['cheese'], level: 'error' } }
}); //框架的大狗可以参考YII

const logger = _log4js2.default.getLogger('cheese');
const app = new _koa2.default();
app.use((0, _koaBodyparser2.default)());
//初始化路由
_errorHandler2.default.error(app, logger);
_routesinit2.default.init(app, _koaSimpleRouter2.default);
//初始化静态目录
app.use((0, _koaStatic2.default)(_index2.default.staticDir));
app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
  root: _index2.default.viewsDir,
  autoescape: true,
  cache: 'memory', // disable, set to false
  ext: 'html',
  writeBody: false
}));
app.listen(_index2.default.port, () => {
  console.log(`server is run this port is${_index2.default.port}`);
});
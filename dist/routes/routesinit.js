"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _indexCotroller = require("./indexCotroller.js");

var _indexCotroller2 = _interopRequireDefault(_indexCotroller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routesInit = {
   init(app, router) {
      app.use(router(_ => {
         console.log(111);
         _.get("/", _indexCotroller2.default.testAction());
      }));
   }

};
exports.default = routesInit;
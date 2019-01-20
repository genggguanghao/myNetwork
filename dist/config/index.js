"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require("path");

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let config = {
    env: process.env.NODE_ENV,
    staticDir: (0, _path.join)(__dirname, "..", "assets"),
    viewsDir: (0, _path.join)(__dirname, "..", ""),
    getDadePath: "http://192.168.12.1" //请求外部ip
};
if (process.env.NODE_ENV == "development") {
    const localConfig = {
        port: Math.ceil(Math.random() * 10000)
    };
    config = _lodash2.default.extend(config, localConfig);
    console.log("+++++++" + process.env.NODE_ENV);
}
if (process.env.NODE_ENV == "production") {
    const proConfig = {
        port: 3000
    };
    config = _lodash2.default.extend(config, proConfig);
}
exports.default = config;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class safeRequest {
    updateNum(options, cb) {
        return new Promise((resolve, reject) => {
            (0, _requestPromise2.default)(options).then(function (result) {
                //   const info=JSON.parse(result);
                //   if(info){
                //       resolve(info);
                //   }else{
                //       reject({});
                //   }
                console.log(result);
            });
        });
    }
}
exports.default = safeRequest;
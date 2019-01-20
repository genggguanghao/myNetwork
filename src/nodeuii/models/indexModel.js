
/** 
 indexmodle类 生成一部数据
 @class
**/
import safeRequest from "../lib/safeRequest.js"
export default class IndexModel {
    //可以用jsdoc生成注释文档
    /**  
     *@constructor
     *@param {string} app koa2的上下文环境
    **/
    constructor(app) {
        this.app = app;
    }
    /** 
     * @returns {Promise} 返回的异步处理结果
     * @example
     * return new promise
     * getDate
     * 
     * **/
    getDate() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("helloworld")//如果设置未定义的变量，报错模板是否兜底。(但是并不能兜底。因为try..catch不捕获异步报错)
            }, 100)
        }
        )
    }
    update(options,cb){
        var safeR = new safeRequest();
        safeR.updateNum(options,cb)
        .then(function(){
            
        })
    }
     
}
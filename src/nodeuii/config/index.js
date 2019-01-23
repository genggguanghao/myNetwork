import {join} from "path";
import lodash from "lodash";
let config ={
    env:process.env.NODE_ENV,
    staticDir:join(__dirname,"..","assets"),
    viewsDir:join(__dirname,"..",""),
    getDadePath:"http://192.168.12.1"//请求外部ip
}
console.log(process.env.NODE_ENV+"++++++++++++++++++++++++++env")
if(process.env.NODE_ENV=="development"){
    const localConfig ={
        port:3000
    }
    config=lodash.extend(config,localConfig);
}
if(process.env.NODE_ENV=="production"){
    const proConfig ={
        port:3000
    }
    config=lodash.extend(config,proConfig);
}
export default config;
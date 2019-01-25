//局部模式
var shell = require('shelljs');
//删除旧包dist
console.log("开始删除文件.....")
shell.rm('-rf', '/home/fqy/dist');
console.log("结束删除文件")
//复制 /home/dist 文件夹  到/home/fqy/
console.log("开始copy文件.....")
shell.cp('-R', '/home/dist', '/home/fqy');
console.log("结束copy文件")
//启动重新启动PM2
 shell.cd('/home/fqy');
 console.log("重启pm2........") 
 shell.exec('npm run server.restart'); //pm2要建立全局软连接
 console.log("服务重启完成")

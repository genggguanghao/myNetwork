//局部模式
var shell = require('shelljs');
//gulp开发环境打包
if (shell.exec('cross-env NODE_ENV=development gulp').code !== 0) {
  shell.echo('Error: gulp.dev failed');
  shell.exit(1);
}
// // webpack开发环境打包
if (shell.exec('webpack --mode development').code !== 0) {
  shell.echo('Error: webpack failed');
  shell.exit(1);
}
//打包完成启动本地服务
// shell.exec('cross-env NODE_ENV=development node ./dist/app.js');


//打完包上送至服务器
shell.exec('scp -r ./dist  root@94.191.23.210:/home')
//打完包登陆服务器激活服务器脚本
 shell.exec('ssh  root@94.191.23.210  node /home/fqy/shell_dev.js');
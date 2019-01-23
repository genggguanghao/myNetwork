//局部模式
var shell = require('shelljs');

//执行gulp打包
if (shell.exec('cross-env NODE_ENV=production gulp').code !== 0) {
  shell.echo('Error: gulp.pro failed');
  shell.exit(1);
}

//执行wepack打包
if (shell.exec('webpack --mode production').code !== 0) {
  shell.echo('Error: webpack.pro failed');
  shell.exit(1);
}
//打完包上送至服务器
shell.exec('scp -r ./dist  root@94.191.23.210:/home')
//打完包登陆服务器激活服务器脚本
 shell.exec('ssh  root@94.191.23.210  node /home/fqy/shell/shell_server.js');
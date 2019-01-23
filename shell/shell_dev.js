//局部模式
var shell = require('shelljs');
// // webpack开发环境打包
if (shell.exec('webpack --mode development').code !== 0) {
  shell.echo('Error: webpack failed');
  shell.exit(1);
}
//gulp开发环境打包
if (shell.exec('cross-env NODE_ENV=development gulp').code !== 0) {
  shell.echo('Error: gulp.dev failed');
  shell.exit(1);
}

//打包完成启动本地服务
 shell.exec('cross-env NODE_ENV=development node ./dist/app.js');



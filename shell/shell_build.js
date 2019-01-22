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

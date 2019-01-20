const pluginName = 'htmlAfterPlugin';
const assetsHelp = (data)=>{
  let css=[],js=[];
  const dir={
      js:item=>`<script src=${item}></script>`,
      css:item=>`<link rel="stylesheet" href=${item}> </link>`
  }
  for(let jsitem of data.js){
      js.push(dir.js(jsitem))
  }
  for(let cssitem of data.css){
    css.push(dir.css(cssitem))
}
return{
    js,css
}
}
class HtmlAfterPlugin {
    apply(compiler) {//初始化的时候回调用apply，compiler含有很多webpak的钩子
        compiler.hooks.compilation.tap(pluginName, compilation => {//所有webpack的chunks秀在compilation
            compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tap(pluginName,htmlPluginDate=>{
                const result = assetsHelp(htmlPluginDate.assets)
                let _html= htmlPluginDate.html;
                _html = _html.replace("<!--injectjs-->",result.js.join(""));//js替换要放在的位置
                _html = _html.replace("<!--injectcss-->",result.css.join(""));
                htmlPluginDate.html = _html;
            })
            console.log("webpack 构建过程开始！+++++++++++++++");
        });
    }
}
module.exports = HtmlAfterPlugin;
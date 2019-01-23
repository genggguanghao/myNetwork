module.exports = {
    apps : [
        {
          name: "FQY",
          script: "./dist/app.js",
          watch: true,
          env: {
            "NODE_ENV": "development"
          },
          env_production: {
            "NODE_ENV": "production",
          }
        }
    ]
  }
  //您可以根据需要定义任意数量的环境，只需记住您必须传递env_要使用的环境名称（之后）--env。
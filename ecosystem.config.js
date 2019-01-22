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
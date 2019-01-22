module.exports = {
    apps : [
        {
          name: "FQY",
          script: "./dist/app.js",
          watch: true,
          env_development: {
            "NODE_ENV": "development"
          },
          env_uat: {
            "NODE_ENV": "uat"
          },
          env_production: {
            "NODE_ENV": "production",
          }
        }
    ]
  }
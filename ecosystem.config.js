module.exports = {
  apps : [{
    name: "fec",
    script: "./Server/app.js",
    instances: "max",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
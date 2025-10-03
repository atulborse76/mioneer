module.exports = {
  apps: [
    {
      name: "mioneer",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "development",
        PORT: 3010,
      },
    },
  ],
};

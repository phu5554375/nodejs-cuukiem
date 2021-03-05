module.exports = {
    apps : [{
      name: "cuukiem",
      script: 'index.js',
      watch: '.',
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
      error_file: '~/cuukiemlogs/err.log',
      out_file: '~/cuukiemlogs/out.log',
      log_file: '~/cuukiemlogs/combined.log',
      time: true
    }]
  };
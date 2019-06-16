module.exports = {
  webpack: (config, options, webpack) => {
    config.output = Object.assign({}, config.output, {
      filename: 'vanilla.js',
      sourceMapFilename: 'vanilla.map',
    });

    config.plugins.push(new webpack.BannerPlugin({
      banner: '#!/usr/bin/env node',
      raw: true,
    }));

    config.devtool = false;

    return config;
  },
};

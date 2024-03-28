const path = require('path');

module.exports = {
  reactStrictMode: true,
  transpilePackages: ['@note/ui'],
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
};

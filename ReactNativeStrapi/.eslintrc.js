const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
      },
    },
  ],
  options: {
    source: "tsconfig",
    // baseUrl SHOULD be specified
    // plugin does not take it from tsconfig
    baseUrl: ".",
    /* tsConfigPath should point to the file where "baseUrl" and "paths" 
    are specified*/
    tsConfigPath: "./tsconfig.json"
  },
  plugins: ['@typescript-eslint', new TsconfigPathsPlugin()],
};

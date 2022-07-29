module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["module-resolver", {
      root: ['.'],
      alias: {
          '@src': './src',
      },
    }],
    ["module:react-native-dotenv", {
      envName: "BASE_URL",
      moduleName: "react-native-dotenv",
      path: ".env",
      blacklist: null,
      whitelist: ['BASE_URL'],
      safe: false,
      allowUndefined: false
    }]  
  ]
};
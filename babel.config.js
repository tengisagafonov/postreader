module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          app: './app',
          assets: './app/assets',
          config: './app/config',
          constants: './app/constants',
          screens: './app/screens',
          components: './app/components',
          store: './app/store',
          types: './app/types',
          utils: './app/utils',
        },
      },
    ],
    'jest-hoist',
  ],
};

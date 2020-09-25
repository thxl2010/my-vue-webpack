module.exports = {
  presets: ['@vue/cli-plugin-babel/preset', '@vue/babel-preset-jsx'],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    [
      'import',
      {
        libraryName: 'view-design',
        libraryDirectory: 'src/components',
      },
    ],
  ],
};

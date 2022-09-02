module.exports = {
  extends: '@antfu',
  overrides: [
    {
      files: ['src/**/*'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
}

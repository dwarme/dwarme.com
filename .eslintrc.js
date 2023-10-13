/**
 * @type {import("@types/eslint").Linter.BaseConfig}
 */
module.exports = {
  extends: ['plugin:hydrogen/recommended', 'plugin:hydrogen/typescript'],
  rules: {
    'hydrogen/prefer-image-component': 'off',
    'jsx-a11y/media-has-caption': 'off',
  },
};

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    'no-console': 1,
    'prettier/prettier': 2
  }
};

/*{
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true
  },
  "extends": ["airbnb-base"],
  "parserOptions": {
    "ecmaVersion": 12
  },
  "rules": {
    "prefer-arrow-callback": 0,
    "comma-dangle": 0,
    "func-names": 0,
    "space-before-function-paren": 0,
    "max-len": 0,
    "no-multi-spaces": 0,
    "no-trailing-spaces": 0,
    "object-curly-spacing": 0,
    "no-tabs": 0,
    "no-unused-expressions": 0,
    "no-sequences": 0,
    "no-mixed-spaces-and-tabs": 0,
    "no-await-in-loop": 0,
    "guard-for-in": 0,
    "no-restricted-syntax": 0,
    "no-underscore-dangle": 0,
    "no-unused-vars": 0,
    "no-empty-function": 0,
    "no-console": 0
  },
  "globals": {
    "artifacts": "readonly",
    "describe": "readonly",
    "beforeEach": "readonly",
    "it": "readonly"
  }
}*/

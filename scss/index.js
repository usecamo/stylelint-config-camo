'use strict';

module.exports = {
  'extends': '../css',
  'plugins': [
    'stylelint-scss'
  ],
  'rules': {
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': null,
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-colon-space-after': 'always-single-line',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-default': [
      true,
      {
        'ignore': 'local'
      }
    ],
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/operator-no-newline-after': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,
    'scss/partial-no-import': true,
    'scss/selector-no-redundant-nesting-selector': true
  }
};

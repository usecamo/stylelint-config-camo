'use strict';

const stylelint = require('stylelint');

test('all css rules are configured correctly', () => {
  const config = require('../css');

  return stylelint.lint({
    code: 'a { font-weight: bold; }',
    config
  }).then(data => {
    expect(data.results.length).toBeGreaterThan(0);
    expect(data.results[0].invalidOptionWarnings).toHaveLength(0);
    expect(data.results[0].deprecations).toHaveLength(0);
  });
});

test('all scss rules are configured correctly', () => {
  const config = require('../scss');

  return stylelint.lint({
    code: 'a { font-weight: bold; }',
    configBasedir: __dirname,
    config
  }).then(data => {
    expect(data.results.length).toBeGreaterThan(0);
    expect(data.results[0].invalidOptionWarnings).toHaveLength(0);
    expect(data.results[0].deprecations).toHaveLength(0);
  });
});

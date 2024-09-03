/** @type {import('stylelint').Config} */
export default {
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'layer', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
  },
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  plugins: [],
  reportDescriptionlessDisables: true,
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
  allowEmptyInput: true,
  cache: true,
  fix: true,
  overrides: [],
}

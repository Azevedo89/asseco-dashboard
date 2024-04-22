module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [0, 'always'],
    'footer-max-line-length': [0, 'always'],
    'header-max-length': [0, 'always'],
    'subject-case': [2, 'always', ['sentence-case']],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', ['feat', 'fix', 'remove', 'security', 'chore', 'ci', 'docs']],
  },
}
